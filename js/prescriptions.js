// ======== ESTADO DA APLICAÇÃO ========
let selectedDiseaseId = null;
let customPrescriptions = {};
let editingDiseaseId = null;
let editingOptionId = null;

// ======== INICIALIZAÇÃO ========
document.addEventListener('DOMContentLoaded', function() {
    loadCustomData();
    renderDiseaseSelection();
    setupTheme();
});

// ======== NAVEGAÇÃO E LÓGICA DE TELAS ========
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
}

function backToSelection() {
    selectedDiseaseId = null;
    showScreen('screen1');
    renderDiseaseSelection();
}

// ======== LÓGICA DE DADOS (MERGE E BUSCA) ========
function getMergedPrescriptions() {
    return { ...prescriptionsData, ...customPrescriptions };
}

function findDiseaseById(diseaseId) {
    return getMergedPrescriptions()[diseaseId] || null;
}

function findOptionById(diseaseId, optionId) {
    const disease = findDiseaseById(diseaseId);
    return disease ? (disease.options || []).find(o => o.id === optionId) : null;
}

// ======== TELA 1: SELEÇÃO DE DOENÇAS ========
function renderDiseaseSelection() {
    const grid = document.getElementById('diseaseGrid');
    grid.innerHTML = '';
    const allPrescriptions = getMergedPrescriptions();
    const filterText = (document.getElementById('diseaseSearchInput')?.value || '').toLowerCase();

    const filtered = Object.values(allPrescriptions).filter(p =>
        p && p.name && p.name.toLowerCase().includes(filterText)
    ).sort((a, b) => a.name.localeCompare(b.name));

    filtered.forEach(disease => {
        const card = document.createElement('div');
        card.className = 'exam-card';
        const isCustom = disease.id.startsWith('custom_');

        card.innerHTML = `<h3>${disease.name}</h3>
        <div class="exam-actions">
            ${isCustom ? `<button class="icon-btn edit" onclick="openEditDiseaseForm('${disease.id}', event)" title="Editar Nome">✎</button>
                         <button class="icon-btn delete" onclick="deleteDisease('${disease.id}', event)" title="Deletar Doença">×</button>` : ''}
        </div>`;

        card.onclick = () => {
            selectedDiseaseId = disease.id;
            renderPrescriptionOptions();
            showScreen('screen2');
        };
        grid.appendChild(card);
    });
}

function toggleAddDiseaseForm() {
    const form = document.getElementById('addDiseaseForm');
    form.classList.toggle('hidden');
    if (!form.classList.contains('hidden')) {
        document.getElementById('diseaseFormTitle').textContent = 'Adicionar Nova Doença';
        document.getElementById('newDiseaseName').value = '';
        const saveBtn = document.getElementById('saveDiseaseBtn');
        saveBtn.textContent = 'Adicionar';
        saveBtn.onclick = addNewDisease;
        editingDiseaseId = null;
    }
}

function addNewDisease() {
    const name = document.getElementById('newDiseaseName').value.trim();
    if (!name) return showToast("O nome da doença é obrigatório.", 'error');

    const newId = 'custom_' + Date.now();
    customPrescriptions[newId] = {
        id: newId,
        name: name,
        options: []
    };
    saveCustomData();
    toggleAddDiseaseForm();
    renderDiseaseSelection();
}

function openEditDiseaseForm(diseaseId, event) {
    event.stopPropagation();
    const disease = customPrescriptions[diseaseId];
    if (!disease) return;

    editingDiseaseId = diseaseId;
    document.getElementById('newDiseaseName').value = disease.name;
    document.getElementById('diseaseFormTitle').textContent = 'Editar Doença';
    const saveBtn = document.getElementById('saveDiseaseBtn');
    saveBtn.textContent = 'Salvar Alterações';
    saveBtn.onclick = saveDiseaseChanges;

    const form = document.getElementById('addDiseaseForm');
    form.classList.remove('hidden');
}

function saveDiseaseChanges() {
    if (!editingDiseaseId) return;
    const name = document.getElementById('newDiseaseName').value.trim();
    if (!name) return showToast("O nome da doença é obrigatório.", 'error');

    customPrescriptions[editingDiseaseId].name = name;
    saveCustomData();
    toggleAddDiseaseForm();
    renderDiseaseSelection();
}

function deleteDisease(diseaseId, event) {
    event.stopPropagation();
    if (confirm('Tem certeza que deseja deletar esta doença e todas as suas opções?')) {
        delete customPrescriptions[diseaseId];
        saveCustomData();
        renderDiseaseSelection();
    }
}

// ======== TELA 2: OPÇÕES DE PRESCRIÇÃO ========
function renderPrescriptionOptions() {
    const disease = findDiseaseById(selectedDiseaseId);
    if (!disease) {
        backToSelection();
        return;
    }

    document.getElementById('prescriptionTitle').textContent = `Prescrições para: ${disease.name}`;
    const container = document.getElementById('optionsContainer');
    container.innerHTML = '';

    (disease.options || []).sort((a, b) => a.name.localeCompare(b.name)).forEach(option => {
        const isCustom = selectedDiseaseId.startsWith('custom_');
        const item = document.createElement('div');
        item.className = 'prescription-item';
        item.innerHTML = `
            <div class="prescription-header">
                <strong>${option.name}</strong>
                <div class="prescription-actions">
                    <button class="btn btn-success btn-small" onclick="copyToClipboard('${option.id}')">Copiar</button>
                    ${isCustom ? `<button class="btn btn-secondary btn-small" onclick="openEditOptionModal('${option.id}')">Editar</button>
                                 <button class="btn btn-danger btn-small" onclick="deleteOption('${option.id}')">Deletar</button>` : ''}
                </div>
            </div>
            <div class="prescription-text">${option.text.replace(/\n/g, '<br>')}</div>
        `;
        container.appendChild(item);
    });
}

function copyToClipboard(optionId) {
    const option = findOptionById(selectedDiseaseId, optionId);
    if (option) {
        navigator.clipboard.writeText(option.text).then(() => showToast('Prescrição copiada para a área de transferência!', 'success'));
    }
}

// ======== MODAL DE OPÇÕES (ADICIONAR/EDITAR) ========
function toggleAddOptionForm() {
    editingOptionId = null;
    document.getElementById('optionModalTitle').textContent = 'Adicionar Nova Opção';
    document.getElementById('optionName').value = '';
    document.getElementById('optionText').value = '';
    document.getElementById('saveOptionBtn').onclick = addNewOption;
    document.getElementById('optionModal').style.display = 'block';
}

function openEditOptionModal(optionId) {
    const option = findOptionById(selectedDiseaseId, optionId);
    if (!option) return;

    editingOptionId = optionId;
    document.getElementById('optionModalTitle').textContent = 'Editar Opção';
    document.getElementById('optionName').value = option.name;
    document.getElementById('optionText').value = option.text;
    document.getElementById('saveOptionBtn').onclick = saveOptionChanges;
    document.getElementById('optionModal').style.display = 'block';
}

function closeOptionModal() {
    document.getElementById('optionModal').style.display = 'none';
}

function addNewOption() {
    const name = document.getElementById('optionName').value.trim();
    const text = document.getElementById('optionText').value.trim();
    if (!name || !text) return showToast('O nome da opção e o texto da prescrição são obrigatórios.', 'error');

    const newOption = {
        id: `custom_opt_${Date.now()}`,
        name,
        text
    };

    const disease = customPrescriptions[selectedDiseaseId];
    if (disease) {
        disease.options.push(newOption);
        saveCustomData();
        renderPrescriptionOptions();
        closeOptionModal();
    }
}

function saveOptionChanges() {
    if (!editingOptionId) return;

    const name = document.getElementById('optionName').value.trim();
    const text = document.getElementById('optionText').value.trim();
    if (!name || !text) return showToast('O nome da opção e o texto da prescrição são obrigatórios.', 'error');

    const disease = customPrescriptions[selectedDiseaseId];
    if (disease) {
        const optionIndex = disease.options.findIndex(o => o.id === editingOptionId);
        if (optionIndex > -1) {
            disease.options[optionIndex].name = name;
            disease.options[optionIndex].text = text;
            saveCustomData();
            renderPrescriptionOptions();
            closeOptionModal();
        }
    }
}

function deleteOption(optionId) {
    if (confirm('Tem certeza que deseja deletar esta opção de prescrição?')) {
        const disease = customPrescriptions[selectedDiseaseId];
        if (disease) {
            disease.options = disease.options.filter(o => o.id !== optionId);
            saveCustomData();
            renderPrescriptionOptions();
        }
    }
}

// ======== PERSISTÊNCIA (localStorage) ========
// As funções saveCustomData e loadCustomData foram centralizadas em js/utils.js
