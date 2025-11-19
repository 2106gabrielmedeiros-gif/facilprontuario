const prescriptionsData = {
    "has_sbc_2024": {
        "id": "has_sbc_2024",
        "name": "Hipertensão Arterial (HAS)",
        "options": [
            {
                "id": "has_losartana",
                "name": "Losartana (BRA) - Monoterapia",
                "text": "Losartana Potássica 50 mg ------------------------------------ 30 comprimidos\nTomar 01 comprimido, via oral, de 12 em 12 horas."
            },
            {
                "id": "has_enalapril",
                "name": "Enalapril (IECA) - Monoterapia",
                "text": "Maleato de Enalapril 10 mg ------------------------------------ 60 comprimidos\nTomar 01 comprimido, via oral, de 12 em 12 horas."
            },
            {
                "id": "has_hctz",
                "name": "Hidroclorotiazida (Diurético)",
                "text": "Hidroclorotiazida 25 mg --------------------------------------- 30 comprimidos\nTomar 01 comprimido, via oral, pela manhã."
            },
            {
                "id": "has_anlodipino",
                "name": "Anlodipino (BCC)",
                "text": "Besilato de Anlodipino 5 mg ----------------------------------- 30 comprimidos\nTomar 01 comprimido, via oral, uma vez ao dia (preferencialmente à noite)."
            },
            {
                "id": "has_combinada_1",
                "name": "Combinação: Losartana + HCTZ",
                "text": "Losartana 50 mg + Hidroclorotiazida 12,5 mg ------------------- 30 comprimidos\nTomar 01 comprimido, via oral, pela manhã."
            }
        ]
    },
    "dm2_sbd_2024": {
        "id": "dm2_sbd_2024",
        "name": "Diabetes Mellitus Tipo 2",
        "options": [
            {
                "id": "dm2_metformina_ini",
                "name": "Metformina (Inicial)",
                "text": "Cloridrato de Metformina 500 mg ------------------------------- 60 comprimidos\nTomar 01 comprimido, via oral, após o café da manhã e após o jantar.\n(Aumentar dose gradualmente conforme tolerância gástrica)"
            },
            {
                "id": "dm2_metformina_xr",
                "name": "Metformina XR (Liberação Prolongada)",
                "text": "Cloridrato de Metformina XR 500 mg ---------------------------- 60 comprimidos\nTomar 02 comprimidos, via oral, uma vez ao dia durante o jantar."
            },
            {
                "id": "dm2_gliclazida",
                "name": "Gliclazida MR (Sulfonilureia)",
                "text": "Gliclazida MR 30 mg ------------------------------------------- 30 comprimidos\nTomar 01 a 02 comprimidos, via oral, pela manhã, antes do café."
            },
            {
                "id": "dm2_insulina_nph",
                "name": "Insulina NPH (Basal)",
                "text": "Insulina Humana NPH 100 UI/mL --------------------------------- 01 frasco/refil\nAplicar ____ UI, via subcutânea, antes de dormir (22h).\n(Ajustar 2 UI a cada 3 dias baseado na glicemia de jejum alvo < 110 mg/dL)"
            }
        ]
    },
    "dislipidemia_sbc": {
        "id": "dislipidemia_sbc",
        "name": "Dislipidemias",
        "options": [
            {
                "id": "dislip_sinvastatina",
                "name": "Sinvastatina (Potência Moderada)",
                "text": "Sinvastatina 20 mg -------------------------------------------- 30 comprimidos\nTomar 01 comprimido, via oral, à noite."
            },
            {
                "id": "dislip_atorvastatina",
                "name": "Atorvastatina (Alta Potência)",
                "text": "Atorvastatina Cálcica 20 mg ----------------------------------- 30 comprimidos\nTomar 01 comprimido, via oral, a qualquer hora do dia."
            }
        ]
    },
    "ivas_sintomaticos": {
        "id": "ivas_sintomaticos",
        "name": "IVAS / Gripe / Resfriado",
        "options": [
            {
                "id": "ivas_dipirona",
                "name": "Dipirona (Dor/Febre)",
                "text": "Dipirona Sódica 500 mg ---------------------------------------- 10 comprimidos\nTomar 01 comprimido, via oral, de 6 em 6 horas, se houver dor ou febre."
            },
            {
                "id": "ivas_paracetamol",
                "name": "Paracetamol (Alternativa)",
                "text": "Paracetamol 750 mg -------------------------------------------- 10 comprimidos\nTomar 01 comprimido, via oral, de 6 em 6 horas, se houver dor ou febre."
            },
            {
                "id": "ivas_lavagem",
                "name": "Lavagem Nasal",
                "text": "Soro Fisiológico 0,9% ----------------------------------------- 01 frasco\nRealizar lavagem nasal com 10-20 mL em cada narina, várias vezes ao dia, para fluidificar secreções."
            },
            {
                "id": "ivas_xarope",
                "name": "Xarope Expectorante (Guifenesina)",
                "text": "Guaifenesina Xarope 13,33 mg/mL ------------------------------- 01 frasco\nTomar 15 mL, via oral, de 4 em 4 horas."
            }
        ]
    },
    "amigdalite_bacteriana": {
        "id": "amigdalite_bacteriana",
        "name": "Amigdalite Bacteriana",
        "options": [
            {
                "id": "amig_amoxicilina",
                "name": "Amoxicilina (1ª Escolha)",
                "text": "Amoxicilina 500 mg -------------------------------------------- 21 cápsulas\nTomar 01 cápsula, via oral, de 8 em 8 horas, por 7 dias."
            },
            {
                "id": "amig_benzetacil",
                "name": "Benzetacil (Dose Única)",
                "text": "Benzilpenicilina Benzatina 1.200.000 UI ----------------------- 01 ampola\nAplicar 01 ampola, via intramuscular profunda, dose única."
            },
            {
                "id": "amig_azitromicina",
                "name": "Azitromicina (Alérgicos a Penicilina)",
                "text": "Azitromicina 500 mg ------------------------------------------- 05 comprimidos\nTomar 01 comprimido, via oral, uma vez ao dia, por 5 dias."
            }
        ]
    },
    "itu_nao_complicada": {
        "id": "itu_nao_complicada",
        "name": "Infecção Urinária (Cistite)",
        "options": [
            {
                "id": "itu_fosfomicina",
                "name": "Fosfomicina (Dose Única)",
                "text": "Fosfomicina Trometamol 3 g ------------------------------------ 01 envelope\nDissolver o conteúdo em meio copo de água e tomar em dose única, preferencialmente à noite, com a bexiga vazia."
            },
            {
                "id": "itu_nitrofurantoina",
                "name": "Nitrofurantoína",
                "text": "Nitrofurantoína 100 mg ---------------------------------------- 14 cápsulas\nTomar 01 cápsula, via oral, de 6 em 6 horas, por 5 a 7 dias."
            },
            {
                "id": "itu_scopolamina",
                "name": "Buscopan Composto (Sintomático)",
                "text": "Escopolamina + Dipirona --------------------------------------- 10 comprimidos\nTomar 01 comprimido, via oral, de 8 em 8 horas, se houver dor ou cólica."
            }
        ]
    },
    "dor_inflamacao": {
        "id": "dor_inflamacao",
        "name": "Dor e Inflamação (Osteomuscular)",
        "options": [
            {
                "id": "dor_ibuprofeno",
                "name": "Ibuprofeno",
                "text": "Ibuprofeno 600 mg --------------------------------------------- 15 comprimidos\nTomar 01 comprimido, via oral, de 8 em 8 horas, por 3 a 5 dias. (Tomar após as refeições)"
            },
            {
                "id": "dor_cetoprofeno",
                "name": "Cetoprofeno",
                "text": "Cetoprofeno 100 mg (Entérico) --------------------------------- 10 comprimidos\nTomar 01 comprimido, via oral, de 12 em 12 horas, por 3 a 5 dias. (Tomar após as refeições)"
            },
            {
                "id": "dor_tramadol",
                "name": "Tramadol (Dor Moderada/Intensa)",
                "text": "Cloridrato de Tramadol 50 mg ---------------------------------- 10 cápsulas\nTomar 01 cápsula, via oral, de 8 em 8 horas, se dor intensa."
            },
            {
                "id": "dor_ciclobenzaprina",
                "name": "Ciclobenzaprina (Relaxante Muscular)",
                "text": "Cloridrato de Ciclobenzaprina 5 mg ---------------------------- 10 comprimidos\nTomar 01 comprimido, via oral, à noite, por 5 dias."
            }
        ]
    },
    "gea_adulto": {
        "id": "gea_adulto",
        "name": "Gastroenterite Aguda (GEA)",
        "options": [
            {
                "id": "gea_sro",
                "name": "Sais de Reidratação Oral",
                "text": "Sais para Reidratação Oral ------------------------------------ 04 envelopes\nDiluir 01 envelope em 1 litro de água filtrada ou fervida. Beber à vontade após cada episódio de diarreia ou vômito."
            },
            {
                "id": "gea_ondansetrona",
                "name": "Ondansetrona (Vômitos)",
                "text": "Ondansetrona 4 mg ou 8 mg ------------------------------------- 10 comprimidos\nTomar 01 comprimido, via oral, de 8 em 8 horas, se houver náuseas ou vômitos."
            },
            {
                "id": "gea_probiotico",
                "name": "Probiótico (Floratil)",
                "text": "Saccharomyces boulardii 200 mg -------------------------------- 06 cápsulas\nTomar 01 cápsula, via oral, de 12 em 12 horas, por 3 dias."
            },
            {
                "id": "gea_dieta",
                "name": "Orientações Dietéticas",
                "text": "Dieta leve e obstipante: Arroz, batata, frango grelhado, bolacha de água e sal, banana, maçã.\nEvitar: Leite e derivados, frituras, alimentos gordurosos, doces e refrigerantes.\nAumentar a ingestão hídrica."
            }
        ]
    },
    "anemia_ferropriva": {
        "id": "anemia_ferropriva",
        "name": "Anemia Ferropriva",
        "options": [
            {
                "id": "anemia_sulfato",
                "name": "Sulfato Ferroso (Oral)",
                "text": "Sulfato Ferroso 40 mg (Ferro Elementar) ----------------------- 60 comprimidos\nTomar 01 comprimido, via oral, 30 minutos antes do almoço e 30 minutos antes do jantar. (Associar com suco de frutas cítricas)"
            },
            {
                "id": "anemia_noripurum_ev",
                "name": "Noripurum (Endovenoso)",
                "text": "Sacarato de Hidróxido Férrico 100 mg/5mL ---------------------- 05 ampolas\nDiluir 01 ampola em 100 mL de SF 0,9%. Infundir EV lento (30 min). Repetir a cada 2 ou 3 dias conforme protocolo."
            }
        ]
    },
    "asma_dpoc": {
        "id": "asma_dpoc",
        "name": "Asma / DPOC (Crise e Manutenção)",
        "options": [
            {
                "id": "asma_salbutamol",
                "name": "Salbutamol (Resgate)",
                "text": "Sulfato de Salbutamol 100 mcg/dose (Spray) -------------------- 01 frasco\nAplicar 2 jatos, via inalatória, se falta de ar ou chiado no peito. Pode repetir a cada 4 horas se necessário."
            },
            {
                "id": "asma_beclometasona",
                "name": "Beclometasona (Manutenção)",
                "text": "Dipropionato de Beclometasona 250 mcg/dose -------------------- 01 frasco\nAplicar 1 a 2 jatos, via inalatória, de 12 em 12 horas. (Lavar a boca após o uso)"
            },
            {
                "id": "asma_prednisona",
                "name": "Prednisona (Corticoide Oral - Crise)",
                "text": "Prednisona 20 mg ---------------------------------------------- 10 comprimidos\nTomar 02 comprimidos (40mg), via oral, pela manhã, por 5 dias."
            }
        ]
    },
    "escabiose_piolho": {
        "id": "escabiose_piolho",
        "name": "Escabiose e Pediculose",
        "options": [
            {
                "id": "escab_ivermectina",
                "name": "Ivermectina (Oral)",
                "text": "Ivermectina 6 mg ---------------------------------------------- __ comprimidos\nTomar __ comprimidos (200mcg/kg), via oral, em dose única. Repetir a dose após 7 a 14 dias."
            },
            {
                "id": "escab_permetrina",
                "name": "Permetrina (Loção)",
                "text": "Permetrina 5% Loção ------------------------------------------- 01 frasco\nAplicar no corpo todo (do pescoço para baixo) após o banho, à noite. Deixar agir por 8-12 horas e remover no banho seguinte. Repetir após 7 dias."
            }
        ]
    }
};
