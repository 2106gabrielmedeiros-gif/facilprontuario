// ======== NAVEGAÇÃO E LÓGICA DE TELAS ========
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
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
        alert('Todos os dados foram limpos. A página será recarregada.');
        window.location.reload();
    }
}

function exportData() {
    let dataToExport = {};
    let fileName = 'config.json';

    if (typeof customExams !== 'undefined') {
        dataToExport = { customExams, customAdditions, likelihoodData };
        fileName = 'laudos_config.json';
    } else if (typeof customScales !== 'undefined') {
        dataToExport = { customScales };
        fileName = `escalas_config_${new Date().toISOString().slice(0,10)}.json`;
    }

    const blob = new Blob([JSON.stringify(dataToExport, null, 2)], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = fileName;
    a.click();
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
                alert('Importado!');
            } else if (typeof customScales !== 'undefined' && d.customScales) {
                customScales = { ...customScales, ...d.customScales };
                saveCustomData();
                renderScaleSelection();
                alert('Escalas importadas com sucesso!');
            } else {
                alert('Arquivo inválido.');
            }
        } catch {
            alert('Erro ao ler o arquivo. Verifique se é um JSON válido.');
        }
    };
    r.readAsText(file);
}

// ======== UX ========
window.onclick = (e) => {
    if (e.target.classList.contains('modal')) {
        const closeBtn = e.target.querySelector('.close');
        if(closeBtn) closeBtn.click();
    }
};

window.addEventListener('beforeunload', () => {
    if ((typeof selectedExams !== 'undefined' && selectedExams.length > 0) || (typeof selectedScales !== 'undefined' && selectedScales.length > 0)) {
        saveSessionState();
    }
});
