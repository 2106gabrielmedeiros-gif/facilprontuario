// ======== ESTADO DA APLICAÇÃO ========
let selectedExams = [];
let findingsState = {};
let customExams = {};
let customAdditions = {};
let likelihoodData = {};

// ======== INICIALIZAÇÃO ========
document.addEventListener('DOMContentLoaded', function() {
    loadCustomData();
    renderExamSelection();
    loadSessionState();
    setupTheme();
    const panel = document.getElementById('previewPanel');
    const btn = document.getElementById('togglePreviewBtn');
    if (panel && btn) {
        panel.classList.remove('collapsed');
        btn.textContent = '»';
        btn.title = 'Ocultar pré-visualização';
        btn.addEventListener('click', togglePreviewPanel);
        positionPreviewToggle();
        window.addEventListener('resize', positionPreviewToggle);
    }
});

// ======== NAVEGAÇÃO E LÓGICA DE TELAS ========
function proceedToExam() {
    if (selectedExams.length === 0) {
        alert('Selecione pelo menos um exame.');
        return;
    }
    renderFindings();
    showScreen('screen2');
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
                 examSectionLines.push(`${category.name}: ${categorySentences.join('. ')}.`);
            }

            if (lineFindings.length > 0) {
                if (positiveSentenceFindings.length === 0 && negativeSentenceFindings.length === 0) examSectionLines.push(`${category.name}:`);
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
function copyToClipboard() { navigator.clipboard.writeText(document.getElementById('resultArea').textContent).then(() => alert('Copiado!')); }

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
        merged.findings[catKey].items.push(...addCat.items);
    });
    return merged;
}

function findFindingById(id) {
    const allExams = { ...examsData, ...customExams };
    for (const exam of Object.values(allExams)) {
        for (const cat of Object.values(exam.findings)) {
            const f = (cat.items || []).find(i => i.id === id);
            if (f) return f;
        }
    }
    for (const examId in customAdditions) {
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
    const filtered = Object.values(allExams).filter(exam => exam.name.toLowerCase().includes(filterText)).sort((a, b) => a.name.localeCompare(b.name));
    filtered.forEach(exam => {
        const card = document.createElement('div');
        card.className = 'exam-card';
        if (selectedExams.includes(exam.id)) card.classList.add('selected');
        const isCustom = exam.id.startsWith('custom_');
        card.innerHTML = `<h3>${exam.name}</h3><p>${exam.description}</p>${isCustom ? `<div class="exam-actions"><button class="icon-btn edit" onclick="openEditExamForm('${exam.id}')" title="Editar">✎</button><button class="icon-btn delete" onclick="deleteExam('${exam.id}')" title="Deletar">×</button></div>` : ''}`;
        card.onclick = (e) => { if (!e.target.closest('.exam-actions')) toggleExamSelection(exam.id); };
        grid.appendChild(card);
    });
}
function toggleExamSelection(examId) { const index = selectedExams.indexOf(examId); if (index > -1) { selectedExams.splice(index, 1); } else { selectedExams.push(examId); } renderExamSelection(); }

// ======== TELA 2: RENDERIZAÇÃO DOS ACHADOS ========
function renderFindings() {
    const container = document.getElementById('findingsContainer');
    container.innerHTML = '';
    selectedExams.forEach(examId => {
        const exam = getExamWithAdditions(examId);
        if (!exam) return;
        const isCustomExam = exam.id.startsWith('custom_');
        const systemSection = document.createElement('div');
        systemSection.className = 'system-section';
        const header = document.createElement('div');
        header.className = 'system-header';
        header.innerHTML = `${exam.name}<div class="system-actions">${isCustomExam ? `<button class="btn btn-secondary btn-small" onclick="addCategory('${examId}')">+ Seção</button>` : ''}<button class="btn btn-success btn-small" onclick="openFindingModal('${examId}')">+ Achado</button></div>`;
        systemSection.appendChild(header);
        Object.entries(exam.findings).forEach(([categoryKey, category]) => {
            const groupDiv = document.createElement('div');
            groupDiv.className = 'finding-group';
            const groupTitle = document.createElement('h4');
            groupTitle.innerHTML = `<span>${category.name}</span><div class="category-actions">${isCustomExam ? `<button class="icon-btn edit btn-small" onclick="editCategoryName('${examId}','${categoryKey}')" title="Renomear Seção">✎</button><button class="icon-btn delete btn-small" onclick="deleteCategory('${examId}','${categoryKey}')" title="Deletar Seção">×</button>` : ''}<button class="btn btn-success btn-small" onclick="openFindingModal('${examId}','${categoryKey}')">+</button></div>`;
            groupDiv.appendChild(groupTitle);

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

                const findingWrapper = document.createElement('div');
                findingWrapper.className = 'finding-item';
                findingWrapper.id = `finding-item-${finding.id}`;
                if (hasSelection) findingWrapper.classList.add('has-selection');

                if (finding.displayCondition) {
                    findingWrapper.classList.add('conditional');
                }

                const questionDiv = document.createElement('div');
                questionDiv.className = 'finding-question';
                questionDiv.textContent = finding.question;

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
                        btn.textContent = answer.text;
                        if (stateObj && stateObj.answerId === answer.id) {
                            btn.classList.add('active');
                        }
                        btn.onclick = () => selectAnswer(finding.id, answer.id);

                        const addBtn = document.createElement('button');
                        addBtn.className = 'add-conditional-btn';
                        addBtn.title = `Adicionar achado condicional para a resposta "${answer.text}"`;
                        addBtn.innerHTML = '+';
                        addBtn.onclick = (e) => {
                            e.stopPropagation();
                            openConditionalFindingModal(exam.id, categoryKey, finding.id, answer.id);
                        };

                        wrapper.appendChild(btn);
                        wrapper.appendChild(addBtn);
                        controlsDiv.appendChild(wrapper);
                    });
                }

                if (finding.id.startsWith('custom_')) {
                    const editBtn = document.createElement('button');
                    editBtn.className = 'icon-btn edit'; editBtn.innerHTML = '✎'; editBtn.title = 'Editar achado';
                    editBtn.onclick = () => openEditFindingModal(exam.id, categoryKey, finding.id);
                    controlsDiv.appendChild(editBtn);
                }

                const detailContainer = document.createElement('div');
                detailContainer.className = 'finding-detail-container';

                if (finding.type !== 'open-text') {
                    const detailInput = document.createElement('input');
                    detailInput.type = 'text';
                    detailInput.className = 'finding-detail-input';
                    detailInput.placeholder = 'Adicionar detalhes (opcional)...';
                    detailInput.value = stateObj?.detail || '';
                    detailInput.oninput = (e) => saveFindingDetail(e, finding.id);
                    detailContainer.appendChild(detailInput);
                }

                const actionsContainer = document.createElement('div');
                actionsContainer.className = 'finding-actions-container';

                if (finding.info) {
                    actionsContainer.innerHTML += `<button class="action-btn info-btn" onclick="showInfoModal('${finding.id}')">ⓘ Informações</button>`;
                }

                findingWrapper.appendChild(questionDiv);
                findingWrapper.appendChild(controlsDiv);
                findingWrapper.appendChild(detailContainer);
                findingWrapper.appendChild(actionsContainer);
                groupDiv.appendChild(findingWrapper);
            });
            systemSection.appendChild(groupDiv);
        });
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
    openFindingModal(examId, categoryKey, condition);
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

// ======== MODAIS (ADICIONAR/EDITAR) ========
function addAnswerField(text = '', description = '', isNegative = false) {
    const container = document.getElementById('answersContainer');
    const div = document.createElement('div');
    div.className = 'answer-input-group';
    div.style.cssText = 'display: grid; grid-template-columns: 1fr 2fr auto auto; gap: 10px; align-items: center; margin-bottom: 10px;';
    
    const textInput = document.createElement('input');
    textInput.type = 'text';
    textInput.value = text;
    textInput.placeholder = 'Texto do Botão';
    textInput.className = 'answer-text';

    const descInput = document.createElement('input');
    descInput.type = 'text'; descInput.value = description; descInput.placeholder = 'Texto para o Laudo (Descrição)'; descInput.className = 'answer-description';

    const negativeWrapper = document.createElement('label');
    negativeWrapper.style.cssText = 'display: flex; align-items: center; gap: 5px; cursor: pointer; white-space: nowrap;';
    const negativeCheckbox = document.createElement('input');
    negativeCheckbox.type = 'checkbox';
    negativeCheckbox.className = 'answer-is-negative';
    negativeCheckbox.checked = isNegative;
    negativeWrapper.appendChild(negativeCheckbox);
    negativeWrapper.appendChild(document.createTextNode('Achado negativo?'));

    const removeBtn = document.createElement('button');
    removeBtn.className = 'btn btn-danger btn-small';
    removeBtn.textContent = '×';
    removeBtn.onclick = () => div.remove();
    
    div.appendChild(textInput);
    div.appendChild(descInput);
    div.appendChild(negativeWrapper);
    div.appendChild(removeBtn);
    container.appendChild(div);
}

function openFindingModal(examId, categoryKey = null, condition = null) {
    const modal = document.getElementById('findingModal');
    delete modal.dataset.condition;

    document.getElementById('findingType').value = 'multiple-choice';
    document.getElementById('findingQuestion').value = '';
    document.getElementById('findingReportLabel').value = '';
    document.getElementById('answersContainer').innerHTML = '';
    document.getElementById('findingInfo').value = '';
    addAnswerField('Sim', '');
    addAnswerField('Não', '', true);
    document.getElementById('findingModalTitle').textContent = 'Adicionar Novo Achado';
    document.getElementById('saveFindingBtn').onclick = () => saveFinding({ examId, categoryKey });

    const conditionalCheckbox = document.getElementById('conditionalCheckbox');
    const conditionalControls = document.getElementById('conditionalControls');
    conditionalCheckbox.checked = false;
    conditionalControls.classList.add('hidden');

    if (condition) {
        modal.dataset.condition = JSON.stringify(condition);
        document.getElementById('findingModalTitle').textContent = 'Adicionar Achado Condicional';
        conditionalCheckbox.checked = true;
        conditionalControls.classList.remove('hidden');

        const triggerFindingSelect = document.getElementById('triggerFindingSelect');
        const triggerAnswerSelect = document.getElementById('triggerAnswerSelect');

        triggerFindingSelect.innerHTML = '';
        triggerAnswerSelect.innerHTML = '';

        const parentFinding = findFindingById(condition.triggerFindingId);
        if (parentFinding) {
            const findingOption = new Option(parentFinding.question, parentFinding.id, true, true);
            triggerFindingSelect.add(findingOption);

            const triggerAnswer = (parentFinding.answers || []).find(a => a.id === condition.triggerAnswerId);
            if (triggerAnswer) {
                const answerOption = new Option(triggerAnswer.text, triggerAnswer.id, true, true);
                triggerAnswerSelect.add(answerOption);
            }
        }

        triggerFindingSelect.disabled = true;
        triggerAnswerSelect.disabled = true;
    } else {
        document.getElementById('triggerFindingSelect').innerHTML = '<option>--Selecione--</option>';
        document.getElementById('triggerAnswerSelect').innerHTML = '<option>--Selecione--</option>';
        document.getElementById('triggerFindingSelect').disabled = false;
        document.getElementById('triggerAnswerSelect').disabled = false;
    }

    updateFindingModalUI();
    modal.style.display = 'block';
}

function openEditExamForm(examId) {
    const exam = customExams[examId];
    if (!exam) return;
    document.getElementById('newExamName').value = exam.name;
    document.getElementById('newExamDescription').value = exam.description;
    document.getElementById('examFormTitle').textContent = 'Editar Exame';
    document.getElementById('saveExamBtn').textContent = 'Salvar Alterações';
    document.getElementById('saveExamBtn').onclick = () => saveExamChanges(examId);
    document.getElementById('addExamForm').classList.remove('hidden');
}

function openEditFindingModal(examId, categoryKey, findingId) {
    let currentFinding = { examId, categoryKey, findingId };
    const finding = findFindingById(findingId);
    if (!finding) return;
    document.getElementById('findingQuestion').value = finding.question;
    document.getElementById('findingInfo').value = finding.info || '';
    const answersContainer = document.getElementById('answersContainer');
    answersContainer.innerHTML = '';
    (finding.answers || []).forEach(ans => addAnswerField(ans.text, ans.description, ans.isNegative));
    document.getElementById('findingModalTitle').textContent = 'Editar Achado';
    document.getElementById('saveFindingBtn').onclick = () => saveFindingChanges(currentFinding);
    document.getElementById('findingModal').style.display = 'block';
}

function closeFindingModal() {
    const modal = document.getElementById('findingModal');
    delete modal.dataset.condition;
    modal.style.display = 'none';
}

function saveFinding(currentFinding) {
    const { examId, categoryKey } = currentFinding;
    const type = document.getElementById('findingType').value;
    const question = document.getElementById('findingQuestion').value.trim();
    const info = document.getElementById('findingInfo').value.trim();
    const reportLabel = document.getElementById('findingReportLabel').value.trim();

    if (!question) return alert('A pergunta é obrigatória.');

    let newFinding;

    if (type === 'open-text') {
        if (!reportLabel) return alert('A etiqueta para o laudo é obrigatória para perguntas de texto aberto.');
        newFinding = { id: 'custom_' + Date.now(), question, type: 'open-text', reportLabel, info };
    } else {
        const answerGroups = document.querySelectorAll('#answersContainer .answer-input-group');
        if (answerGroups.length === 0) return alert('Respostas são obrigatórias.');
        const answers = Array.from(answerGroups).map(div => ({
            id: `ans_${Date.now()}_${Math.random()}`,
            text: div.querySelector('.answer-text').value.trim(),
            description: div.querySelector('.answer-description').value.trim(),
            isNegative: div.querySelector('.answer-is-negative').checked
        })).filter(ans => ans.text);
        if (answers.length === 0) return alert('Preencha o texto de pelo menos uma resposta.');
        newFinding = {
            id: 'custom_' + Date.now(), question, answers, info,
            type: answers.length > 2 || answers.some(a => !['sim', 'não'].includes(a.text.toLowerCase())) ? 'multiple-choice' : 'yes-no'
        };
    }

    const modal = document.getElementById('findingModal');
    if (modal.dataset.condition) {
        newFinding.displayCondition = JSON.parse(modal.dataset.condition);
    }

    const insertFinding = (itemsArray, findingToInsert) => {
        if (findingToInsert.displayCondition) {
            const parentId = findingToInsert.displayCondition.triggerFindingId;
            const parentIndex = itemsArray.findIndex(item => item.id === parentId);
            if (parentIndex > -1) {
                itemsArray.splice(parentIndex + 1, 0, findingToInsert);
                return;
            }
        }
        itemsArray.push(findingToInsert);
    };

    if (examId.startsWith('custom_')) {
        const exam = customExams[examId];
        const catKey = categoryKey || 'cat_' + Date.now();
        if (!exam.findings[catKey]) {
            exam.findings[catKey] = { name: "Categoria Personalizada", items: [] };
        }
        insertFinding(exam.findings[catKey].items, newFinding);

    } else {
        if (!customAdditions[examId]) customAdditions[examId] = {};
        const catKey = categoryKey || 'cat_' + Date.now();
        if (!customAdditions[examId][catKey]) {
            customAdditions[examId][catKey] = { name: "Achados Adicionados", items: [] };
        }
        insertFinding(customAdditions[examId][catKey].items, newFinding);
    }

    saveCustomData();
    closeFindingModal();
    renderFindings();
}

function saveFindingChanges(currentFinding) {
    const { examId, findingId } = currentFinding;
    const finding = findFindingById(findingId);
    if (!finding) return;
    finding.question = document.getElementById('findingQuestion').value.trim();
    finding.info = document.getElementById('findingInfo').value.trim();
    const answerGroups = document.querySelectorAll('#answersContainer .answer-input-group');
    const answers = Array.from(answerGroups).map(div => ({
        id: `ans_${Date.now()}_${Math.random()}`,
        text: div.querySelector('.answer-text').value.trim(),
        description: div.querySelector('.answer-description').value.trim(),
        isNegative: div.querySelector('.answer-is-negative').checked
    })).filter(ans => ans.text && ans.description);

    finding.answers = answers;
    finding.type = answers.length > 2 || answers.some(a => !['sim', 'não'].includes(a.text.toLowerCase())) ? 'multiple-choice' : 'yes-no';

    saveCustomData();
    closeFindingModal();
    renderFindings();
}

function saveExamChanges(examId) {
    const name = document.getElementById('newExamName').value.trim();
    const desc = document.getElementById('newExamDescription').value.trim();
    if (!name || !desc) return;
    customExams[examId].name = name;
    customExams[examId].description = desc;
    saveCustomData();
    toggleAddExamForm();
    renderExamSelection();
}

function toggleConditionalUI() {
    const checkbox = document.getElementById('conditionalCheckbox');
    const controls = document.getElementById('conditionalControls');
    if (checkbox.checked) {
        controls.classList.remove('hidden');
    } else {
        controls.classList.add('hidden');
    }
}

function showInfoModal(findingId) {
    const finding = findFindingById(findingId);
    const infoText = finding?.info;
    if (!infoText || !infoText.trim()) { alert("Nenhuma informação adicional disponível."); return; }
    document.getElementById('infoModalContent').innerHTML = infoText;
    document.getElementById('infoModal').style.display = 'block';
}

function closeInfoModal() { document.getElementById('infoModal').style.display = 'none'; }

function openHelpModal() {
    document.getElementById('helpModal').style.display = 'block';
}

function closeHelpModal() {
    document.getElementById('helpModal').style.display = 'none';
}

// ======== LAUDO ========
function updatePreview() { document.getElementById('previewContent').textContent = generateReportText() || 'Selecione...'; }


// ======== EXAMES E CATEGORIAS CUSTOMIZADOS ========
function toggleAddExamForm() { document.getElementById('addExamForm').classList.toggle('hidden'); }
function addNewExam() { const name = document.getElementById('newExamName').value.trim(); const desc = document.getElementById('newExamDescription').value.trim(); if (!name || !desc) return; const id = 'custom_' + Date.now(); customExams[id] = { id, name, description: desc, findings: { personalizado: { name: "Personalizado", items: [] } } }; saveCustomData(); toggleAddExamForm(); renderExamSelection(); }
function deleteExam(examId) { if(confirm('Deletar este exame e todos os seus achados?')){ delete customExams[examId]; selectedExams = selectedExams.filter(id => id !== examId); saveCustomData(); renderExamSelection(); }}
function addCategory(examId) { const name = prompt("Nome da nova seção:"); if (name) { const catKey = 'cat_' + Date.now(); customExams[examId].findings[catKey] = { name, items: [] }; saveCustomData(); renderFindings(); }}
function editCategoryName(examId, catKey) { const newName = prompt("Novo nome:", customExams[examId].findings[catKey].name); if (newName) { customExams[examId].findings[catKey].name = newName; saveCustomData(); renderFindings(); }}
function deleteCategory(examId, catKey) { const cat = customExams[examId].findings[catKey]; if(confirm(`Deletar a seção "${cat.name}" e seus ${cat.items.length} achados?`)){ delete customExams[examId].findings[catKey]; saveCustomData(); renderFindings(); }}

function updateFindingModalUI() {
    const type = document.getElementById('findingType').value;
    const answersGroup = document.getElementById('answersGroup');
    const reportLabelGroup = document.getElementById('reportLabelGroup');

    if (type === 'open-text') {
        answersGroup.classList.add('hidden');
        reportLabelGroup.classList.remove('hidden');
    } else {
        answersGroup.classList.remove('hidden');
        reportLabelGroup.classList.add('hidden');
    }
}

function positionPreviewToggle() {
  const panel = document.getElementById('previewPanel');
  const btn = document.getElementById('togglePreviewBtn');
  if (!panel || !btn) return;

  const rootStyles = getComputedStyle(document.documentElement);
  const panelWidth = parseInt(rootStyles.getPropertyValue('--panel-width')) || 300;
  const panelOffset = parseInt(rootStyles.getPropertyValue('--panel-offset-right')) || 20;
  const screen2IsActive = document.getElementById('screen2').classList.contains('active');

  if (!screen2IsActive) {
    btn.classList.add('collapse-edge');
    btn.style.right = `${panelOffset}px`;
    return;
  }

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
  const btn = document.getElementById('togglePreviewBtn');

  panel.classList.toggle('collapsed');

  if (panel.classList.contains('collapsed')) {
    btn.textContent = '«';
    btn.title = 'Mostrar pré-visualização';
  } else {
    btn.textContent = '»';
    btn.title = 'Ocultar pré-visualização';
  }
  positionPreviewToggle();
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