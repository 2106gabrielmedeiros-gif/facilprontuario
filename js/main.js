// ======== ESTADO DA APLICAÇÃO ========
let selectedExams = [];
let findingsState = {};
let customExams = {};
let customAdditions = {};
let likelihoodData = {};
let editModeEnabled = false;

// ======== INICIALIZAÇÃO ========
document.addEventListener('DOMContentLoaded', function () {
    loadCustomData();
    loadEditModePreference();
    renderExamSelection();
    loadSessionState();
    setupTheme();
    initializeEditModeToggle();
    initStepperNavigation();
    const panel = document.getElementById('previewPanel');
    const btn = document.getElementById('togglePreviewBtn');
    if (panel && btn) {
        panel.classList.remove('collapsed');
        updatePreviewToggleLabel(true);
        btn.addEventListener('click', togglePreviewPanel);
        positionPreviewToggle();
        window.addEventListener('resize', positionPreviewToggle);
    }

    const exportBtn = document.getElementById('export-button');
    if (exportBtn) {
        exportBtn.addEventListener('click', () => exportData('exams'));
    }
});

function loadEditModePreference() {
    const stored = localStorage.getItem('editModeEnabled');
    editModeEnabled = stored ? JSON.parse(stored) : false;
    document.body?.classList.toggle('edit-mode-active', editModeEnabled);
}

function initializeEditModeToggle() {
    const toggleBtn = document.getElementById('editModeToggleBtn');
    if (!toggleBtn) return;
    updateEditModeToggleUI(toggleBtn);
    toggleBtn.addEventListener('click', () => {
        editModeEnabled = !editModeEnabled;
        localStorage.setItem('editModeEnabled', JSON.stringify(editModeEnabled));
        document.body?.classList.toggle('edit-mode-active', editModeEnabled);
        updateEditModeToggleUI(toggleBtn);
        if (document.getElementById('findingsContainer')) {
            renderFindings();
        }
    });
}

function updateEditModeToggleUI(btn) {
    const stateLabel = btn.querySelector('.state-text');
    if (stateLabel) {
        stateLabel.textContent = editModeEnabled ? 'ON' : 'OFF';
    }
    btn.setAttribute('aria-pressed', editModeEnabled ? 'true' : 'false');
    btn.classList.toggle('edit-mode-active', editModeEnabled);
}

function requireEditMode() {
    if (editModeEnabled) return true;
    showToast('Ative o modo edição para alterar ou adicionar achados.', 'warning');
    return false;
}

function initStepperNavigation() {
    const stepper = document.querySelector('[data-stepper]');
    if (!stepper) return;
    stepper.querySelectorAll('[data-step-target]').forEach(button => {
        button.addEventListener('click', () => handleStepperNavigation(button.dataset.stepTarget));
    });
}

function handleStepperNavigation(target) {
    if (!target) return;
    if (target === 'screen1') {
        showScreen('screen1');
        return;
    }
    if (target === 'screen2') {
        proceedToExam();
        return;
    }
    if (target === 'screen3') {
        const resultArea = document.getElementById('resultArea');
        if (!resultArea || !resultArea.textContent.trim()) {
            showToast('Gere o laudo antes de revisar.', 'warning');
            return;
        }
        showScreen('screen3');
    }
}

// ======== NAVEGAÇÃO E LÓGICA DE TELAS ========
function proceedToExam() {
    try {
        if (selectedExams.length === 0) {
            showToast('Selecione pelo menos um exame.', 'warning');
            return;
        }
        renderFindings();
        showScreen('screen2');
    } catch (error) {
        console.error('Erro ao prosseguir:', error);
        showToast('Erro ao carregar exames. Verifique o console.', 'error');
    }
}

function backToSelection() {
    showScreen('screen1');
}

function generateReportText() {
    const finalReportLines = [];
    selectedExams.forEach(examId => {
        const exam = getExamWithAdditions(examId);
        if (!exam) return;

        const allExamFindings = Object.values(exam.findings).flatMap(cat => cat.items || []);
        const examSectionLines = [];

        Object.values(exam.findings).forEach(category => {
            const positiveSentenceFindings = [];
            const negativeSentenceFindings = [];
            const lineFindings = [];

            const sortedItems = reorderFindings(category.items || []);

            sortedItems.forEach(finding => {
                const state = findingsState[finding.id];
                if (!state) return;

                if (finding.displayCondition && findingsState[finding.displayCondition.triggerFindingId]) {
                    return;
                }

                if (finding.type === 'open-text' && state.value) {
                    lineFindings.push(`${finding.reportLabel}: ${state.value}.`);
                } else if (state.answerId !== undefined) {
                    const answer = (finding.answers || []).find(a => a.id === state.answerId);
                    if (!answer) return;

                    if (answer.isNegative) {
                        const questionText = finding.question.toLowerCase().replace('?', '').trim();
                        negativeSentenceFindings.push(questionText);
                    } else {
                        const fullSentence = buildBranchSentence(finding, allExamFindings, findingsState);
                        if (state.detail) {
                            positiveSentenceFindings.push(`${fullSentence} (${state.detail})`);
                        } else {
                            positiveSentenceFindings.push(fullSentence);
                        }
                    }
                }
            });

            if (positiveSentenceFindings.length === 0 && negativeSentenceFindings.length === 0 && lineFindings.length === 0) return;

            let categorySentences = [];

            if (positiveSentenceFindings.length > 0) {
                const finalPositiveSentence = positiveSentenceFindings.map((sentence, index) => {
                    if (index > 0 && sentence && sentence.charAt(0) === sentence.charAt(0).toUpperCase() && sentence.charAt(0).toLowerCase() !== sentence.charAt(0)) {
                        return sentence.charAt(0).toLowerCase() + sentence.slice(1);
                    }
                    return sentence;
                }).join(', ');
                categorySentences.push(finalPositiveSentence.charAt(0).toUpperCase() + finalPositiveSentence.slice(1));
            }

            if (negativeSentenceFindings.length > 0) {
                const lastNegative = negativeSentenceFindings.pop();
                let negativePart = negativeSentenceFindings.join(', ');
                if (negativePart) {
                    negativePart += ` e ${lastNegative}`;
                } else {
                    negativePart = lastNegative;
                }
                const finalNegativeSentence = `Nega ${negativePart}`;
                categorySentences.push(finalNegativeSentence);
            }

            if (categorySentences.length > 0) {
                examSectionLines.push(`**${category.name}:** ${categorySentences.join('. ')}.`);
            }

            if (lineFindings.length > 0) {
                if (positiveSentenceFindings.length === 0 && negativeSentenceFindings.length === 0) examSectionLines.push(`**${category.name}:**`);
                lineFindings.forEach(line => examSectionLines.push(`  ${line}`));
            }
        });

        if (examSectionLines.length > 0) {
            finalReportLines.push(`**${exam.name}:**`);
            finalReportLines.push(...examSectionLines);
            finalReportLines.push('');
        }
    });
    return finalReportLines.join('\n').trim();
}

function generateReport() {
    let reportText = generateReportText();
    reportText = reportText.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    reportText = reportText.replace(/\n/g, '<br>');
    document.getElementById('resultArea').innerHTML = reportText;
    showScreen('screen3');
}
function newExam() { selectedExams = []; findingsState = {}; masterReset(); showScreen('screen1'); renderExamSelection(); }
function copyToClipboard() {
    let reportText = generateReportText();
    reportText = reportText.replace(/\*\*/g, '');
    navigator.clipboard.writeText(reportText).then(() => showToast('Copiado!', 'success'));
}

// ======== LÓGICA DE DADOS (MERGE E BUSCA) ========
function getExamWithAdditions(examId) {
    if (customExams[examId]) return customExams[examId];
    const base = examsData[examId];
    if (!base) return null;
    const additions = customAdditions[examId];
    if (!additions) return base;
    const merged = JSON.parse(JSON.stringify(base));
    Object.entries(additions).forEach(([catKey, addCat]) => {
        if (!merged.findings[catKey]) {
            merged.findings[catKey] = { name: addCat.name || 'Categoria Personalizada', items: [] };
        }
        if (Array.isArray(addCat.items)) {
            merged.findings[catKey].items.push(...addCat.items);
        }
    });
    return merged;
}

function findFindingById(id) {
    const allExams = { ...examsData, ...customExams };
    for (const exam of Object.values(allExams)) {
        if (!exam.findings) continue;
        for (const cat of Object.values(exam.findings)) {
            const f = (cat.items || []).find(i => i.id === id);
            if (f) return f;
        }
    }
    for (const examId in customAdditions) {
        if (!customAdditions[examId]) continue;
        for (const cat of Object.values(customAdditions[examId])) {
            const f = (cat.items || []).find(i => i.id === id);
            if (f) return f;
        }
    }
    return null;
}

// ======== TELA 1: SELEÇÃO DE EXAMES ========
function renderExamSelection() {
    const grid = document.getElementById('examGrid');
    grid.innerHTML = '';
    const allExams = { ...examsData, ...customExams };
    const filterText = (document.getElementById('examSearchInput')?.value || '').toLowerCase();

    // Ordenação: Customizados primeiro, depois alfabético
    const filtered = Object.values(allExams).filter(exam => exam.name.toLowerCase().includes(filterText))
        .sort((a, b) => {
            const aCustom = a.id.startsWith('custom_');
            const bCustom = b.id.startsWith('custom_');
            if (aCustom && !bCustom) return -1;
            if (!aCustom && bCustom) return 1;
            return a.name.localeCompare(b.name);
        });

    filtered.forEach(exam => {
        const card = document.createElement('div');
        card.className = 'exam-card';
        card.dataset.id = exam.id;
        if (selectedExams.includes(exam.id)) card.classList.add('selected');
        const isCustom = exam.id.startsWith('custom_');

        card.innerHTML = `
            ${isCustom && editModeEnabled ? '<div class="drag-handle">⋮⋮</div>' : ''}
            <div class="item-content">
                <h3>${exam.name}</h3>
                <p>${exam.description}</p>
            </div>
            ${isCustom ? `<div class="exam-actions">
                <button class="icon-btn edit" onclick="openEditExamDrawer('${exam.id}', event)" title="Editar">✎</button>
                <button class="icon-btn delete" onclick="deleteExam('${exam.id}', event)" title="Deletar">×</button>
            </div>` : ''}
        `;
        card.onclick = (e) => {
            if (!e.target.closest('.exam-actions') && !e.target.closest('.drag-handle')) toggleExamSelection(exam.id);
        };
        grid.appendChild(card);
    });

    // Inicializa Sortable apenas se estiver no modo edição e houver itens customizados
    if (editModeEnabled && filtered.some(e => e.id.startsWith('custom_')) && typeof Sortable !== 'undefined') {
        new Sortable(grid, {
            animation: 150,
            handle: '.drag-handle',
            ghostClass: 'sortable-ghost',
            dragClass: 'sortable-drag',
            onEnd: function (evt) {
                // Lógica de reordenação (se necessário salvar a ordem customizada)
                // Por enquanto, a ordem é alfabética/tipo, mas podemos implementar ordem manual depois
            }
        });
    }
}

function toggleExamSelection(examId) { const index = selectedExams.indexOf(examId); if (index > -1) { selectedExams.splice(index, 1); } else { selectedExams.push(examId); } renderExamSelection(); }

// ======== DRAWER DE EDIÇÃO DE EXAME ========
function openEditExamDrawer(examId, event) {
    if (event) event.stopPropagation();
    const exam = customExams[examId];
    if (!exam) return;

    const content = `
        <div class="form-group">
            <label for="drawerExamName" class="block mb-1 font-semibold">Nome do Exame</label>
            <input type="text" id="drawerExamName" class="w-full p-2 border border-gray-600 bg-gray-800 rounded-md text-white" value="${exam.name}">
        </div>
        <div class="form-group mt-4">
            <label for="drawerExamDesc" class="block mb-1 font-semibold">Descrição</label>
            <textarea id="drawerExamDesc" rows="3" class="w-full p-2 border border-gray-600 bg-gray-800 rounded-md text-white">${exam.description}</textarea>
        </div>
    `;

    openDrawer('Editar Exame', content, () => {
        const name = document.getElementById('drawerExamName').value.trim();
        const desc = document.getElementById('drawerExamDesc').value.trim();

        if (!name || !desc) {
            showToast('Nome e descrição são obrigatórios.', 'error');
            return;
        }

        customExams[examId].name = name;
        customExams[examId].description = desc;
        saveCustomData();
        renderExamSelection();
        closeDrawer();
        showToast('Exame atualizado com sucesso!', 'success');
    });
}

function toggleAddExamForm() {
    // Substituído pelo Drawer
    const content = `
        <div class="form-group">
            <label for="drawerNewExamName" class="block mb-1 font-semibold">Nome do Exame</label>
            <input type="text" id="drawerNewExamName" class="w-full p-2 border border-gray-600 bg-gray-800 rounded-md text-white" placeholder="Ex: Exame Neurológico">
        </div>
        <div class="form-group mt-4">
            <label for="drawerNewExamDescription" class="block mb-1 font-semibold">Descrição</label>
            <textarea id="drawerNewExamDescription" rows="3" class="w-full p-2 border border-gray-600 bg-gray-800 rounded-md text-white" placeholder="Breve descrição do roteiro..."></textarea>
        </div>
    `;

    openDrawer('Novo Exame', content, () => {
        const nameInput = document.getElementById('drawerNewExamName');
        const descInput = document.getElementById('drawerNewExamDescription');

        const name = nameInput ? nameInput.value.trim() : '';
        const desc = descInput ? descInput.value.trim() : '';

        if (!name || !desc) {
            showToast('Nome e descrição são obrigatórios.', 'error');
            return;
        }

        const id = 'custom_' + Date.now();
        customExams[id] = {
            id,
            name,
            description: desc,
            findings: {
                personalizado: { name: "Personalizado", items: [] }
            }
        };
        saveCustomData();
        renderExamSelection();
        closeDrawer();
        showToast('Exame criado com sucesso!', 'success');
    });
}

function deleteExam(examId, event) {
    if (event) event.stopPropagation();
    if (confirm('Deletar este exame e todos os seus achados?')) {
        delete customExams[examId];
        selectedExams = selectedExams.filter(id => id !== examId);
        saveCustomData();
        renderExamSelection();
        showToast('Exame deletado.', 'info');
    }
}
function renderFindings() {
    const container = document.getElementById('findingsContainer');
    if (!container) return;
    container.innerHTML = '';
    selectedExams.forEach(examId => {
        const exam = getExamWithAdditions(examId);
        if (!exam) return;
        const isCustomExam = exam.id.startsWith('custom_');
        const systemSection = document.createElement('div');
        systemSection.className = 'system-section';
        const header = document.createElement('div');
        header.className = 'system-header';

        const actions = [];
        if (editModeEnabled && isCustomExam) {
            actions.push(`<button class="btn btn-secondary btn-small" onclick="addCategory('${examId}')">+ Seção</button>`);
        }
        if (editModeEnabled) {
            actions.push(`<button class="btn btn-success btn-small" onclick="openFindingDrawer('${examId}')">+ Achado</button>`);
        }
        const actionsHtml = actions.length ? `<div class="system-actions">${actions.join('')}</div>` : '';
        header.innerHTML = `${exam.name}${actionsHtml}`;
        systemSection.appendChild(header);

        if (exam.findings) {
            Object.entries(exam.findings).forEach(([categoryKey, category]) => {
                const groupDiv = document.createElement('div');
                groupDiv.className = 'finding-group';
                const groupTitle = document.createElement('h4');
                let categoryActions = '';
                if (editModeEnabled) {
                    const catButtons = [];
                    if (isCustomExam) {
                        catButtons.push(`<button class="icon-btn edit btn-small" onclick="editCategoryName('${examId}','${categoryKey}')" title="Renomear Seção">✎</button>`);
                        catButtons.push(`<button class="icon-btn delete btn-small" onclick="deleteCategory('${examId}','${categoryKey}')" title="Deletar Seção">×</button>`);
                    }
                    catButtons.push(`<button class="btn btn-success btn-small" onclick="openFindingDrawer('${examId}','${categoryKey}')">+</button>`);
                    categoryActions = `<div class="category-actions">${catButtons.join('')}</div>`;
                }
                groupTitle.innerHTML = `<span>${category.name}</span>${categoryActions}`;
                groupDiv.appendChild(groupTitle);

                const findingsList = document.createElement('div');
                findingsList.className = 'findings-list';
                groupDiv.appendChild(findingsList);

                const originalItems = category.items || [];
                const sortedItems = reorderFindings(originalItems);

                sortedItems.forEach(finding => {
                    if (finding.displayCondition) {
                        const parentState = findingsState[finding.displayCondition.triggerFindingId];
                        if (!parentState || parentState.answerId !== finding.displayCondition.triggerAnswerId) {
                            return;
                        }
                    }

                    const stateObj = findingsState[finding.id];
                    const hasSelection = stateObj && (stateObj.answerId !== undefined || stateObj.value);
                    const isCustomFinding = finding.id.startsWith('custom_');

                    const findingWrapper = document.createElement('div');
                    findingWrapper.className = 'finding-item';
                    findingWrapper.id = `finding-item-${finding.id}`;
                    findingWrapper.dataset.id = finding.id;

                    if (hasSelection) findingWrapper.classList.add('has-selection');
                    if (finding.displayCondition) findingWrapper.classList.add('conditional');

                    // Drag Handle
                    if (editModeEnabled && (isCustomExam || isCustomFinding)) {
                        const handle = document.createElement('div');
                        handle.className = 'drag-handle';
                        handle.innerHTML = '⋮⋮';
                        findingWrapper.appendChild(handle);
                    }

                    const contentDiv = document.createElement('div');
                    contentDiv.className = 'item-content';

                    const questionDiv = document.createElement('div');
                    questionDiv.className = 'finding-question';

                    const questionLabel = document.createElement('span');
                    questionLabel.textContent = finding.question;
                    questionDiv.appendChild(questionLabel);

                    if (finding.info) {
                        const infoBtn = document.createElement('button');
                        infoBtn.type = 'button';
                        infoBtn.className = 'info-inline-btn';
                        infoBtn.setAttribute('aria-label', `Ver instruções para ${finding.question}`);
                        infoBtn.textContent = 'ⓘ';
                        infoBtn.onclick = (event) => {
                            event.stopPropagation();
                            showInfoDrawer(finding.id);
                        };
                        questionDiv.appendChild(infoBtn);
                    }
                    contentDiv.appendChild(questionDiv);

                    const controlsDiv = document.createElement('div');
                    controlsDiv.className = 'finding-controls';

                    if (finding.type === 'open-text') {
                        const input = document.createElement('input');
                        input.type = 'text';
                        input.className = 'finding-detail-input';
                        input.placeholder = 'Insira o valor...';
                        input.style.maxWidth = '200px';
                        input.value = findingsState[finding.id]?.value || '';
                        input.oninput = (e) => saveOpenTextAnswer(finding.id, e.target.value);
                        controlsDiv.appendChild(input);
                    } else {
                        (finding.answers || []).forEach(answer => {
                            const wrapper = document.createElement('div');
                            wrapper.className = 'answer-wrapper';

                            const btn = document.createElement('button');
                            btn.className = 'toggle-button';
                            if (answer.isNegative) btn.classList.add('negative');
                            btn.textContent = answer.text;
                            if (stateObj && stateObj.answerId === answer.id) {
                                btn.classList.add('active');
                            }
                            btn.onclick = () => selectAnswer(finding.id, answer.id);
                            wrapper.appendChild(btn);

                            if (editModeEnabled) {
                                const addBtn = document.createElement('button');
                                addBtn.className = 'add-conditional-btn';
                                addBtn.title = `Adicionar achado condicional para a resposta "${answer.text}"`;
                                addBtn.innerHTML = '+';
                                addBtn.onclick = (e) => {
                                    e.stopPropagation();
                                    openConditionalFindingDrawer(examId, categoryKey, finding.id, answer.id);
                                };
                                wrapper.appendChild(addBtn);
                            }
                            controlsDiv.appendChild(wrapper);
                        });
                    }

                    if (editModeEnabled && isCustomFinding) {
                        const editBtn = document.createElement('button');
                        editBtn.className = 'icon-btn edit';
                        editBtn.innerHTML = '✎';
                        editBtn.title = 'Editar achado';
                        editBtn.onclick = () => openFindingDrawer(examId, categoryKey, finding.id);
                        controlsDiv.appendChild(editBtn);
                    }

                    contentDiv.appendChild(controlsDiv);

                    // Detalhes adicionais
                    let detailContainer = null;
                    if (finding.type !== 'open-text') {
                        detailContainer = document.createElement('div');
                        detailContainer.className = 'finding-detail-container';
                        const detailInputId = `detail-${finding.id}`;
                        const detailLabel = document.createElement('label');
                        detailLabel.className = 'detail-label';
                        detailLabel.setAttribute('for', detailInputId);
                        detailLabel.textContent = 'Detalhes adicionais';

                        const detailInput = document.createElement('input');
                        detailInput.type = 'text';
                        detailInput.id = detailInputId;

                        detailInput.className = 'finding-detail-input';
                        detailInput.placeholder = 'Adicionar detalhes (opcional)';
                        detailInput.value = stateObj?.detail || '';
                        detailInput.oninput = (e) => saveFindingDetail(e, finding.id);

                        detailContainer.appendChild(detailLabel);
                        detailContainer.appendChild(detailInput);
                    }

                    findingWrapper.appendChild(questionDiv);
                    findingWrapper.appendChild(controlsDiv);
                    if (detailContainer) {
                        findingWrapper.appendChild(detailContainer);
                    }
                    findingsList.appendChild(findingWrapper);
                });

                if (editModeEnabled && typeof Sortable !== 'undefined') {
                    new Sortable(findingsList, {
                        animation: 150,
                        handle: '.drag-handle',
                        ghostClass: 'sortable-ghost',
                        dragClass: 'sortable-drag',
                        onEnd: function (evt) {
                            const newOrderIds = Array.from(findingsList.children).map(el => el.dataset.id);
                            updateFindingsOrder(examId, categoryKey, newOrderIds);
                        }
                    });
                }
                systemSection.appendChild(groupDiv);
            });
        }
        container.appendChild(systemSection);
    });
    updatePreview();
}

function selectAnswer(findingId, answerId) {
    const currentState = findingsState[findingId];
    if (currentState && currentState.answerId === answerId) {
        delete findingsState[findingId];
    } else {
        findingsState[findingId] = { answerId: answerId, detail: currentState?.detail || '' };
    }
    renderFindings();
}

function openConditionalFindingModal(examId, categoryKey, triggerFindingId, triggerAnswerId) {
    const condition = {
        triggerFindingId: triggerFindingId,
        triggerAnswerId: triggerAnswerId
    };
    openFindingDrawer(examId, categoryKey, condition);
}

function saveFindingDetail(event, findingId) {
    if (findingsState[findingId]) {
        findingsState[findingId].detail = event.target.value;
        updatePreview();
        saveSessionState();
    }
}

function saveOpenTextAnswer(findingId, value) {
    if (value.trim() !== '') {
        findingsState[findingId] = { value: value.trim() };
    } else {
        delete findingsState[findingId];
    }
    updatePreview();
    saveSessionState();
}

// ======== DRAWER DE ACHADOS (ADICIONAR/EDITAR) ========

function addDrawerAnswerField(text = '', description = '', isNegative = false) {
    const container = document.getElementById('drawerAnswersContainer');
    if (!container) return;

    const div = document.createElement('div');
    div.className = 'answer-input-group flex gap-2 items-center bg-gray-700 p-2 rounded mb-2';

    div.innerHTML = `
        <div class="flex-1">
            <input type="text" class="answer-text w-full p-1 bg-gray-800 border border-gray-600 rounded text-white text-sm mb-1" placeholder="Botão (Ex: Sim)" value="${text}">
            <input type="text" class="answer-description w-full p-1 bg-gray-800 border border-gray-600 rounded text-white text-sm" placeholder="Texto do Laudo" value="${description}">
        </div>
        <div class="flex items-center gap-1" title="Marcar como achado negativo (normal)">
            <input type="checkbox" class="answer-is-negative w-4 h-4" ${isNegative ? 'checked' : ''}>
            <span class="text-xs text-gray-300">Neg.</span>
        </div>
        <button class="text-red-400 hover:text-red-300 font-bold px-2 text-lg" onclick="this.parentElement.remove()">×</button>
    `;
    container.appendChild(div);
}

function toggleDrawerFindingType() {
    const type = document.getElementById('drawerFindingType').value;
    const answersSection = document.getElementById('drawerAnswersSection');
    const openTextSection = document.getElementById('drawerOpenTextSection');

    if (type === 'open-text') {
        answersSection.classList.add('hidden');
        openTextSection.classList.remove('hidden');
    } else {
        answersSection.classList.remove('hidden');
        openTextSection.classList.add('hidden');
    }
}

function openFindingDrawer(examId, categoryKey, findingIdOrCondition = null) {
    if (!requireEditMode()) return;

    const isEdit = typeof findingIdOrCondition === 'string';
    const condition = (typeof findingIdOrCondition === 'object') ? findingIdOrCondition : null;
    const findingId = isEdit ? findingIdOrCondition : null;

    let finding = isEdit ? findFindingById(findingId) : null;

    // Default values
    let question = finding ? finding.question : '';
    let info = finding ? (finding.info || '') : '';
    let type = finding ? finding.type : 'yes-no';
    let reportLabel = finding ? (finding.reportLabel || '') : '';
    let answers = finding ? (finding.answers || []) : [];

    // If new and not open-text, add default answers
    if (!isEdit && !finding && type !== 'open-text') {
        answers = [
            { text: 'Sim', description: '', isNegative: false },
            { text: 'Não', description: '', isNegative: true }
        ];
    }

    const content = `
        <div class="form-group">
            <label class="block mb-1 font-semibold text-sm">Pergunta / Nome do Achado</label>
            <input type="text" id="drawerFindingQuestion" class="w-full p-2 border border-gray-600 bg-gray-800 rounded-md text-white" value="${question}" placeholder="Ex: Reflexo Patelar">
        </div>

        <div class="form-group mt-4">
            <label class="block mb-1 font-semibold text-sm">Tipo de Resposta</label>
            <select id="drawerFindingType" class="w-full p-2 border border-gray-600 bg-gray-800 rounded-md text-white" onchange="toggleDrawerFindingType()">
                <option value="yes-no" ${type === 'yes-no' ? 'selected' : ''}>Sim / Não (Binário)</option>
                <option value="multiple-choice" ${type === 'multiple-choice' ? 'selected' : ''}>Múltipla Escolha</option>
                <option value="open-text" ${type === 'open-text' ? 'selected' : ''}>Texto Aberto</option>
            </select>
        </div>

        <div id="drawerAnswersSection" class="${type === 'open-text' ? 'hidden' : ''} mt-4">
            <label class="block mb-1 font-semibold text-sm">Opções de Resposta</label>
            <div id="drawerAnswersContainer" class="space-y-2 mb-2"></div>
            <button class="btn btn-secondary btn-small w-full" onclick="addDrawerAnswerField()">+ Adicionar Opção</button>
        </div>

        <div id="drawerOpenTextSection" class="${type === 'open-text' ? '' : 'hidden'} mt-4">
            <label class="block mb-1 font-semibold text-sm">Etiqueta para o Laudo</label>
            <input type="text" id="drawerReportLabel" class="w-full p-2 border border-gray-600 bg-gray-800 rounded-md text-white" value="${reportLabel}" placeholder="Ex: Observações:">
        </div>

        <div class="form-group mt-4">
            <label class="block mb-1 font-semibold text-sm">Informações Extras (Tooltip)</label>
            <textarea id="drawerFindingInfo" rows="2" class="w-full p-2 border border-gray-600 bg-gray-800 rounded-md text-white" placeholder="Texto de ajuda que aparece ao clicar no ícone (i)">${info}</textarea>
        </div>
        
        ${condition ? `<div class="mt-4 p-2 bg-blue-900/30 border border-blue-500/50 rounded text-xs text-blue-200">
            Este é um achado condicional. Aparecerá apenas quando a condição for atendida.
        </div>` : ''}
    `;

    openDrawer(isEdit ? 'Editar Achado' : 'Novo Achado', content, () => {
        saveDrawerFinding(examId, categoryKey, findingId, condition);
    });

    // Post-render initialization
    setTimeout(() => {
        const container = document.getElementById('drawerAnswersContainer');
        if (container && answers.length > 0) {
            answers.forEach(ans => addDrawerAnswerField(ans.text, ans.description, ans.isNegative));
        }
    }, 0);
}

function saveDrawerFinding(examId, categoryKey, findingId, condition) {
    const question = document.getElementById('drawerFindingQuestion').value.trim();
    const type = document.getElementById('drawerFindingType').value;
    const info = document.getElementById('drawerFindingInfo').value.trim();

    if (!question) { showToast('A pergunta é obrigatória.', 'error'); return; }

    let newFinding = {
        id: findingId || ('custom_' + Date.now()),
        question,
        type,
        info
    };

    if (type === 'open-text') {
        const reportLabel = document.getElementById('drawerReportLabel').value.trim();
        if (!reportLabel) { showToast('A etiqueta para o laudo é obrigatória.', 'error'); return; }
        newFinding.reportLabel = reportLabel;
    } else {
        const groups = document.querySelectorAll('#drawerAnswersContainer .answer-input-group');
        const answers = Array.from(groups).map(g => ({
            id: 'ans_' + Math.random().toString(36).substr(2, 9),
            text: g.querySelector('.answer-text').value.trim(),
            description: g.querySelector('.answer-description').value.trim(),
            isNegative: g.querySelector('.answer-is-negative').checked
        })).filter(a => a.text);

        if (answers.length === 0) { showToast('Adicione pelo menos uma resposta.', 'error'); return; }
        newFinding.answers = answers;
        // Auto-detect type based on answers if not explicitly open-text
        if (type !== 'open-text') {
            newFinding.type = (answers.length > 2 || answers.some(a => !['sim', 'não'].includes(a.text.toLowerCase()))) ? 'multiple-choice' : 'yes-no';
        }
    }

    if (condition) newFinding.displayCondition = condition;

    if (findingId) {
        // Update existing
        const finding = findFindingById(findingId);
        if (finding) {
            Object.assign(finding, newFinding);
        }
    } else {
        // Insert new
        insertNewFinding(examId, categoryKey, newFinding);
    }

    saveCustomData();
    renderFindings();
    closeDrawer();
    showToast('Achado salvo com sucesso!', 'success');
}

function insertNewFinding(examId, categoryKey, newFinding) {
    const insertIntoArray = (itemsArray) => {
        if (newFinding.displayCondition) {
            const parentId = newFinding.displayCondition.triggerFindingId;
            const parentIndex = itemsArray.findIndex(item => item.id === parentId);
            if (parentIndex > -1) {
                itemsArray.splice(parentIndex + 1, 0, newFinding);
                return;
            }
        }
        itemsArray.push(newFinding);
    };

    if (examId.startsWith('custom_')) {
        const exam = customExams[examId];
        const catKey = categoryKey || 'cat_' + Date.now();
        if (!exam.findings[catKey]) {
            exam.findings[catKey] = { name: "Categoria Personalizada", items: [] };
        }
        insertIntoArray(exam.findings[catKey].items);
    } else {
        if (!customAdditions[examId]) customAdditions[examId] = {};
        const catKey = categoryKey || 'cat_' + Date.now();
        if (!customAdditions[examId][catKey]) {
            customAdditions[examId][catKey] = { name: "Achados Adicionados", items: [] };
        }
        insertIntoArray(customAdditions[examId][catKey].items);
    }
}

function showInfoDrawer(findingId) {
    const finding = findFindingById(findingId);
    const infoText = finding?.info;
    if (!infoText || !infoText.trim()) { showToast("Nenhuma informação adicional disponível.", 'info'); return; }

    openDrawer('Informações', `<div class="text-gray-300 leading-relaxed">${infoText}</div>`);
}

// ======== LAUDO ========
function updatePreview() { document.getElementById('previewContent').textContent = generateReportText() || 'Selecione...'; }


// ======== EXAMES E CATEGORIAS CUSTOMIZADOS ========
// Funções de categoria mantidas para compatibilidade (serão substituídas por Drawers futuramente)
function addCategory(examId) {
    if (!requireEditMode()) return;

    const content = `
        <div class="form-group">
            <label class="block mb-1 font-semibold">Nome da Nova Seção</label>
            <input type="text" id="drawerCategoryName" class="w-full p-2 border border-gray-600 bg-gray-800 rounded-md text-white" placeholder="Ex: Reflexos">
        </div>
    `;

    openDrawer('Nova Seção', content, () => {
        const name = document.getElementById('drawerCategoryName').value.trim();
        if (!name) { showToast('Nome é obrigatório', 'error'); return; }

        const catKey = 'cat_' + Date.now();
        customExams[examId].findings[catKey] = { name, items: [] };
        saveCustomData();
        renderFindings();
        closeDrawer();
        showToast('Seção criada!', 'success');
    });
}

function editCategoryName(examId, catKey) {
    if (!requireEditMode()) return;
    const currentName = customExams[examId].findings[catKey].name;

    const content = `
        <div class="form-group">
            <label class="block mb-1 font-semibold">Nome da Seção</label>
            <input type="text" id="drawerCategoryName" class="w-full p-2 border border-gray-600 bg-gray-800 rounded-md text-white" value="${currentName}">
        </div>
    `;

    openDrawer('Renomear Seção', content, () => {
        const newName = document.getElementById('drawerCategoryName').value.trim();
        if (!newName) { showToast('Nome é obrigatório', 'error'); return; }

        customExams[examId].findings[catKey].name = newName;
        saveCustomData();
        renderFindings();
        closeDrawer();
        showToast('Seção renomeada!', 'success');
    });
}
function deleteCategory(examId, catKey) { if (!requireEditMode()) return; const cat = customExams[examId].findings[catKey]; if (confirm(`Deletar a seção "${cat.name}" e seus ${cat.items.length} achados?`)) { delete customExams[examId].findings[catKey]; saveCustomData(); renderFindings(); } }


function updatePreviewToggleLabel(isOpen) {
    const btn = document.getElementById('togglePreviewBtn');
    if (!btn) return;
    btn.textContent = isOpen ? 'Ocultar painel' : 'Mostrar painel';
    btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    btn.setAttribute('aria-label', isOpen ? 'Ocultar pré-visualização' : 'Mostrar pré-visualização');
}

function positionPreviewToggle() {
    const panel = document.getElementById('previewPanel');
    const btn = document.getElementById('togglePreviewBtn');
    if (!panel || !btn) return;

    const rootStyles = getComputedStyle(document.documentElement);
    const panelWidth = parseInt(rootStyles.getPropertyValue('--panel-width')) || 300;
    const panelOffset = parseInt(rootStyles.getPropertyValue('--panel-offset-right')) || 20;
    const screen2 = document.getElementById('screen2');
    const screen2IsActive = screen2 && screen2.classList.contains('active');

    if (!screen2IsActive) {
        btn.classList.add('collapse-edge', 'is-hidden');
        btn.setAttribute('aria-hidden', 'true');
        btn.style.right = `${panelOffset}px`;
        return;
    }

    btn.classList.remove('is-hidden');
    btn.removeAttribute('aria-hidden');

    if (panel.classList.contains('collapsed')) {
        btn.classList.add('collapse-edge');
        btn.style.right = `${panelOffset}px`;
    } else {
        btn.classList.remove('collapse-edge');
        btn.style.right = `${panelOffset + panelWidth + 8}px`;
    }
}

function togglePreviewPanel() {
    const panel = document.getElementById('previewPanel');
    if (!panel) return;
    const isCollapsed = panel.classList.toggle('collapsed');
    updatePreviewToggleLabel(!isCollapsed);
    positionPreviewToggle();
}

function updateFindingsOrder(examId, categoryKey, newOrderIds) {
    let itemsArray;
    if (examId.startsWith('custom_')) {
        itemsArray = customExams[examId].findings[categoryKey].items;
    } else {
        itemsArray = customAdditions[examId][categoryKey].items;
    }

    // Create a map for quick lookup
    const itemsMap = new Map(itemsArray.map(item => [item.id, item]));

    // Reconstruct the array based on new order
    // Note: newOrderIds might not contain all items if some are hidden (conditional)
    // But Sortable usually works on the visible list.
    // If we have conditional logic, reordering might be tricky.
    // For now, we assume flat reordering of what's visible.

    const newItems = [];
    const seenIds = new Set();

    newOrderIds.forEach(id => {
        if (itemsMap.has(id)) {
            newItems.push(itemsMap.get(id));
            seenIds.add(id);
        }
    });

    // Add any items that were not in the new order (e.g. hidden ones)
    // This appends them to the end, which might not be ideal but prevents data loss.
    itemsArray.forEach(item => {
        if (!seenIds.has(item.id)) {
            newItems.push(item);
        }
    });

    // Update the source
    if (examId.startsWith('custom_')) {
        customExams[examId].findings[categoryKey].items = newItems;
    } else {
        customAdditions[examId][categoryKey].items = newItems;
    }

    saveCustomData();
    // No need to re-render immediately as the DOM is already updated by Sortable
    // But if we want to ensure consistency (e.g. conditional logic), we might want to.
    // renderFindings(); 
}

function reorderFindings(items) {
    if (!items || items.length === 0) {
        return [];
    }

    const itemMap = new Map(items.map(item => [item.id, item]));
    const childrenMap = new Map();
    const rootItems = [];

    for (const item of items) {
        if (item.displayCondition) {
            const parentId = item.displayCondition.triggerFindingId;
            if (!childrenMap.has(parentId)) {
                childrenMap.set(parentId, []);
            }
            childrenMap.get(parentId).push(item);
        } else {
            rootItems.push(item);
        }
    }

    const result = [];

    function addWithChildren(item) {
        result.push(item);
        const children = childrenMap.get(item.id);
        if (children) {
            for (const child of children) {
                if (itemMap.has(child.id)) {
                    addWithChildren(child);
                }
            }
        }
    }

    for (const root of rootItems) {
        addWithChildren(root);
    }

    return result;
}

function buildBranchSentence(currentFinding, allExamFindings, currentState) {
    const state = currentState[currentFinding.id];
    if (!state) return '';

    const answer = (currentFinding.answers || []).find(a => a.id === state.answerId);
    if (!answer) return '';

    let sentenceParts = [answer.description || answer.text];

    const answeredChildren = allExamFindings.filter(f =>
        f.displayCondition &&
        f.displayCondition.triggerFindingId === currentFinding.id &&
        currentState[f.id]
    );

    for (const child of answeredChildren) {
        sentenceParts.push(buildBranchSentence(child, allExamFindings, currentState));
    }

    return sentenceParts.join(' ');
}