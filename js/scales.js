// ======== ESTADO DA APLICAÇÃO ========
let selectedScales = [];
let answersState = {};
let customScales = {};

// ======== INICIALIZAÇÃO ========
document.addEventListener('DOMContentLoaded', function() {
    loadCustomData();
    renderScaleSelection();
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
function proceedToScale() {
    if (selectedScales.length === 0) {
        alert('Selecione pelo menos uma escala.');
        return;
    }
    answersState = {};
    renderQuestions();
    showScreen('screen2');
}

function backToSelection() {
    showScreen('screen1');
}

function generateReport() {
    const resultText = calculateScoreAndInterpret();
    const formattedResult = resultText.replace(/\n/g, '<br>').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    document.getElementById('resultArea').innerHTML = formattedResult;
    showScreen('screen3');
}

function startNew() {
    sessionStorage.removeItem('sessionState');
    selectedScales = [];
    answersState = {};
    showScreen('screen1');
    renderScaleSelection();
}

function copyToClipboard() {
    const textToCopy = document.getElementById('resultArea').innerText;
    navigator.clipboard.writeText(textToCopy).then(() => alert('Resultado copiado para a área de transferência!'));
}

// ======== LÓGICA DE DADOS (MERGE E BUSCA) ========
function getMergedScales() {
    return { ...scalesData, ...customScales };
}

function findQuestionById(questionId) {
    const allScales = getMergedScales();
    for (const scale of Object.values(allScales)) {
        const question = (scale.questions || []).find(q => q.id === questionId);
        if (question) return question;
    }
    return null;
}

// ======== TELA 1: SELEÇÃO DE ESCALAS ========
function renderScaleSelection() {
    const grid = document.getElementById('scaleGrid');
    grid.innerHTML = '';
    const allScales = getMergedScales();
    const filterText = (document.getElementById('scaleSearchInput')?.value || '').toLowerCase();

    const filtered = Object.values(allScales).filter(scale =>
        scale && scale.name && scale.name.toLowerCase().includes(filterText)
    ).sort((a, b) => a.name.localeCompare(b.name));

    filtered.forEach(scale => {
        const card = document.createElement('div');
        card.className = 'exam-card';
        if (selectedScales.includes(scale.id)) card.classList.add('selected');
        const isCustom = scale.id.startsWith('custom_');

        const scaleName = scale.name || 'Nome Inválido';
        const scaleDescription = scale.description || 'Sem descrição.';

        card.innerHTML = `<h3>${scaleName}</h3><p>${scaleDescription}</p>
        <div class="exam-actions">
            ${isCustom ? `<button class="icon-btn settings" onclick="openScaleSettingsModal('${scale.id}')" title="Configurar Interpretação">⚙️</button>
                         <button class="icon-btn edit" onclick="openEditScaleForm('${scale.id}')" title="Editar Nome/Descrição">✎</button>
                         <button class="icon-btn delete" onclick="deleteScale('${scale.id}')" title="Deletar Escala">×</button>` : ''}
        </div>`;

        card.onclick = (e) => {
            if (!e.target.closest('.exam-actions')) {
                toggleScaleSelection(scale.id);
            }
        };
        grid.appendChild(card);
    });
}
function toggleScaleSelection(scaleId) {
    const index = selectedScales.indexOf(scaleId);
    if (index > -1) {
        selectedScales.splice(index, 1);
    } else {
        selectedScales.push(scaleId);
    }
    renderScaleSelection();
}

// ======== LÓGICA DO FORMULÁRIO DE ESCALAS (ADICIONAR/EDITAR) ========
function toggleAddScaleForm() {
    const form = document.getElementById('addScaleForm');
    form.classList.toggle('hidden');
    if (!form.classList.contains('hidden')) {
        document.getElementById('scaleFormTitle').textContent = 'Adicionar Nova Escala';
        document.getElementById('newScaleName').value = '';
        document.getElementById('newScaleDescription').value = '';
        document.getElementById('newScaleInstructions').value = '';
        document.getElementById('newScaleProgressive').checked = false;
        const saveBtn = document.getElementById('saveScaleBtn');
        saveBtn.textContent = 'Adicionar';
        saveBtn.onclick = addNewScale;
    }
}

function addNewScale() {
    const name = document.getElementById('newScaleName').value.trim();
    const desc = document.getElementById('newScaleDescription').value.trim();
    const instructions = document.getElementById('newScaleInstructions').value.trim();
    const isProgressive = document.getElementById('newScaleProgressive').checked;

    if (!name || !desc) {
        alert("O Nome e a Descrição Curta são obrigatórios.");
        return;
    }

    const newId = 'custom_' + Date.now();
    customScales[newId] = {
        id: newId,
        name: name,
        description: desc,
        instructions: instructions,
        progressive: isProgressive,
        questions: [],
        interpretations: []
    };

    if (!selectedScales.includes(newId)) {
        selectedScales.push(newId);
    }

    saveCustomData();
    toggleAddScaleForm();
    renderScaleSelection();
}

function openEditScaleForm(scaleId) {
    const scale = customScales[scaleId];
    if (!scale) return;

    document.getElementById('newScaleName').value = scale.name;
    document.getElementById('newScaleDescription').value = scale.description;
    document.getElementById('newScaleInstructions').value = scale.instructions || '';
    document.getElementById('newScaleProgressive').checked = scale.progressive || false;

    document.getElementById('scaleFormTitle').textContent = 'Editar Escala';
    const saveBtn = document.getElementById('saveScaleBtn');
    saveBtn.textContent = 'Salvar Alterações';
    saveBtn.onclick = () => saveScaleChanges(scaleId);

    const form = document.getElementById('addScaleForm');
    form.classList.remove('hidden');
}

// ======== TELA 2: RENDERIZAÇÃO DAS PERGUNTAS ========
function renderQuestions() {
    const questionsContainer = document.getElementById('questionsContainer');
    questionsContainer.innerHTML = '';
    // Limpa o container de instruções legado, caso ainda exista.
    const legacyInstructionsContainer = document.getElementById('scaleInstructionsContainer');
    if(legacyInstructionsContainer) legacyInstructionsContainer.innerHTML = '';

    selectedScales.forEach(scaleId => {
        const scale = getMergedScales()[scaleId];
        if (!scale) return;
        const isCustomScale = scale.id.startsWith('custom_');

        const systemSection = document.createElement('div');
        systemSection.className = 'system-section';

        const header = document.createElement('div');
        header.className = 'system-header';
        header.innerHTML = `${scale.name}
            <div class="system-actions">
                ${isCustomScale ? `<button class="btn btn-success btn-small" onclick="openQuestionModal('${scaleId}')">+ Pergunta</button>` : ''}
            </div>`;
        systemSection.appendChild(header);

        // Adiciona as instruções da escala logo após o cabeçalho
        if (scale.instructions) {
            const instructionsBox = document.createElement('div');
            instructionsBox.className = 'instructions-box';
            instructionsBox.innerHTML = `<h4>Instruções</h4><p>${scale.instructions.replace(/\n/g, '<br>')}</p>`;
            systemSection.appendChild(instructionsBox);
        }

        const groupDiv = document.createElement('div');
        groupDiv.className = 'finding-group';

        (scale.questions || []).forEach(question => {
            const stateObj = answersState[question.id];
            const findingWrapper = document.createElement('div');
            findingWrapper.className = 'finding-item';
            findingWrapper.id = `question-item-${question.id}`;

            const questionDiv = document.createElement('div');
            questionDiv.className = 'finding-question';
            questionDiv.textContent = question.question;
            findingWrapper.appendChild(questionDiv);

            if (question.explanation) {
                const explanationDiv = document.createElement('div');
                explanationDiv.className = 'question-explanation';
                explanationDiv.textContent = question.explanation;
                findingWrapper.appendChild(explanationDiv);
            }

            const controlsDiv = document.createElement('div');
            controlsDiv.className = 'finding-controls';

            (question.answers || []).forEach(answer => {
                const btn = document.createElement('button');
                btn.className = 'toggle-button';
                btn.textContent = answer.text;
                if (stateObj && stateObj.answerId === answer.id) {
                    btn.classList.add('active');
                }
                btn.onclick = () => selectAnswer(question.id, answer.id);
                controlsDiv.appendChild(btn);
            });

            const editBtn = document.createElement('button');
            editBtn.className = 'icon-btn edit';
            editBtn.innerHTML = '✎';
            editBtn.title = 'Editar pergunta';
            editBtn.onclick = () => openEditQuestionModal(scale.id, question.id);
            controlsDiv.appendChild(editBtn);

            findingWrapper.appendChild(controlsDiv);
            groupDiv.appendChild(findingWrapper);
        });
        systemSection.appendChild(groupDiv);
        questionsContainer.appendChild(systemSection);
    });
    updatePreview();
}

// ======== LÓGICA DO PAINEL DE PRÉ-VISUALIZAÇÃO ========
function updatePreview() {
    const previewContent = document.getElementById('previewContent');
    if (selectedScales.length === 0) {
        previewContent.innerHTML = 'Selecione uma escala...';
        return;
    }

    const hasAnswers = Object.keys(answersState).length > 0;
    if (!hasAnswers) {
         previewContent.innerHTML = 'Selecione as respostas...';
         return;
    }

    const resultText = calculateScoreAndInterpret();
    const formattedResult = resultText.replace(/\n/g, '<br>').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    previewContent.innerHTML = formattedResult;
}


function selectAnswer(questionId, answerId) {
    const currentState = answersState[questionId];
    if (currentState && currentState.answerId === answerId) {
        delete answersState[questionId];
    } else {
        answersState[questionId] = { answerId: answerId };
    }
    renderQuestions();
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

// ======== LÓGICA DE PONTUAÇÃO E INTERPRETAÇÃO ========
function calculateSingleScaleResult(scale, scaleAnswers) {
    if (!scale) return 'Erro: Escala inválida.';

    const isProgressive = scale.progressive === true;

    if (isProgressive) {
        let lastSimQuestionText = "Nenhum critério foi atendido.";
        const questions = scale.questions || [];
        for (const question of questions) {
            const answerState = scaleAnswers[question.id];
            if (answerState) {
                const answer = question.answers.find(a => a.id === answerState.answerId);
                if (answer && answer.points > 0) {
                    lastSimQuestionText = question.question;
                }
            }
        }
        return `**${scale.name}**\n\n**Nível Atingido:**\n${lastSimQuestionText}`;
    } else {
        let totalScore = 0;
        for (const questionId in scaleAnswers) {
            const question = (scale.questions || []).find(q => q.id === questionId);
            if (question) {
                const answerId = scaleAnswers[questionId].answerId;
                const answer = question.answers.find(a => a.id === answerId);
                if (answer) {
                    totalScore += answer.points;
                }
            }
        }

        let interpretationText = "Faixa de interpretação não definida para esta pontuação.";
        if (scale.interpretations && scale.interpretations.length > 0) {
            for (const rule of scale.interpretations) {
                if (totalScore >= rule.min && totalScore <= rule.max) {
                    interpretationText = rule.text;
                    break;
                }
            }
        }

        if (scale.id === 'pps_1758045265186') {
             return `**${scale.name}**\n\n**Interpretação:**\n${interpretationText}`;
        }
        return `**${scale.name}**\n\n**Pontuação Final:** ${totalScore}\n\n**Interpretação:**\n${interpretationText}`;
    }
}

function calculateScoreAndInterpret() {
    if (selectedScales.length === 0) return 'Nenhuma escala selecionada.';

    const allScales = getMergedScales();
    let finalReport = [];

    selectedScales.forEach(scaleId => {
        const scale = allScales[scaleId];
        if (scale) {
            const scaleQuestionIds = new Set((scale.questions || []).map(q => q.id));
            const scaleAnswers = {};
            for (const questionId in answersState) {
                if (scaleQuestionIds.has(questionId)) {
                    scaleAnswers[questionId] = answersState[questionId];
                }
            }

            if (Object.keys(scaleAnswers).length > 0) {
                 finalReport.push(calculateSingleScaleResult(scale, scaleAnswers));
            }
        }
    });

    return finalReport.join('\n\n<hr>\n\n');
}

function saveScaleChanges(scaleId) {
    const name = document.getElementById('newScaleName').value.trim();
    const desc = document.getElementById('newScaleDescription').value.trim();
    const instructions = document.getElementById('newScaleInstructions').value.trim();
    const isProgressive = document.getElementById('newScaleProgressive').checked;

    if (!name || !desc) return alert("O Nome e a Descrição Curta são obrigatórios.");

    customScales[scaleId].name = name;
    customScales[scaleId].description = desc;
    customScales[scaleId].instructions = instructions;
    customScales[scaleId].progressive = isProgressive;
    saveCustomData();
    toggleAddScaleForm();
    renderScaleSelection();
}

function deleteScale(scaleId) {
    if (confirm('Tem certeza que deseja deletar esta escala e todas as suas perguntas?')) {
        delete customScales[scaleId];
        selectedScales = selectedScales.filter(id => id !== scaleId);
        saveCustomData();
        renderScaleSelection();
    }
}

// Modal de Perguntas
function addAnswerField(text = '', points = 0) {
    const container = document.getElementById('answersContainer');
    const div = document.createElement('div');
    div.className = 'answer-input-group';
    div.style.cssText = 'display: grid; grid-template-columns: 2fr 1fr auto; gap: 10px; align-items: center; margin-bottom: 10px;';
    const textInput = document.createElement('input');
    textInput.type = 'text'; textInput.value = text; textInput.placeholder = 'Texto da Resposta'; textInput.className = 'answer-text';
    const pointsInput = document.createElement('input');
    pointsInput.type = 'number'; pointsInput.value = points; pointsInput.placeholder = 'Pontos'; pointsInput.className = 'answer-points';
    const removeBtn = document.createElement('button');
    removeBtn.className = 'btn btn-danger btn-small'; removeBtn.textContent = '×';
    removeBtn.onclick = () => div.remove();
    div.appendChild(textInput); div.appendChild(pointsInput); div.appendChild(removeBtn);
    container.appendChild(div);
}

function openQuestionModal(scaleId) {
    const modal = document.getElementById('questionModal');
    document.getElementById('questionModalTitle').textContent = 'Adicionar Nova Pergunta';
    document.getElementById('questionText').value = '';
    document.getElementById('questionExplanation').value = '';
    document.getElementById('answersContainer').innerHTML = '';
    addAnswerField('Sim', 1);
    addAnswerField('Não', 0);
    document.getElementById('saveQuestionBtn').onclick = () => saveQuestion(scaleId);
    modal.style.display = 'block';
}

function openEditQuestionModal(scaleId, questionId) {
    const question = findQuestionById(questionId);
    if (!question) return;
    const modal = document.getElementById('questionModal');
    document.getElementById('questionModalTitle').textContent = 'Editar Pergunta';
    document.getElementById('questionText').value = question.question;
    document.getElementById('questionExplanation').value = question.explanation || '';
    const answersContainer = document.getElementById('answersContainer');
    answersContainer.innerHTML = '';
    (question.answers || []).forEach(ans => addAnswerField(ans.text, ans.points));
    document.getElementById('saveQuestionBtn').onclick = () => saveQuestionChanges(scaleId, questionId);
    modal.style.display = 'block';
}

function closeQuestionModal() {
    document.getElementById('questionModal').style.display = 'none';
}

function saveQuestion(scaleId) {
    const questionText = document.getElementById('questionText').value.trim();
    const explanationText = document.getElementById('questionExplanation').value.trim();

    if (!questionText) return alert('O texto da pergunta é obrigatório.');

    const answerGroups = document.querySelectorAll('#answersContainer .answer-input-group');
    const answers = Array.from(answerGroups).map(div => ({
        id: `ans_${Date.now()}_${Math.random()}`,
        text: div.querySelector('.answer-text').value.trim(),
        points: parseFloat(div.querySelector('.answer-points').value) || 0
    })).filter(ans => ans.text);

    if (answers.length === 0) return alert('Adicione pelo menos uma resposta.');

    const newQuestion = {
        id: 'custom_q_' + Date.now(),
        question: questionText,
        explanation: explanationText,
        answers
    };
    customScales[scaleId].questions.push(newQuestion);
    saveCustomData();
    closeQuestionModal();
    renderQuestions();
}


function saveQuestionChanges(scaleId, questionId) {
    const question = findQuestionById(questionId);
    if (!question) return;
    question.question = document.getElementById('questionText').value.trim();
    question.explanation = document.getElementById('questionExplanation').value.trim();

    const answerGroups = document.querySelectorAll('#answersContainer .answer-input-group');
    const answers = Array.from(answerGroups).map(div => ({
        id: `ans_${Date.now()}_${Math.random()}`,
        text: div.querySelector('.answer-text').value.trim(),
        points: parseFloat(div.querySelector('.answer-points').value) || 0
    })).filter(ans => ans.text);

    question.answers = answers;
    saveCustomData();
    closeQuestionModal();
    renderQuestions();
}

// Modal de Configurações da Escala
function openScaleSettingsModal(scaleId) {
    const scale = customScales[scaleId];
    if (!scale) return;
    const modal = document.getElementById('scaleSettingsModal');
    document.getElementById('scaleSettingsModalTitle').textContent = `Configurar Escala: ${scale.name}`;
    const container = document.getElementById('interpretationsContainer');
    container.innerHTML = '';
    (scale.interpretations || []).forEach(rule => addInterpretationRule(rule.min, rule.max, rule.text));
    document.getElementById('saveScaleSettingsBtn').onclick = () => saveScaleSettings(scaleId);
    modal.style.display = 'block';
}

function closeScaleSettingsModal() {
    document.getElementById('scaleSettingsModal').style.display = 'none';
}

function addInterpretationRule(min = 0, max = 0, text = '') {
    const container = document.getElementById('interpretationsContainer');
    const div = document.createElement('div');
    div.className = 'interpretation-rule';
    div.innerHTML = `
        <input type="number" class="interp-min" value="${min}" placeholder="De">
        <input type="number" class="interp-max" value="${max}" placeholder="Até">
        <input type="text" class="interp-text" value="${text}" placeholder="Texto da interpretação">
        <button class="btn btn-danger btn-small" onclick="this.parentElement.remove()">×</button>
    `;
    container.appendChild(div);
}

function saveScaleSettings(scaleId) {
    const scale = customScales[scaleId];
    if (!scale) return;
    const rules = [];
    const ruleElements = document.querySelectorAll('#interpretationsContainer .interpretation-rule');
    ruleElements.forEach(el => {
        const min = parseFloat(el.querySelector('.interp-min').value);
        const max = parseFloat(el.querySelector('.interp-max').value);
        const text = el.querySelector('.interp-text').value.trim();
        if (!isNaN(min) && !isNaN(max) && text) {
            rules.push({ min, max, text });
        }
    });
    scale.interpretations = rules;
    saveCustomData();
    closeScaleSettingsModal();
}
