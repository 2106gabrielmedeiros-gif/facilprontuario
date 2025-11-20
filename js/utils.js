// ======== NAVEGAÇÃO E LÓGICA DE TELAS ========
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
    syncStepper(screenId);
    if (typeof positionPreviewToggle === 'function') {
        positionPreviewToggle();
    }
}

function syncStepper(screenId) {
    const stepper = document.querySelector('[data-stepper]');
    if (!stepper) return;
    const steps = Array.from(stepper.querySelectorAll('[data-step-target]'));
    const currentIndex = steps.findIndex(step => step.dataset.stepTarget === screenId);
    if (currentIndex === -1) return;
    steps.forEach((step, index) => {
        const isActive = index === currentIndex;
        step.classList.toggle('is-active', isActive);
        step.classList.toggle('is-complete', index < currentIndex);
        step.setAttribute('aria-current', isActive ? 'step' : 'false');
    });
}

function setupTheme() {
    document.documentElement.classList.add('dark');
    document.documentElement.setAttribute('data-theme', 'dark');
}

// ======== PERSISTÊNCIA ========
function saveCustomData() {
    if (typeof customExams !== 'undefined') {
        localStorage.setItem('customExams', JSON.stringify(customExams));
    }
    if (typeof customAdditions !== 'undefined') {
        localStorage.setItem('customAdditions', JSON.stringify(customAdditions));
    }
    if (typeof likelihoodData !== 'undefined') {
        localStorage.setItem('likelihoodData', JSON.stringify(likelihoodData));
    }
    if (typeof customScales !== 'undefined') {
        localStorage.setItem('customScales', JSON.stringify(customScales));
    }
    if (typeof customPrescriptions !== 'undefined') {
        localStorage.setItem('customPrescriptions', JSON.stringify(customPrescriptions));
    }
}

function loadCustomData() {
    if (typeof customExams !== 'undefined') {
        const ce = localStorage.getItem('customExams');
        if (ce) customExams = JSON.parse(ce);
    }
    if (typeof customAdditions !== 'undefined') {
        const ca = localStorage.getItem('customAdditions');
        if (ca) customAdditions = JSON.parse(ca);
    }
    if (typeof likelihoodData !== 'undefined') {
        const ld = localStorage.getItem('likelihoodData');
        if (ld) likelihoodData = JSON.parse(ld);
    }
    if (typeof customScales !== 'undefined') {
        const cs = localStorage.getItem('customScales');
        if (cs) customScales = JSON.parse(cs);
    }
    if (typeof customPrescriptions !== 'undefined') {
        const cp = localStorage.getItem('customPrescriptions');
        if (cp) customPrescriptions = JSON.parse(cp);
    }
}

function saveSessionState() {
    if (typeof selectedExams !== 'undefined' && typeof findingsState !== 'undefined') {
        sessionStorage.setItem('sessionState', JSON.stringify({ selectedExams, findingsState }));
    }
    if (typeof selectedScales !== 'undefined' && typeof answersState !== 'undefined') {
        sessionStorage.setItem('sessionState', JSON.stringify({ selectedScales, answersState }));
    }
}

function loadSessionState() {
    const s = sessionStorage.getItem('sessionState');
    if (s) {
        const d = JSON.parse(s);
        if (typeof selectedExams !== 'undefined') {
            selectedExams = d.selectedExams || [];
        }
        if (typeof findingsState !== 'undefined') {
            findingsState = d.findingsState || {};
        }
        if (typeof selectedScales !== 'undefined') {
            selectedScales = d.selectedScales || [];
        }
        if (typeof answersState !== 'undefined') {
            answersState = d.answersState || {};
        }

        if (typeof renderExamSelection !== 'undefined' && selectedExams.length > 0) {
            renderExamSelection();
        }
        if (typeof renderScaleSelection !== 'undefined' && selectedScales.length > 0) {
            renderScaleSelection();
        }
    }
}

function masterReset() {
    if (confirm("Isso limpará TODOS os dados da sessão e também TODOS os seus exames e achados customizados salvos neste navegador. Deseja continuar?")) {
        sessionStorage.clear();
        localStorage.clear();
        showToast('Todos os dados foram limpos. A página será recarregada.', 'info');
        setTimeout(() => window.location.reload(), 1500);
    }
}

function exportData(type) {
    let dataToExport = {};
    let fileName = 'config.json';

    switch (type) {
        case 'exams':
            if (typeof customExams !== 'undefined' && Object.keys(customExams).length > 0) {
                dataToExport = { customExams, customAdditions, likelihoodData };
                fileName = 'laudos_config.json';
            } else {
                showToast('Nenhum dado de exame customizado para exportar.', 'warning');
                return;
            }
            break;
        case 'scales':
            if (typeof customScales !== 'undefined' && Object.keys(customScales).length > 0) {
                dataToExport = { customScales };
                fileName = `escalas_config_${new Date().toISOString().slice(0, 10)}.json`;
            } else {
                showToast('Nenhum dado de escala customizada para exportar.', 'warning');
                return;
            }
            break;
        case 'prescriptions':
            if (typeof customPrescriptions !== 'undefined' && Object.keys(customPrescriptions).length > 0) {
                dataToExport = { customPrescriptions };
                fileName = `prescricoes_config_${new Date().toISOString().slice(0, 10)}.json`;
            } else {
                showToast('Nenhum dado de prescrição customizada para exportar.', 'warning');
                return;
            }
            break;
        default:
            showToast('Tipo de exportação desconhecido.', 'error');
            return;
    }

    if (Object.keys(dataToExport).length === 0) {
        showToast('Nenhum dado para exportar.', 'warning');
        return;
    }

    const blob = new Blob([JSON.stringify(dataToExport, null, 2)], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = fileName;
    a.click();
    showToast('Exportação iniciada!', 'success');
}

// ======== TOAST NOTIFICATIONS ========
function showToast(message, type = 'success', title = '') {
    let container = document.querySelector('.toast-container');
    if (!container) {
        container = document.createElement('div');
        container.className = 'toast-container';
        document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;

    let icon = '';
    let defaultTitle = '';

    switch (type) {
        case 'success':
            icon = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>';
            defaultTitle = 'Sucesso';
            break;
        case 'error':
            icon = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>';
            defaultTitle = 'Erro';
            break;
        case 'warning':
            icon = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>';
            defaultTitle = 'Atenção';
            break;
        default:
            icon = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>';
            defaultTitle = 'Informação';
    }

    toast.innerHTML = `
        <div class="toast-icon">${icon}</div>
        <div class="toast-content">
            <div class="toast-title">${title || defaultTitle}</div>
            <div class="toast-message">${message}</div>
        </div>
    `;

    container.appendChild(toast);

    // Trigger reflow
    toast.offsetHeight;
    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            toast.remove();
            if (container.children.length === 0) {
                container.remove();
            }
        }, 300);
    }, 3000);
}

function handleImport(file) {
    const r = new FileReader();
    r.onload = () => {
        try {
            const d = JSON.parse(r.result);
            if (typeof customExams !== 'undefined' && d.customExams) {
                customExams = d.customExams;
                if (d.customAdditions) customAdditions = d.customAdditions;
                if (d.likelihoodData) likelihoodData = d.likelihoodData;
                saveCustomData();
                renderExamSelection();
                showToast('Exames importados com sucesso!', 'success');
            } else if (typeof customScales !== 'undefined' && d.customScales) {
                customScales = { ...customScales, ...d.customScales };
                saveCustomData();
                renderScaleSelection();
                showToast('Escalas importadas com sucesso!', 'success');
            } else if (typeof customPrescriptions !== 'undefined' && d.customPrescriptions) {
                customPrescriptions = { ...customPrescriptions, ...d.customPrescriptions };
                saveCustomData();
                renderDiseaseSelection();
                showToast('Prescrições importadas com sucesso!', 'success');
            } else {
                showToast('Arquivo inválido ou formato não reconhecido.', 'error');
            }
        } catch {
            showToast('Erro ao ler o arquivo. Verifique se é um JSON válido.', 'error');
        }
    };
    r.readAsText(file);
}

// ======== UX ========
window.onclick = (e) => {
    if (e.target.classList.contains('modal')) {
        const closeBtn = e.target.querySelector('.modal-close');
        if (closeBtn) closeBtn.click();
    }
};

window.addEventListener('beforeunload', () => {
    if ((typeof selectedExams !== 'undefined' && selectedExams.length > 0) || (typeof selectedScales !== 'undefined' && selectedScales.length > 0)) {
        saveSessionState();
    }
});

// ======== MODAIS GERAIS ========
function openHelpModal() {
    const modal = document.getElementById('helpModal');
    if (modal) {
        modal.style.display = 'flex';
    }
}

function closeHelpModal() {
    const modal = document.getElementById('helpModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

// ======== DRAWER MANAGEMENT ========
document.addEventListener('DOMContentLoaded', () => {
    injectDrawerHTML();
});

function injectDrawerHTML() {
    if (document.getElementById('appDrawer')) return;

    const drawerHTML = `
        <div id="drawerOverlay" class="drawer-overlay" onclick="closeDrawer()"></div>
        <div id="appDrawer" class="drawer">
            <div class="drawer-header">
                <h3 id="drawerTitle" class="drawer-title">Editar</h3>
                <button class="drawer-close" onclick="closeDrawer()" aria-label="Fechar">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>
            </div>
            <div id="drawerContent" class="drawer-content">
                <!-- Conteúdo dinâmico aqui -->
            </div>
            <div id="drawerFooter" class="drawer-footer">
                <button class="btn btn-secondary" onclick="closeDrawer()">Cancelar</button>
                <button id="drawerSaveBtn" class="btn btn-success">Salvar</button>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', drawerHTML);
}

function openDrawer(title, contentHtml, onSaveCallback) {
    const drawer = document.getElementById('appDrawer');
    const overlay = document.getElementById('drawerOverlay');
    const titleEl = document.getElementById('drawerTitle');
    const contentEl = document.getElementById('drawerContent');
    const saveBtn = document.getElementById('drawerSaveBtn');

    if (!drawer || !overlay) return;

    titleEl.textContent = title;
    contentEl.innerHTML = contentHtml;

    // Remove event listeners antigos para evitar duplicidade
    const newSaveBtn = saveBtn.cloneNode(true);
    saveBtn.parentNode.replaceChild(newSaveBtn, saveBtn);

    if (onSaveCallback) {
        newSaveBtn.onclick = () => {
            onSaveCallback();
            // O fechamento deve ser manual ou controlado pelo callback se houver validação
        };
        newSaveBtn.style.display = 'block';
    } else {
        newSaveBtn.style.display = 'none';
    }

    overlay.classList.add('open');
    drawer.classList.add('open');
    document.body.style.overflow = 'hidden'; // Previne scroll no fundo
}

function closeDrawer() {
    const drawer = document.getElementById('appDrawer');
    const overlay = document.getElementById('drawerOverlay');

    if (drawer) drawer.classList.remove('open');
    if (overlay) overlay.classList.remove('open');
    document.body.style.overflow = '';
}
