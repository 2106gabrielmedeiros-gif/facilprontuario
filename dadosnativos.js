// ======== DADOS DE EXEMPLO (NATIVOS) ========
const examsData = {
    // ===== INÍCIO DA CORREÇÃO =====
    "isda": {
      "id": "isda", // ID CORRIGIDO
      "name": "ISDA",
      "description": "Interrogatório Sistemático dos Diversos Aparelhos.",
      "findings": {
        "personalizado": {
          "name": "Geral",
          "items": [
            { "id": "isda_1757794593121", "question": "Febre?", "answers": [{ "id": "ans_1", "text": "Sim", "description": "Apresentou febre", lr: 1.0 }, { "id": "ans_2", "text": "Não", "description": "Nega febre", lr: 1.2 }], "info": "Febre é uma elevação anormal da temperatura corporal. Descubra se o paciente mediu sua temperatura. O paciente sentiu febre ou calor incomum, sudorese excessiva ou sentiu frio? Normalmente, a temperatura corporal aumenta durante o dia e diminui durante a noite. Quando a febre exacerba essa oscilação, ocorre sudorese noturna. </br> A febre tem muitas causas. É preciso focar na cronologia da doença e nos sintomas associados. Familiarize-se com os padrões de doenças infecciosas que podem afetar seu paciente. Informe-se sobre viagens, contato com pessoas doentes e outras exposições incomuns. Até os medicamentos podem causar febre. Em contrapartida, a ingestão recente de ácido acetilsalicílico (AAS), paracetamol, corticosteroides e anti-inflamatórios não esteroides (AINE) pode mascarar a febre e influenciar a temperatura aferida na consulta.", "type": "yes-no"},
            { "id": "isda_1757794621406", "question": "Tumorações ou linfonodomegalias?", "answers": [{ "id": "ans_1", "text": "Sim", "description": "Refere linfonodomegalias" }, { "id": "ans_2", "text": "Não", "description": "Nega linfonodomegalias" }], "info": "Pergunte ao paciente: “Você notou algum nódulo ou massa em seu corpo?”, pois os pacientes costumam estar mais familiarizados com os termos leigos do que com “linfonodos”, por exemplo. Outras perguntas que você pode fazer são: “Quando você percebeu o nódulo pela primeira vez?”, “Como você percebeu isso?”, “Isso foi notado acidentalmente ou contado por outras pessoas?”, “É doloroso?”, “Teve alguma mudança no caroço desde que você o percebeu?”, “O caroço te incomoda? De que maneira?”, “Existem outros sintomas, como corrimento, dor ao engolir (disfagia), dificuldade em respirar (dispneia)?”, “Você já teve algum outro caroço antes disso?”", "type": "yes-no"},
            { "id": "isda_1757794702311", "question": "Sudorese profunda?", "answers": [{ "id": "ans_1", "text": "Sim", "description": "Refere sudorese profunda" }, { "id": "ans_2", "text": "Não", "description": "Nega sudorese profunda" }], "type": "yes-no"},
            { "id": "isda_1757794743247", "question": "Perda ponderal?", "answers": [{ "id": "ans_1", "text": "Sim", "description": "Refere perda ponderal" }, { "id": "ans_2", "text": "Não", "description": "Nega perda ponderal" }], "info": "A alteração do peso corporal resulta de alterações nos tecidos ou líquidos corporais. Boas perguntas de abertura incluem: “Com que frequência você verifica seu peso?”, “Como está em comparação há 1 ano?” Se houver mudanças, pergunte: “Por que você acha que mudou?”, “Quanto você gostaria de estar pesando?” Se o ganho ou perda de peso parecer um problema, pergunte sobre a magnitude da alteração, a cronologia, o cenário em que ocorreu e quaisquer sintomas associados.", "type": "yes-no"},
            { "id": "isda_1757794771764", "question": "Prurido?", "answers": [{ "id": "ans_1", "text": "Sim", "description": "Refere prurido" }, { "id": "ans_2", "text": "Não", "description": "Nega prurido" }], "info": "No caso de erupções cutâneas pruriginosas, perguntar sobre alergias sazonais associadas com prurido e lacrimejamento, asma e dermatite atópica, frequentemente acompanhadas de erupções cutâneas na parte interna dos cotovelos e joelhos na infância. O paciente consegue dormir a noite toda ou acorda por causa do prurido? No caso de erupções na pele, é importante descobrir que tipo de hidratante ou produtos de venda livre foram aplicados. </br> Pergunte também sobre pele seca, que pode causar prurido e erupção cutânea, sobretudo em crianças com dermatite atópica e adultos mais velhos, devido à perda da barreira de umidade natural na epiderme. </br> Causas de prurido generalizado, sem erupção cutânea aparente, incluem pele seca, gravidez, uremia, icterícia, linfomas e leucemia, reações medicamentosas e, menos comumente, policitemia vera.", "type": "yes-no"},
            { "id": "isda_1757794813883", "question": "Palidez?", "answers": [{ "id": "ans_1", "text": "Sim", "description": "Relata palidez" }, { "id": "ans_2", "text": "Não", "description": "Nega palidez" }], "info": "O paciente ou o acompanhante percebeu alguma mudança na coloração da pele? Há quanto tempo? Foi intensa ou leve? Súbita ou demorada? Lembre-se que o ISDA é um dado decorrente do interrogatório, e não uma percepção subjetiva sua (esta deve ser feita durante o exame físico).", "type": "yes-no"}
          ]
        },
        "cat_1757794847662": {
          "name": "Neurológico",
          "items": [
            { "id": "isda_1757794874435", "question": "Déficit motor localizatório?", "answers": [{ "id": "ans_1", "text": "Sim", "description": "Refere déficit(s) motor(es)" }, { "id": "ans_2", "text": "Não", "description": "Nega déficits motores" }], "info": '<p>A fraqueza é outro sintoma comum com diversas causas, que exige uma <strong>investigação cuidadosa.</strong> É importante esclarecer o que o paciente quer dizer — se é fadiga, apatia, sonolência ou uma perda real de força. A verdadeira fraqueza motora pode surgir do sistema nervoso central (SNC), de um nervo periférico, da junção neuromuscular ou de um músculo.<strong> O tempo de evolução e a localização são especialmente relevantes</strong>. O início é súbito, gradual ou subagudo, ou crônico, ao longo de um longo período?</p><p><br></p><p>Quais áreas do corpo estão envolvidas? A fraqueza é generalizada ou focal, no rosto ou em um membro? Envolve um lado do corpo ou os dois lados? Quais movimentos são afetados? Ao ouvir a história do paciente, identifique os padrões abaixo:</p><ol><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Proximal — na cintura escapular e/ou pélvica, por exemplo.</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Distal — nas mãos e/ou pés.</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Simétrica — nas mesmas áreas em ambos os lados do corpo.</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Assimétrica — os tipos de fraqueza incluem a focal, em uma parte do rosto ou extremidade; monoparesia, em uma extremidade; paraparesia, em ambas as extremidades inferiores; e hemiparesia, em um lado do corpo.</li></ol><p> </p><p>Para identificar fraqueza proximal, pergunte sobre dificuldade com movimentos como pentear o cabelo, alcançar algo em uma prateleira alta, levantar-se de uma cadeira ou subir escadas. A fraqueza piora com a repetição e melhora após o repouso? Existem sintomas sensoriais ou outros sintomas associados? Para identificar fraqueza distal, pergunte sobre a força nas mãos ao abrir um pote ou usar tesoura ou chave de fenda, ou problemas como tropeços ao caminhar.</p>', "type": "yes-no"},
            { "id": "isda_1757794896037", "question": "Alterações de marcha?", "answers": [{ "id": "ans_1", "text": "Sim", "description": "Relata alterações de marcha" }, { "id": "ans_2", "text": "Não", "description": "Nega alterações de marcha" }], "type": "yes-no"},
            { "id": "isda_1757794937322", "question": "Cefaleia?", "answers": [{ "id": "ans_1", "text": "Sim", "description": "Queixa-se de cefaleia" }, { "id": "ans_2", "text": "Não", "description": "Nega cefaleia" }], "type": "yes-no"},
            { "id": "isda_1757794956040", "question": "Queixas visuais?", "answers": [{ "id": "ans_1", "text": "Sim", "description": "Relata queixas visuais" }, { "id": "ans_2", "text": "Não", "description": "Nega queixas visuais" }], "type": "yes-no"},
            { "id": "isda_1757794992759", "question": "Parestesias", "answers": [{ "id": "ans_1", "text": "Sim", "description": "Relata parestesias" }, { "id": "ans_2", "text": "Não", "description": "Nega parestesias" }], "type": "yes-no"},
            { "id": "isda_1757795009894", "question": "Vertigem", "answers": [{ "id": "ans_1", "text": "Sim", "description": "Refere vertigem" }, { "id": "ans_2", "text": "Não", "description": "Nega vertigem" }], "type": "yes-no"}
          ]
        },
        "cat_1757795036697": {
          "name": "Cardiorrespiratório",
          "items": [
            { "id": "isda_1757795074712", "question": "Palpitações", "answers": [{ "id": "ans_1", "text": "Aos esforços", "description": "Refere palpitações aos esforços" }, { "id": "ans_2", "text": "Ao repouso", "description": "Refere palpitações mesmo em repouso" }, { "id": "ans_3", "text": "Nega", "description": "Nega palpitações" }], "type": "multiple-choice"},
            { "id": "isda_1757795115032", "question": "Dor torácica?", "answers": [{ "id": "ans_1", "text": "Sim", "description": "Refere dor torácica" }, { "id": "ans_2", "text": "Não", "description": "Nega dor torácica" }], "type": "yes-no"},
            { "id": "isda_1757795203771", "question": "Dispneia?", "answers": [{ "id": "ans_1", "text": "Em repouso", "description": "Refere dispneia de repouso" }, { "id": "ans_2", "text": "Aos esforços", "description": "Refere dispneia aos esforços" }, { "id": "ans_3", "text": "DPN", "description": "Refere dispneia paroxística noturna" }, { "id": "ans_4", "text": "Ortopneia", "description": "Refere ortopneia" }, { "id": "ans_5", "text": "Não", "description": "Nega dispneia" }], "type": "multiple-choice"},
            { "id": "isda_1757795308744", "question": "Tosse?", "answers": [{ "id": "ans_1", "text": "Tosse produtiva", "description": "Refere tosse produtiva" }, { "id": "ans_2", "text": "Tosse seca", "description": "Refere tosse seca" }, { "id": "ans_3", "text": "Nega", "description": "Nega tosse" }], "type": "multiple-choice"},
            { "id": "isda_1757795327518", "question": "Escarro?", "answers": [{ "id": "ans_1", "text": "Sim", "description": "Refere escarro" }, { "id": "ans_2", "text": "Não", "description": "Nega escarro" }], "type": "yes-no"},
            { "id": "isda_1757795351645", "question": "Edema de MMII?", "answers": [{ "id": "ans_1", "text": "Sim", "description": "Refere edema de membros inferiores" }, { "id": "ans_2", "text": "Não", "description": "Nega edema de membros inferiores" }], "type": "yes-no"},
            { "id": "isda_1757795367862", "question": "Cianose", "answers": [{ "id": "ans_1", "text": "Sim", "description": "Refere cianose" }, { "id": "ans_2", "text": "Não", "description": "Nega cianose" }], "type": "yes-no"}
          ]
        },
        "cat_1757795411346": {
          "name": "Trato Geniturinário",
          "items": [
             { "id": "isda_1757795557705", "question": "Disúria?", "answers": [{ "id": "ans_1", "text": "Sim", "description": "Refere disúria" }, { "id": "ans_2", "text": "Não", "description": "Nega disúria" }], "type": "yes-no"},
             { "id": "isda_1757795576873", "question": "Poliaciúria", "answers": [{ "id": "ans_1", "text": "Sim", "description": "Refere poliaciúria" }, { "id": "ans_2", "text": "Não", "description": "Nega poliaciúria" }], "type": "yes-no"},
             { "id": "isda_1757795594474", "question": "Hematúria?", "answers": [{ "id": "ans_1", "text": "Sim", "description": "Refere hematúria" }, { "id": "ans_2", "text": "Não", "description": "Nega hematúria" }], "type": "yes-no"}
          ]
        },
        "cat_1757795607321": {
          "name": "Trato Gastrointestinal",
          "items": [
            { "id": "isda_1757795626592", "question": "Náuseas?", "answers": [{ "id": "ans_1", "text": "Sim", "description": "Refere náusea" }, { "id": "ans_2", "text": "Não", "description": "Nega náusea" }], "type": "yes-no"},
            { "id": "isda_1757795643790", "question": "Vômitos?", "answers": [{ "id": "ans_1", "text": "Sim", "description": "Refere vômitos" }, { "id": "ans_2", "text": "Não", "description": "Nega vômitos" }], "type": "yes-no"},
            { "id": "isda_1757795663675", "question": "Plenitude pós-prandial?", "answers": [{ "id": "ans_1", "text": "Sim", "description": "Refere plenitude pós-prandial" }, { "id": "ans_2", "text": "Não", "description": "Nega plenitude pós prandial" }], "type": "yes-no"},
            { "id": "isda_1757795681032", "question": "Epigastralgia?", "answers": [{ "id": "ans_1", "text": "Sim", "description": "Refere epigastralgia" }, { "id": "ans_2", "text": "Não", "description": "Nega epigastralgia" }], "type": "yes-no"},
            { "id": "isda_1757795698413", "question": "Odinofagia?", "answers": [{ "id": "ans_1", "text": "Sim", "description": "Refere odinofagia" }, { "id": "ans_2", "text": "Não", "description": "Nega odinofagia" }], "type": "yes-no"},
            { "id": "isda_1757795718397", "question": "Sialorreia?", "answers": [{ "id": "ans_1", "text": "Sim", "description": "Refere sialorreia" }, { "id": "ans_2", "text": "Não", "description": "Nega sialorreia" }], "type": "yes-no"},
            { "id": "isda_1757795771200", "question": "Alterações do paladar?", "answers": [{ "id": "ans_1", "text": "Ageusia", "description": "Refere ageusia" }, { "id": "ans_2", "text": "Hipogeusia", "description": "Refere hipogeusia" }, { "id": "ans_3", "text": "Disgeusia", "description": "Refere disgeusia" }, { "id": "ans_4", "text": "Não", "description": "Nega alterações do paladar" }], "type": "multiple-choice"},
            { "id": "isda_1757795805003", "question": "Dores abdominais?", "answers": [{ "id": "ans_1", "text": "Sim", "description": "Refere dores abdominais" }, { "id": "ans_2", "text": "Não", "description": "Nega dores abdominais" }], "type": "yes-no"},
            { "id": "isda_1757795871688", "question": "Distensão abdominal?", "answers": [{ "id": "ans_1", "text": "Sim", "description": "Refere distensão abdominal" }, { "id": "ans_2", "text": "Não", "description": "Nega distensão abdominal" }], "type": "yes-no"},
            { "id": "isda_1757795904557", "question": "Hematoquezia?", "answers": [{ "id": "ans_1", "text": "Sim", "description": "Refere hematoquezia" }, { "id": "ans_2", "text": "Não", "description": "Nega hematoquezia" }], "type": "yes-no"},
            { "id": "isda_1757795957143", "question": "Enterorragia?", "answers": [{ "id": "ans_1", "text": "Sim", "description": "Refere enterorragia" }, { "id": "ans_2", "text": "Não", "description": "Nega enterorragia" }], "type": "yes-no"},
            { "id": "isda_1757795979113", "question": "Melena?", "answers": [{ "id": "ans_1", "text": "Sim", "description": "Refere melena" }, { "id": "ans_2", "text": "Não", "description": "Nega melena" }], "type": "yes-no"},
            { "id": "isda_1757796005996", "question": "Constipação", "answers": [{ "id": "ans_1", "text": "Sim", "description": "Refere constipação" }, { "id": "ans_2", "text": "Não", "description": "Nega constipação" }], "type": "yes-no"},
            { "id": "isda_1757796021682", "question": "Diarreia?", "answers": [{ "id": "ans_1", "text": "Sim", "description": "Refere diarreia" }, { "id": "ans_2", "text": "Não", "description": "Nega diarreia" }], "type": "yes-no"}
          ]
        },
        "cat_1757796039753": {
          "name": "Pele e Fâneros",
          "items": [
            { "id": "isda_1757796058731", "question": "Lesões cutâneas", "answers": [{ "id": "ans_1", "text": "Sim", "description": "Refere lesões cutâneas" }, { "id": "ans_2", "text": "Não", "description": "Nega lesões cutâneas" }], "type": "yes-no"},
            { "id": "isda_1757796078299", "question": "Alterações de fâneros", "answers": [{ "id": "ans_1", "text": "Sim", "description": "Refere alterações de fâneros" }, { "id": "ans_2", "text": "Não", "description": "Nega alterações de fâneros" }], "type": "yes-no"},
            { "id": "isda_1757796099068", "question": "Alopécia?", "answers": [{ "id": "ans_1", "text": "Sim", "description": "Refere alopécia" }, { "id": "ans_2", "text": "Não", "description": "Nega alopécia" }], "type": "yes-no"}
          ]
        },
        "cat_1757796113195": {
          "name": "Osteoarticular",
          "items": [
            { "id": "isda_1757796132020", "question": "Dores ósseas?", "answers": [{ "id": "ans_1", "text": "Sim", "description": "Refere dores ósseas" }, { "id": "ans_2", "text": "Não", "description": "Nega dores ósseas" }], "type": "yes-no"},
            { "id": "isda_1757796149255", "question": "Dores articulares?", "answers": [{ "id": "ans_1", "text": "Sim", "description": "Refere dores articulares" }, { "id": "ans_2", "text": "Não", "description": "Nega dores articulares" }], "type": "yes-no"}
          ]
        }
      }
    }, 
    // ===== FIM DA CORREÇÃO =====
    "cardiovascular": {
      "id": "cardiovascular",
      "name": "Cardiovascular",
      "description": "Avaliação do coração e dos vasos sanguíneos.",
      "findings": {
        "cat_1757801345744": {
          "name": "Inspeção",
          "items": [
            {
              "id": "cardiovascular_1757801345744",
              "question": "Tipo de tórax",
              "answers": [
                {
                  "id": "ans_1757804493908_0.8978841312988091",
                  "text": "Atípico",
                  "description": "Tórax atípico"
                },
                {
                  "id": "ans_1757804493909_0.5995512845402159",
                  "text": "Em barril",
                  "description": "Tórax em barril"
                },
                {
                  "id": "ans_1757804493909_0.4911991362906254",
                  "text": "Cifótico",
                  "description": "Tórax cifótico"
                },
                {
                  "id": "ans_1757804493909_0.4821482448267612",
                  "text": "Pectus excavatum",
                  "description": "Pectus excavatum"
                },
                {
                  "id": "ans_1757804493909_0.812471006617115",
                  "text": "Pectus carinatum",
                  "description": "Pectus carinatum"
                }
              ],
              "info": "<h3><b>Tipo de tórax</b></h3>\n<p>\n<b>Como Avaliar:</b> Durante a inspeção geral, observe o formato do tórax do paciente. Avalie o diâmetro anteroposterior (AP) em relação ao diâmetro lateral. Em um adulto normal, a relação entre o diâmetro AP e o diâmetro lateral é, normalmente, 0,7 a 0,9 e aumenta com o envelhecimento.\n</p>\n<br/>\n<p>\n<b>Significado dos Achados:</b><br/>\n• <b>Tórax em tonel (em barril):</b> O diâmetro AP está aumentado. Esse formato é normal nos primeiros anos de vida e muitas vezes acompanha o envelhecimento e a doença pulmonar obstrutiva crônica.<br/>\n• <b>Tórax carinado (pectus carinatum):</b> O esterno apresenta deslocamento anterior, aumentando o diâmetro AP. Há depressão das cartilagens costais adjacentes ao esterno protruso.<br/>\n• <b>Tórax escavado (pectus excavatum):</b> Observe a depressão na porção inferior do esterno. A compressão do coração e dos grandes vasos pode causar sopros.\n</p>\n<br/>",
              "type": "multiple-choice"
            },
            {
              "id": "cardiovascular_1757801366762",
              "question": "Torax simétrico?",
              "answers": [
                {
                  "id": "ans_1757804526593_0.3838842915546328",
                  "text": "Sim",
                  "description": "Simétrico"
                },
                {
                  "id": "ans_1757804526593_0.18951542546784417",
                  "text": "Não",
                  "description": "Assimétrico"
                }
              ],
              "info": "<h3><b>Simetria de tórax</b></h3>\n<p>\n<b>Como Avaliar:</b> Inspecione o tórax do paciente, comparando um lado com o outro para verificar a simetria dos movimentos respiratórios. Você pode colocar seus polegares ao longo de cada rebordo costal na parede torácica anterior ou posterior e pedir ao paciente para inspirar profundamente, observando a distância que seus polegares se afastam e a simetria da expansão da caixa torácica.\n</p>\n<br/>\n<p>\n<b>Significado dos Achados:</b><br/>\n• <b>Simétrico:</b> Movimento igual de ambos os lados do tórax durante a respiração é o esperado.<br/>\n• <b>Assimétrico:</b> Uma diminuição ou um retardo unilateral da expansão torácica ocorre na fibrose crônica do pulmão ou pleura subjacente, derrame pleural, pneumonia lobar, dor pleurítica com imobilização associada, obstrução brônquica unilateral e paralisia do hemidiafragma.\n</p>\n<br/>",
              "type": "yes-no"
            },
            {
              "id": "cardiovascular_1757801378995",
              "question": "Presença de cicatrizes",
              "answers": [
                {
                  "id": "ans_1757801378995_0.5053246335412372",
                  "text": "Sim",
                  "description": "Com cicatriz"
                },
                {
                  "id": "ans_1757801378995_0.6885838526478193",
                  "text": "Não",
                  "description": "Sem cicatrizes"
                }
              ],
              "info": "",
              "type": "yes-no"
            },
            {
              "id": "cardiovascular_1757801426933",
              "question": "Baqueteamento digital?",
              "answers": [
                {
                  "id": "ans_1757804586709_0.024081584449157645",
                  "text": "Sim",
                  "description": "Com baqueteamento digital"
                },
                {
                  "id": "ans_1757804586709_0.76161812924605",
                  "text": "Não",
                  "description": "Sem baqueteamento digital"
                }
              ],
              "info": '<h3><b>Baqueteamento digital</b></h3>\n<p>\n<b>Como Avaliar:</b> Inspecione a forma das unhas e dos dedos. O baqueteamento digital é um edema bulboso dos tecidos moles na base da unha, com desaparecimento do ângulo normal entre a unha e a prega ungueal proximal. O ângulo aumenta para 180° ou mais, e o leito ungueal se mostra esponjoso ou flutuante à palpação.\n</p>\n<br/>\n<p>\n<b>Significado dos Achados:</b> O baqueteamento digital é observado em cardiopatias congênitas, doença pulmonar intersticial e câncer de pulmão, doenças inflamatórias intestinais e processos malignos.\n</p>\n<br/> <img src="img/baqueteamento.png" alt="Baqueteamento digital" style="max-width:100%;">',
              "type": "yes-no"
            },
            {
              "id": "cardiovascular_1757801584919",
              "question": "Cianose",
              "answers": [
                {
                  "id": "ans_1757804537691_0.9982369753096565",
                  "text": "Sim",
                  "description": "Presença de cianose"
                },
                {
                  "id": "ans_1757804537691_0.6527812965590203",
                  "text": "Não",
                  "description": "Acianótico"
                }
              ],
              "info": "<h3><b>Cianose</b></h3>\n<p>\n<b>Como Avaliar:</b> Inspecione a cor da pele e dos leitos ungueais. A cianose é uma coloração azulada da pele. A cianose central é melhor observada nos lábios, na mucosa oral e na língua. A cianose periférica é observada nas unhas, mãos e pés.\n</p>\n<br/>\n<p>\n<b>Significado dos Achados:</b><br/>\n• <b>Cianose Central:</b> Indica diminuição do oxigênio no sangue, sugerindo problemas cardíacos ou pulmonares. Pode ser causada por shunt da direita para a esquerda em cardiopatias congênitas.<br/>\n• <b>Cianose Periférica:</b> Indica uma diminuição do fluxo sanguíneo para as extremidades, fazendo com que os tecidos extraiam mais oxigênio do sangue. Pode ser um reflexo normal ao frio ou pode indicar condições como insuficiência cardíaca ou choque.\n</p>\n<br/>",
              "type": "yes-no"
            },
            {
              "id": "cardiovascular_1757801838203",
              "question": "Edemas de membros inferiores?",
              "answers": [
                {
                  "id": "ans_1757804561545_0.8309329208731309",
                  "text": "Sim",
                  "description": "Presença de edemas de membros inferiores"
                },
                {
                  "id": "ans_1757804561545_0.1650505484509538",
                  "text": "Não",
                  "description": "Ausência de edemas de membros inferiores"
                }
              ],
              "info": "<h3><b>Edema de membros inferiores</b></h3>\n<p>\n<b>Como Avaliar:</b> Inspecione e palpe os membros inferiores, desde os pés até as coxas, procurando por inchaço. Pressione firmemente com o polegar por no mínimo 2 segundos sobre o dorso de cada pé, atrás de cada maléolo medial e sobre as tíbias para verificar a presença de edema depressível (cacifo).\n</p>\n<br/>\n<p>\n<b>Significado dos Achados:</b><br/>\n• <b>Edema com Cacifo:</b> Uma depressão que persiste após a pressão indica edema, que é o acúmulo de líquido intersticial. Pode ser causado por insuficiência cardíaca, síndrome nefrótica, cirrose hepática, ou insuficiência venosa crônica.<br/>\n• <b>Edema sem Cacifo (Linfedema):</b> O edema é firme e não depressível, e a pele pode estar espessada. Isso ocorre devido ao acúmulo intersticial de líquido rico em proteínas quando os canais linfáticos estão obstruídos.\n</p>\n<br/>",
              "type": "yes-no"
            },
            {
              "id": "cardiovascular_1757802503288",
              "question": "Úlcera de membros inferiores?",
              "answers": [
                {
                  "id": "ans_1757802503288_0.35128834027558253",
                  "text": "Sim",
                  "description": "Presença de úlcera de membros inferiores"
                },
                {
                  "id": "ans_1757802503288_0.03012761126713004",
                  "text": "Não",
                  "description": "Ausência de úlcera de membros inferiores"
                }
              ],
              "info": "",
              "type": "yes-no"
            },
            {
              "id": "cardiovascular_1757802574159",
              "question": "Sinais de insuficiência venosa crônica?",
              "answers": [
                {
                  "id": "ans_1757804616001_0.979154679760403",
                  "text": "Sim",
                  "description": "Presença de sinais de insuficiência venosa"
                },
                {
                  "id": "ans_1757804616001_0.4430221627435983",
                  "text": "Não",
                  "description": "Ausência de sinais de insuficiência venosa"
                }
              ],
              "info": "<h3><b>Sinais de insuficiência venosa crônica</b></h3>\n<p>\n<b>Como Avaliar:</b> Inspecione a pele dos membros inferiores, especialmente ao redor dos tornozelos. Procure por edema, pigmentação acastanhada, espessamento da pele e presença de úlceras, principalmente na região do maléolo medial.\n</p>\n<br/>\n<p>\n<b>Significado dos Achados:</b> Estes são sinais de estase venosa e hipertensão. O edema é mole e depressível. A pigmentação acastanhada ocorre com a cronicidade. A pele pode se tornar atrófica e vulnerável a ulcerações.\n</p>\n<br/>",
              "type": "yes-no"
            }
          ]
        },
        "cat_1757801898559": {
          "name": "Ausculta",
          "items": [
            {
              "id": "cardiovascular_1757801942127",
              "question": "Bulhas cardíacas?",
              "answers": [
                {
                  "id": "ans_1757803984265_0.16203102753381649",
                  "text": "Normofonéticas",
                  "description": "Bulhas cardíacas normofonéticas"
                },
                {
                  "id": "ans_1757803984265_0.6970411278857037",
                  "text": "Hipofonéticas",
                  "description": "Bulhas cardíacas hipofonéticas"
                },
                {
                  "id": "ans_1757803984265_0.16819938273105228",
                  "text": "Hiperfonéticas",
                  "description": "Bulhas cardíacas hiperfonéticas"
                },
                {
                  "id": "ans_1757803984265_0.8089538022932239",
                  "text": "Variantes",
                  "description": "Bulhas cardíacas variantes em intensidade"
                }
              ],
              "info": "<h2>A. B1 ALTA</h2>\n    <p>A primeira bulha cardíaca (B₁) pode estar anormalmente alta devido a:</p>\n    \n    <h3>Contrações ventriculares vigorosas</h3>\n    <p>Isso acontece em situações como febre e estimulação simpática (por exemplo, com o uso de inaladores beta-adrenérgicos ou em casos de tireotoxicose).</p>\n    \n    <h3>Fechamento tardio da valva mitral</h3>\n    \n    <h4>a. Prolapso da valva mitral</h4>\n    <p>Em pacientes com o sopro de regurgitação mitral, uma bulha B₁ alta pode ser um indício de prolapso inicial da valva mitral (embora muitos pacientes com regurgitação mitral tenham uma B₁ normal ou suave).</p>\n    <p>A bulha B₁ é alta nesses pacientes porque os folhetos que se prolapsam param de se mover e se tensionam mais tarde do que o normal, quando a taxa de mudança de pressão no ventrículo é maior.</p>\n    \n    <h4>b. Estenose Mitral</h4>\n    <p>Noventa por cento dos pacientes com estenose mitral pura e descomplicada têm uma bulha B₁ alta.</p>\n    <p>Como o sopro da estenose mitral é frequentemente difícil de ouvir, um ensinamento tradicional é que os médicos devem suspeitar de estenose mitral em qualquer paciente com uma B₁ alta sem explicação e ouvir atentamente o sopro com o paciente deitado sobre o lado esquerdo. A estenose mitral retarda o fechamento da valva mitral porque o gradiente de pressão entre o átrio esquerdo e o ventrículo esquerdo mantém os folhetos abertos até o momento da sístole ventricular.</p>\n    <p>Após uma valvuloplastia bem-sucedida, a bulha B₁ se torna mais suave.</p>\n    \n    <h4>c. Mixoma Atrial Esquerdo</h4>\n    <p>Muitos pacientes com mixoma atrial esquerdo (7 em 9 em uma série) também têm uma bulha B₁ alta porque o tumor que cai no orifício mitral durante a diástole retarda o fechamento da valva.</p>\n    \n    <h2>B. B₁ FRACA OU AUSENTE</h2>\n    <p>A bulha B₁ é excepcionalmente fraca se as contrações ventriculares forem fracas ou se a valva mitral já estiver fechada quando a sístole ventricular ocorre.</p>\n    \n    <h3>1. Contrações Ventriculares Fracas</h3>\n    <p>Exemplos comuns de contrações fracas que causam uma S₁ fraca são o infarto do miocárdio e o bloqueio do ramo esquerdo.</p>\n    \n    <h3>2. Fechamento Precoce da Valva Mitral</h3>\n    <p>Causas comuns de fechamento precoce da valva mitral que causam uma S₁ fraca incluem o seguinte:</p>\n    \n    <h4>a. Intervalo PR Longo (>0.20 segundos)</h4>\n    \n    <h4>b. Regurgitação Aórtica Aguda</h4>\n    <p>Em pacientes com sopro de regurgitação aórtica, a bulha S₁ fraca ou ausente é uma pista importante de que a regurgitação é aguda (por exemplo, endocardite) e não crônica.</p>\n    <p>Pacientes com regurgitação aórtica aguda têm pressões diastólicas finais no ventrículo esquerdo (LV) muito mais altas do que aqueles com regurgitação crônica, porque a valva que falha agudamente não deu tempo para o ventrículo aumentar de tamanho, como acontece para compensar a regurgitação crônica.</p>\n    <p>As altas pressões no ventrículo acabam excedendo as pressões diastólicas atriais esquerdas, fechando a valva mitral antes da sístole ventricular e, portanto, tornando a bulha S₁ fraca ou ausente.</p>\n    \n    <h2>C. INTENSIDADE VARIÁVEL DA B₁</h2>\n    <p>Se o ritmo do pulso arterial é regular mas a intensidade da bulha B₁ varia, a única explicação possível é que o intervalo PR está mudando de batimento para batimento, o que significa que o paciente tem dissociação atrioventricular.</p>\n    <p>Em contraste, em pacientes com ritmos irregulares, a mudança na intensidade da B₁ não tem significado diagnóstico, porque o enchimento ventricular e a taxa de mudança de pressão — e, portanto, a intensidade da B₁ — dependem completamente do comprimento do ciclo.</p>",
              "type": "multiple-choice"
            },
            {
              "id": "cardiovascular_1757802062616",
              "question": "Ritmo cardíaco regular?",
              "answers": [
                {
                  "id": "ans_1757804658698_0.5751061555827929",
                  "text": "Sim",
                  "description": "Ritmo cardíaco regular em dois tempos"
                },
                {
                  "id": "ans_1757804658698_0.49075277147180796",
                  "text": "Não",
                  "description": "Ritmo cardíaco irregular"
                }
              ],
              "info": "<h3><b>Ritmo cardíaco regular versus irregular</b></h3>\n<p>\n<b>Como Avaliar:</b> Palpe o pulso radial e ausculte o coração. Avalie se os batimentos ocorrem em um ritmo constante. Se o ritmo for irregular, tente identificar um padrão (por exemplo, irregularmente regular ou irregularmente irregular). Um ECG é necessário para um diagnóstico definitivo.\n</p>\n<br/>\n<p>\n<b>Significado dos Achados:</b><br/>\n• <b>Ritmo Regular:</b> Batimentos em intervalos consistentes, como no ritmo sinusal normal.<br/>\n• <b>Ritmo Irregular:</b> Pode ser causado por extrassístoles (batimentos prematuros), que são comuns e muitas vezes benignas, ou por arritmias mais sérias como a fibrilação atrial, onde o ritmo é \"irregularmente irregular\".\n</p>\n<br/>",
              "type": "yes-no"
            },
            {
              "id": "cardiovascular_1757802133536",
              "question": "Há desdobramento de bulha?",
              "answers": [
                {
                  "id": "ans_1757804703779_0.6148318354669566",
                  "text": "Desdobramento de B2",
                  "description": "Desdobramento de B2"
                },
                {
                  "id": "ans_1757804703779_0.7479800626761536",
                  "text": "Não",
                  "description": "Sem desdobramentos patológicos de bulhas"
                }
              ],
              "info": "<h3><b>Desdobramentos de bulha</b></h3>\n<p>\n<b>Como Avaliar:</b> Ausculte o coração, especialmente no segundo espaço intercostal esquerdo, com o diafragma do estetoscópio. Peça ao paciente para respirar calma e depois profundamente. O desdobramento fisiológico da segunda bulha cardíaca (B2) é a audição de dois componentes (A2 e P2) durante a inspiração, que se fundem em um único som na expiração.\n</p>\n<br/>\n<p>\n<b>Significado dos Achados:</b><br/>\n• <b>Desdobramento Fisiológico:</b> Normal, causado pelo fechamento retardado da valva pulmonar devido ao aumento do retorno venoso para o coração direito durante a inspiração.<br/>\n• <b>Desdobramento Fixo:</b> O desdobramento de B2 que não varia com a respiração é um sinal clássico de defeito do septo interatrial.<br/>\n• <b>Desdobramento Paradoxal ou Invertido:</b> O desdobramento aparece durante a expiração e desaparece na inspiração. A causa mais comum é o bloqueio de ramo esquerdo.\n</p>\n<br/>",
              "type": "multiple-choice"
            },
            {
              "id": "cardiovascular_1757802179105",
              "question": "Há sopros?",
              "answers": [
                {
                  "id": "ans_1757804714120_0.4571024585070099",
                  "text": "Sopro sistólico",
                  "description": "Presença de sopro sistólico"
                },
                {
                  "id": "ans_1757804714120_0.5227526797321929",
                  "text": "Sopro diastólico",
                  "description": "Presença de sopro diastólico"
                },
                {
                  "id": "ans_1757804714120_0.3335460003955375",
                  "text": "Não",
                  "description": "Sem sopros cardíacos"
                }
              ],
              "info": "<h3><b>Sopros cardíacos</b></h3>\n<p>\n<b>Como Avaliar:</b> Ausculte o coração em todas as áreas precordiais com o diafragma e a campânula do estetoscópio. Se um sopro for detectado, caracterize-o quanto a: tempo no ciclo cardíaco (sistólico ou diastólico), formato, localização de intensidade máxima, irradiação, intensidade (grau I a VI), tom e qualidade. Manobras como pedir ao paciente para sentar e inclinar-se para frente podem acentuar certos sopros.\n</p>\n<br/>\n<p>\n<b>Significado dos Achados:</b> Sopros são causados por fluxo sanguíneo turbulento e podem ser \"inocentes\" (fisiológicos) ou patológicos.<br/>\n• <b>Sopros Sistólicos:</b> Podem ser inocentes ou indicar patologias como estenose aórtica ou regurgitação mitral.<br/>\n• <b>Sopros Diastólicos:</b> São quase sempre patológicos, indicando estenose mitral ou regurgitação aórtica.\n</p>\n<br/>",
              "type": "multiple-choice"
            },
            {
              "id": "cardiovascular_1757802211756",
              "question": "Sopro carotídeo",
              "answers": [
                {
                  "id": "ans_1757802376632_0.5674313213358312",
                  "text": "Sim",
                  "description": "Presença de sopro carotídeo"
                },
                {
                  "id": "ans_1757802376632_0.901680898935419",
                  "text": "Não",
                  "description": "Sem sopro carotídeo"
                }
              ],
              "info": "<b> teste </b>",
              "type": "yes-no"
            }
          ]
        },
        "cat_1757802686029": {
          "name": "Palpação",
          "items": [
            {
              "id": "cardiovascular_1757802806939",
              "question": "Ictus cordis desviado?",
              "answers": [
                {
                  "id": "ans_1757804761780_0.9942242122293249",
                  "text": "Sim",
                  "description": "Ictus cordis desviado"
                },
                {
                  "id": "ans_1757804761780_0.4213173092522975",
                  "text": "Não",
                  "description": "Ictus cordis palpável no 5º espaço intercostal esquerdo"
                },
                {
                  "id": "ans_1757804761780_0.430555818323488",
                  "text": "Não palpável",
                  "description": "Ictus cordis não palpável"
                }
              ],
              "info": "<h3><b>Desvio de ictus cordis</b></h3>\n<p>\n<b>Como Avaliar:</b> Palpe o precórdio para localizar o impulso apical, ou ponto de impulso máximo (PIM), também conhecido como ictus cordis. Normalmente, é encontrado no quinto espaço intercostal esquerdo, na linha medioclavicular ou medial a ela, com um diâmetro de 1 a 2,5 cm.\n</p>\n<br/>\n<p>\n<b>Significado dos Achados:</b><br/>\n• <b>Ictus Cordis Normal:</b> Indica um coração de tamanho normal.<br/>\n• <b>Desvio do Ictus Cordis:</b> Um desvio lateral na direção da linha axilar anterior, decorrente de dilatação ventricular, é observado na insuficiência cardíaca, miocardiopatia e doença cardíaca isquêmica.\n</p>",
              "type": "multiple-choice"
            },
            {
              "id": "cardiovascular_1757804870445",
              "question": "Alterações de pulsos periféricos?",
              "answers": [
                {
                  "id": "ans_1757804977679_0.3130209926446489",
                  "text": "Sim",
                  "description": "Pulsos periféricos alterados"
                },
                {
                  "id": "ans_1757804977679_0.9973921555759392",
                  "text": "Não",
                  "description": "Pulsos periféricos presentes bilateralmente e simétricos"
                }
              ],
              "info": "<h3><b>Alteração de Pulsos Periféricos</b></h3>\n<p>\n<b>Como Avaliar:</b> A palpação dos pulsos arteriais periféricos é fundamental para avaliar a circulação arterial. Utilize as polpas dos dedos indicador e médio para palpar os seguintes pulsos bilateralmente, comparando a força entre os lados: radial, braquial, femoral, poplíteo, tibial posterior e dorsal do pé. A amplitude (força) do pulso é graduada em uma escala de 0 a 3+:<br/>\n• <b>3+:</b> Aumentado, enérgico<br/>\n• <b>2+:</b> Enérgico, esperado (normal)<br/>\n• <b>1+:</b> Diminuído, mais fraco que o esperado<br/>\n• <b>0:</b> Ausente, impossível de palpar\n</p>\n<br/>\n<p>\n<b>Significado dos Achados:</b><br/>\n• <b>Pulsos Diminuídos ou Ausentes (1+ ou 0):</b> Indicam comprometimento do fluxo sanguíneo para a extremidade. A causa mais comum é a doença arterial periférica (DAP) por aterosclerose. Uma ausência súbita de pulso sugere oclusão arterial aguda por um êmbolo ou trombo.<br/>\n• <b>Pulsos Aumentados (3+):</b> Pulsos enérgicos e amplos (\"fortes\") podem ser encontrados em condições que aumentam a pressão de pulso, como na regurgitação aórtica. Um pulso exagerado e localizado, como na artéria poplítea, pode sugerir um aneurisma.\n</p>",
              "type": "yes-no"
            }
          ]
        }
	  }
  },
  
      "ectoscopia_1757812498478": {
      "id": "ectoscopia_1757812498478",
      "name": "Ectoscopia",
      "description": "Exame físico geral",
      "findings": {
        "cat_1757812516456": {
          "name": "Estado geral",
          "items": [
            {
              "id": "ectoscopia_1757812630259",
              "question": "Estado geral do paciente",
              "answers": [
                {
                  "id": "ans_1757812630259_0.20517348720222472",
                  "text": "BEG",
                  "description": "Paciente em bom estado geral"
                },
                {
                  "id": "ans_1757812630259_0.07721889646898084",
                  "text": "REG",
                  "description": "Paciente em regular estado geral"
                },
                {
                  "id": "ans_1757812630259_0.5955922301983005",
                  "text": "MEG",
                  "description": "Paciente em mal estado geral"
                }
              ],
              "info": "<p>É uma avaliação com base no conjunto de dados exibidos pelo paciente e interpretados de acordo com a experiência de cada um. </p><p><br></p><p>Em outras palavras, é o que aparenta o paciente, visto em sua totalidade. Embora sugestiva, tem utilidade clínica. Para descrever a impressão obtida, usase a seguinte nomenclatura: <strong>bom estado geral (BEG); regular estado geral (REG); mau estado geral (MEG)</strong>. A avaliação do estado geral tem utilidade prática, principalmente para se compreender até que ponto a doença atingiu o organismo, visto como um todo. Serve ainda de <strong>alerta para o médico nos casos com escassos sinais ou sintomas indicativos de uma determinada enfermidade, obrigando-o a aprofundar sua investigação diagnóstica</strong> na busca de uma afecção que justifique a deterioração do estado geral. Situação inversa também pode ocorrer, ou seja, a manutenção de bom estado geral, na presença de uma doença sabidamente grave. Isso indica uma boa capacidade de reação do organismo, o que tem, inclusive, valor prognóstico.</p><p><br></p><p>(Porto, 8ª Ed)</p>",
              "type": "multiple-choice"
            },
            {
              "id": "ectoscopia_1757813716697",
              "question": "Cianose?",
              "answers": [
                {
                  "id": "ans_1757813716697_0.27333765440041347",
                  "text": "Sim",
                  "description": "Cianótico"
                },
                {
                  "id": "ans_1757813716697_0.828331661700422",
                  "text": "Não",
                  "description": "Acianótico"
                }
              ],
              "info": "",
              "type": "yes-no"
            },
            {
              "id": "ectoscopia_1757813728545",
              "question": "Icterícia?",
              "answers": [
                {
                  "id": "ans_1757813728545_0.05022413897639033",
                  "text": "Sim",
                  "description": "Ictérico"
                },
                {
                  "id": "ans_1757813728545_0.5284990517487589",
                  "text": "Não",
                  "description": "Anictérico"
                }
              ],
              "info": "",
              "type": "yes-no"
            },
            {
              "id": "ectoscopia_1757813753494",
              "question": "Febre?",
              "answers": [
                {
                  "id": "ans_1757813753494_0.16846115919323645",
                  "text": "Sim",
                  "description": "Febril ao toque"
                },
                {
                  "id": "ans_1757813753494_0.78958861822661",
                  "text": "Não",
                  "description": "Afebril"
                }
              ],
              "info": "",
              "type": "yes-no"
            },
            {
              "id": "ectoscopia_1757813781876",
              "question": "Edema?",
              "answers": [
                {
                  "id": "ans_1757814372978_0.2700400145753685",
                  "text": "Sim",
                  "description": "edemaciado"
                },
                {
                  "id": "ans_1757814372978_0.43296666046304855",
                  "text": "Não",
                  "description": "sem edemas aparentes"
                }
              ],
              "info": '<p>O edema, ou inchaço, refere-se ao acúmulo de líquido excessivo no espaço intersticial extravascular. O tecido intersticial é capaz de absorver até 5 litros de líquido, acomodando um ganho de peso de até 10%, antes do aparecimento de edema depressível. As causas variam de sistêmicas a locais. Concentre se na localização, no momento de manifestação e no contexto do edema e dos sintomas associados. “Alguma parte do seu corpo está inchada? Onde? Algum outro lugar? Quando ele ocorre? É pior pela manhã ou à noite? Seus sapatos ficam apertados?”</p><p><br></p><p>Com frequência as causas são cardíacas (disfunção ventricular direita ou esquerda, hipertensão pulmonar) ou pulmonares (doença pulmonar obstrutiva), mas também podem ser nutricionais (hipoalbuminemia) e/ou posturais. O edema postural aparece nas partes mais baixas do corpo: os pés e as pernas na posição sentada ou o sacro, quando o paciente está acamado. Anasarca é edema generalizado grave que se estende até o sacro e o abdome.</p> <img src="img/edema.jpeg" alt="Edema" style="max-width:100%;">',
              "type": "yes-no"
            },
            {
              "id": "ectoscopia_1757814453773",
              "question": "Palidez?",
              "answers": [
                {
                  "id": "ans_1757814453773_0.8535984686801081",
                  "text": "Sim",
                  "description": "Pálido"
                },
                {
                  "id": "ans_1757814453773_0.9200588911101762",
                  "text": "Não",
                  "description": "sem palidez"
                }
              ],
              "info": "",
              "type": "yes-no"
            }
          ]
        },
        "cat_1757812698190": {
          "name": "Estado mental",
          "items": [
            {
              "id": "ectoscopia_1757812906677",
              "question": "Nível de consciência",
              "answers": [
                {
                  "id": "ans_1757812906677_0.3074426376423324",
                  "text": "Consciente",
                  "description": "Paciente consciente"
                },
                {
                  "id": "ans_1757812906677_0.8025784621597133",
                  "text": "Obnubilação",
                  "description": "Paciente obnubilado"
                },
                {
                  "id": "ans_1757812906677_0.6891305687237976",
                  "text": "Sonolento",
                  "description": "Paciente sonolento"
                },
                {
                  "id": "ans_1757812906677_0.40787888572579933",
                  "text": "Confuso",
                  "description": "Paciente confuso"
                },
                {
                  "id": "ans_1757812906677_0.41764911400148597",
                  "text": "Torporoso",
                  "description": "Paciente torporoso"
                },
                {
                  "id": "ans_1757812906677_0.5305938149489514",
                  "text": "Comatoso",
                  "description": "Paciente em coma"
                }
              ],
              "info": "<p>A percepção consciente do mundo exterior e de si mesmo caracteriza o estado de vigília, resultante da atividade de diversas áreas cerebrais, coordenadas pelo sistema reticular ativado ascendente. Entre o estado de vigília, em que está inteiramente consciente, e o estado comatoso, no qual o paciente perde a capacidade de identificar seu mundo interior e os acontecimentos do meio externo, é possível distinguir diversas fases intermediárias em uma graduação cujo principal indicador é o nível de consciência, assim esquematizado: </p><p><br></p><p><strong>Obnubilação</strong>: quando o nível de consciência é pouco comprometido, permanecendo o paciente em estado de alerta ainda que algo diminuído </p><p><strong>Sonolência</strong>: o paciente é facilmente despertado, responde mais ou menos apropriadamente, mas logo volta a dormir </p><p><strong>Confusão mental</strong>: configurase por perda de atenção, o pensamento não é claro, as respostas são lentas e não há uma percepção temporoespacial normal </p><p><strong>Torpor ou estupor</strong>: quando a alteração de consciência for mais pronunciada, mas o paciente ainda é capaz de ser despertado por estímulos mais fortes e tem movimentos espontâneos </p><p><strong>Coma</strong>: quando o paciente não for despertado por estímulos fortes e não tiver movimentos espontâneos.</p><p><br></p><p>(Porto, 8ª Ed.)</p>",
              "type": "multiple-choice"
            },
            {
              "id": "ectoscopia_1757813000362",
              "question": "Perceptividade",
              "answers": [
                {
                  "id": "ans_1757813000361_0.29114349545833995",
                  "text": "Perceptivo",
                  "description": "Perceptivo"
                },
                {
                  "id": "ans_1757813000362_0.7760179098511694",
                  "text": "Disperceptivo",
                  "description": "Disperceptivo"
                }
              ],
              "info": "",
              "type": "multiple-choice"
            },
            {
              "id": "ectoscopia_1757813020120",
              "question": "Reatividade",
              "answers": [
                {
                  "id": "ans_1757813031481_0.8850157961204831",
                  "text": "Reativo",
                  "description": "Reativo aos estímulos"
                },
                {
                  "id": "ans_1757813031481_0.04457543911429196",
                  "text": "Não reativo",
                  "description": "Não reativo"
                }
              ],
              "info": "",
              "type": "multiple-choice"
            }
          ]
        },
        "cat_1757813084128": {
          "name": "Fala e Linguagem",
          "items": [
            {
              "id": "ectoscopia_1757813254401",
              "question": "Alterações da fala?",
              "answers": [
                {
                  "id": "ans_1757813254401_0.8862144998996513",
                  "text": "Não",
                  "description": "Sem alterações de fala"
                },
                {
                  "id": "ans_1757813254401_0.5749058102279446",
                  "text": "Disfonia",
                  "description": "Disfonia"
                },
                {
                  "id": "ans_1757813254401_0.16189996549210084",
                  "text": "Dislalia",
                  "description": "Dislalia"
                },
                {
                  "id": "ans_1757813254401_0.968979627970966",
                  "text": "Disartria",
                  "description": "Disartria"
                },
                {
                  "id": "ans_1757813254401_0.3147308239405341",
                  "text": "Disfasia",
                  "description": "Disfasia"
                }
              ],
              "info": "<p> A fala depende de mecanismos bastante complexos que compreendem o órgão fonador, a laringe, os músculos da fonação e a elaboração cerebral. As alterações da fala classificam-se, basicamente, da seguinte maneira: </p><ol><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><strong>Disfonia ou afonia: </strong>é uma alteração do timbre da voz causada por alguma alteração no órgão fonador. A voz pode tornar-se rouca, fanhosa ou bitonal.</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><strong>Dislalia</strong>: é o termo usado para designar alterações menores da fala, comuns em crianças, como a troca de letra (“tasa” por “casa”). Uma forma especial é a disritmolalia, que compreende distúrbios no ritmo da fala, incluindo a gagueira e a taquilalia </li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><strong>Disartria</strong>: decorre de alterações nos músculos da fonação, incoordenação cerebral (voz arrastada, escandida), hipertonia no parkinsonismo (voz baixa, monótona e lenta) ou perda do controle piramidal (paralisia pseudobulbar) </li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><strong>Disfasia</strong>: aparece com total normalidade do órgão fonador e dos músculos da fonação e depende de um distúrbio na elaboração cortical da fala. Há diversos graus de disfasia, desde mínimas alterações até perda total da fala.</li></ol>",
              "type": "multiple-choice"
            }
          ]
        },
        "cat_1757813303820": {
          "name": "Fácies",
          "items": [
            {
              "id": "ectoscopia_1757813473997",
              "question": "Fácies",
              "answers": [
                {
                  "id": "ans_1757813473997_0.8845039955116454",
                  "text": "Atípica",
                  "description": "Sem atipias de fácies"
                },
                {
                  "id": "ans_1757813473997_0.07812114107047963",
                  "text": "Hipocrática",
                  "description": "Fácies hipocrática"
                },
                {
                  "id": "ans_1757813473997_0.5898563147380843",
                  "text": "Renal",
                  "description": "Fácies renal"
                },
                {
                  "id": "ans_1757813473997_0.8084755288572243",
                  "text": "Leonina",
                  "description": "Fácies leonina"
                },
                {
                  "id": "ans_1757813473997_0.5380050913700899",
                  "text": "Adenoidiana",
                  "description": "Fácies adenoidiana"
                },
                {
                  "id": "ans_1757813473997_0.924080451867396",
                  "text": "Basedowiana",
                  "description": "Fácies basedowiana"
                },
                {
                  "id": "ans_1757813473997_0.5935761867414423",
                  "text": "Mixedematosa",
                  "description": "Fácies mixedematosa"
                },
                {
                  "id": "ans_1757813473997_0.780899016442734",
                  "text": "Acromegálica",
                  "description": "Fácies acromegálica"
                },
                {
                  "id": "ans_1757813473997_0.410266425976181",
                  "text": "Cushigoide",
                  "description": "Fácies cushigoide"
                }
              ],
              "info": "",
              "type": "multiple-choice"
            }
          ]
        },
        "cat_1757813488049": {
          "name": "Biotipo e postura",
          "items": [
            {
              "id": "ectoscopia_1757813545248",
              "question": "Biotipo",
              "answers": [
                {
                  "id": "ans_1757813545248_0.5336195409560827",
                  "text": "Normolíneo",
                  "description": "Paciente normolíneo"
                },
                {
                  "id": "ans_1757813545248_0.05741416624859885",
                  "text": "Mediolíneo",
                  "description": "Paciente mediolíneo"
                },
                {
                  "id": "ans_1757813545248_0.9486793824273606",
                  "text": "Brevilíneo",
                  "description": "Paciente brevilíneo"
                }
              ],
              "info": "",
              "type": "multiple-choice"
            },
            {
              "id": "ectoscopia_1757813612327",
              "question": "Alterações posturais?",
              "answers": [
                {
                  "id": "ans_1757813612327_0.22733876405384512",
                  "text": "Não",
                  "description": "Sem alterações posturais"
                },
                {
                  "id": "ans_1757813612327_0.28982406988498677",
                  "text": "Cifose",
                  "description": "cifótico"
                },
                {
                  "id": "ans_1757813612327_0.7191443183016377",
                  "text": "Lordose",
                  "description": "lordótico"
                },
                {
                  "id": "ans_1757813612327_0.12757466104992",
                  "text": "Escoliose",
                  "description": "com escoliose"
                }
              ],
              "info": "",
              "type": "multiple-choice"
            }
          ]
        }
    }
  },
  "abdome": {
    "id": "abdome",
    "name": "Abdome",
    "description": "Exame dirigido do abdome com foco em inspeção, ausculta, percussão e palpação sistemática.",
    "findings": {
      "inspecao": {
        "name": "Inspeção",
        "items": [
          {
            "id": "abdome_1758130000001",
            "question": "Contorno abdominal?",
            "answers": [
              { "id": "ans_1", "text": "Plano", "description": "Abdome plano, sem distensão" },
              { "id": "ans_2", "text": "Globoso", "description": "Abdome globoso" },
              { "id": "ans_3", "text": "Escavado", "description": "Abdome escavado" },
              { "id": "ans_4", "text": "Distensão assimétrica", "description": "Distensão abdominal assimétrica" }
            ],
            "type": "multiple-choice",
            "info": "Observe o abdome com o paciente em decúbito dorsal e cabeça apoiada. Avalie o contorno em visão tangencial e frontal, buscando abaulamentos localizados, retrações ou assimetrias. Verifique se a distensão acompanha movimentos respiratórios e se há cicatrizes que expliquem alterações anatômicas." 
          },
          {
            "id": "abdome_1758130000002",
            "question": "Cicatrizes ou lesões visíveis?",
            "answers": [
              { "id": "ans_1", "text": "Ausentes", "description": "Sem cicatrizes ou lesões aparentes" },
              { "id": "ans_2", "text": "Cicatrizes cirúrgicas", "description": "Cicatrizes cirúrgicas em abdome" },
              { "id": "ans_3", "text": "Lesões dermatológicas", "description": "Lesões ou dermatites em abdome" }
            ],
            "type": "multiple-choice",
            "info": "Inspecione à procura de cicatrizes medianas, transversas ou laparoscópicas que possam alterar a anatomia. Avalie também equimoses, circulação colateral, hérnias, nodulações cutâneas e lesões inflamatórias. Peça esclarecimentos sobre cirurgias prévias ou traumas se encontrar achados." 
          },
          {
            "id": "abdome_1758130000003",
            "question": "Peristalse visível?",
            "answers": [
              { "id": "ans_1", "text": "Não", "description": "Sem peristalse visível" },
              { "id": "ans_2", "text": "Discreta", "description": "Peristalse discretamente visível" },
              { "id": "ans_3", "text": "Acentuada", "description": "Peristalse acentuada visível" }
            ],
            "type": "multiple-choice",
            "info": "Observe movimentos intestinais espontâneos por pelo menos um minuto. Peristalse visível intensa pode indicar obstrução mecânica proximal, enquanto ausência pode sugerir íleo paralítico. Anote direção dos movimentos (ex.: do quadrante superior esquerdo ao inferior direito)." 
          }
        ]
      },
      "ausculta": {
        "name": "Ausculta",
        "items": [
          {
            "id": "abdome_1758130000004",
            "question": "Ruídos hidroaéreos?",
            "answers": [
              { "id": "ans_1", "text": "Normoativos", "description": "Ruídos hidroaéreos normoativos" },
              { "id": "ans_2", "text": "Hipoativos", "description": "Ruídos hidroaéreos hipoativos" },
              { "id": "ans_3", "text": "Hiperativos", "description": "Ruídos hidroaéreos hiperativos" },
              { "id": "ans_4", "text": "Ausentes", "description": "Ausência de ruídos hidroaéreos" }
            ],
            "type": "multiple-choice",
            "info": "Auscute com o diafragma do estetoscópio em cada quadrante por pelo menos 30 segundos. Classifique como normoativo (5 a 34 ruídos/min), hipoativo (<5), hiperativo (>34) ou ausente. Ruídos metálicos em salvas podem sugerir obstrução mecânica, enquanto silêncio prolongado sugere íleo paralítico ou peritonite." 
          },
          {
            "id": "abdome_1758130000005",
            "question": "Sopros vasculares?",
            "answers": [
              { "id": "ans_1", "text": "Ausentes", "description": "Ausência de sopros abdominais" },
              { "id": "ans_2", "text": "Aorta", "description": "Sopro sistólico em topografia de aorta" },
              { "id": "ans_3", "text": "Renal", "description": "Sopro em topografia das artérias renais" },
              { "id": "ans_4", "text": "Hepático", "description": "Sopro em região hepática" }
            ],
            "type": "multiple-choice",
            "info": "Auscute específicos pontos: epigástrio (aorta), 2-3 cm acima e lateral ao umbigo (artérias renais) e hipocôndrio direito (artéria hepática). Sopros sisto-diastólicos sugerem estenoses significativas; sopros contínuos podem indicar fístulas arteriovenosas. Realize com paciente em apneia inspiratória curta para reduzir ruídos de fundo." 
          }
        ]
      },
      "percussao": {
        "name": "Percussão",
        "items": [
          {
            "id": "abdome_1758130000006",
            "question": "Som predominante?",
            "answers": [
              { "id": "ans_1", "text": "Timpânico difuso", "description": "Som timpânico difuso à percussão" },
              { "id": "ans_2", "text": "Submaciço difuso", "description": "Som submaciço difuso" },
              { "id": "ans_3", "text": "Maciço em flancos", "description": "Macicez em flancos" },
              { "id": "ans_4", "text": "Timpânico central com macicez periférica", "description": "Distribuição sugestiva de ascite" }
            ],
            "type": "multiple-choice",
            "info": "Percuta todos os quadrantes com a polpa do dedo médio apoiada e golpeando com o dedo da mão dominante. Em condições normais predomina som timpânico. Macicez em flancos com timpanismo central sugere ascite; macicez localizada pode indicar massa sólida ou bexiga distendida." 
          },
          {
            "id": "abdome_1758130000007",
            "question": "Macicez móvel?",
            "answers": [
              { "id": "ans_1", "text": "Ausente", "description": "Macicez móvel ausente" },
              { "id": "ans_2", "text": "Presente", "description": "Macicez móvel detectada" }
            ],
            "type": "multiple-choice",
            "info": "Com o paciente em decúbito, percussione do umbigo aos flancos para marcar a transição timpânico-maciço. Em seguida, peça para virar-se em decúbito lateral e repita. Deslocamento da área de macicez confirma macicez móvel, altamente sugestiva de ascite com líquido livre." 
          }
        ]
      },
      "palpacao": {
        "name": "Palpação",
        "items": [
          {
            "id": "abdome_1758130000008",
            "question": "Dor à palpação superficial?",
            "answers": [
              { "id": "ans_1", "text": "Não", "description": "Sem dor à palpação superficial" },
              { "id": "ans_2", "text": "Quadrante superior direito", "description": "Dor superficial em QSD" },
              { "id": "ans_3", "text": "Quadrante inferior direito", "description": "Dor superficial em QID" },
              { "id": "ans_4", "text": "Quadrante superior esquerdo", "description": "Dor superficial em QSE" },
              { "id": "ans_5", "text": "Quadrante inferior esquerdo", "description": "Dor superficial em QIE" },
              { "id": "ans_6", "text": "Hipogástrio/mesogástrio", "description": "Dor em região hipogástrica ou mesogástrica" },
              { "id": "ans_7", "text": "Difusa", "description": "Dor superficial difusa" }
            ],
            "type": "multiple-choice",
            "info": "Palpe levemente com a mão espalmada, iniciando pelos quadrantes assintomáticos. Observe defesa voluntária, fácies de dor e localize exatamente o ponto máximo. Reforce se há hipersensibilidade cutânea ou alodínia." 
          },
          {
            "id": "abdome_1758130000009",
            "question": "Sinal de descompressão brusca (Blumberg)?",
            "answers": [
              { "id": "ans_1", "text": "Negativo", "description": "Sinal de Blumberg negativo" },
              { "id": "ans_2", "text": "Positivo", "description": "Sinal de Blumberg positivo" }
            ],
            "type": "multiple-choice",
            "info": "Com o paciente relaxado, pressione gradualmente o quadrante suspeito com a mão espalmada e mantenha por alguns segundos; libere rapidamente. Dor maior na descompressão que na compressão define positividade e sugere irritação peritoneal. Evite em abdome agudo evidente para não intensificar sofrimento." 
          },
          {
            "id": "abdome_1758130000010",
            "question": "Palpação profunda do fígado?",
            "answers": [
              { "id": "ans_1", "text": "Não palpável", "description": "Borda hepática não palpável" },
              { "id": "ans_2", "text": "Regular na borda costal", "description": "Fígado palpável, borda regular na linha hemiclavicular" },
              { "id": "ans_3", "text": "Hepatomegalia >2 cm", "description": "Hepatomegalia com borda inferior >2 cm do rebordo costal" },
              { "id": "ans_4", "text": "Borda irregular", "description": "Fígado palpável com borda irregular" }
            ],
            "type": "multiple-choice",
            "info": "Posicione a mão esquerda na região lombar direita elevando o fígado anterior. Com a mão direita plana, inicie abaixo do rebordo costal direito e peça inspiração profunda, deslizando a mão cranialmente. Note consistência, borda, sensibilidade e presença de nódulos." 
          },
          {
            "id": "abdome_1758130000011",
            "question": "Palpação do baço?",
            "answers": [
              { "id": "ans_1", "text": "Não palpável", "description": "Baço não palpável" },
              { "id": "ans_2", "text": "Pouco aumentado", "description": "Baço palpável discretamente abaixo do rebordo costal" },
              { "id": "ans_3", "text": "Esplenomegalia importante", "description": "Esplenomegalia estendendo-se a fossa ilíaca" }
            ],
            "type": "multiple-choice",
            "info": "Com o paciente em decúbito dorsal, coloque a mão direita em garra no quadrante superior esquerdo e a esquerda na região lombar contralateral para elevar o baço. Peça inspiração profunda enquanto desliza a mão cranialmente. Repita em decúbito lateral direito se necessário. Avalie consistência, borda e sensibilidade." 
          }
        ]
      }
    }
  },
  "respiratorio": {
    "id": "respiratorio",
    "name": "Sistema Respiratório",
    "description": "Exame segmentado do aparelho respiratório com foco em inspeção, ausculta, percussão e palpação.",
    "findings": {
      "inspecao": {
        "name": "Inspeção",
        "items": [
          {
            "id": "respiratorio_1758131000001",
            "question": "Padrão respiratório observado?",
            "answers": [
              { "id": "ans_1", "text": "Eupneico", "description": "Respiração eupneica, sem uso de musculatura acessória" },
              { "id": "ans_2", "text": "Taquipneico", "description": "Taquipneia com aumento da frequência" },
              { "id": "ans_3", "text": "Bradipneico", "description": "Bradipneia" },
              { "id": "ans_4", "text": "Uso de musculatura acessória", "description": "Uso visível de musculatura acessória" }
            ],
            "type": "multiple-choice",
            "info": "Observe o paciente sentado, com tórax exposto, por pelo menos um ciclo completo de respiração. Conte a frequência respiratória sem avisar o paciente e identifique uso de musculatura acessória (esternocleidomastoideos, intercostais). Registre presença de tiragens, batimento de asa de nariz ou respiração paradoxal." 
          },
          {
            "id": "respiratorio_1758131000002",
            "question": "Movimentação torácica simétrica?",
            "answers": [
              { "id": "ans_1", "text": "Sim", "description": "Expansão torácica simétrica" },
              { "id": "ans_2", "text": "Assimetria direita", "description": "Expansão reduzida à direita" },
              { "id": "ans_3", "text": "Assimetria esquerda", "description": "Expansão reduzida à esquerda" }
            ],
            "type": "multiple-choice",
            "info": "Inspecione o hemitórax anterior e posterior solicitando inspiração profunda. Assimetrias podem refletir atelectasia, derrame ou fratura de costela. Note retrações intercostais localizadas ou abaulamentos que sugiram pneumotórax hipertensivo." 
          },
          {
            "id": "respiratorio_1758131000003",
            "question": "Sinais de cianose?",
            "answers": [
              { "id": "ans_1", "text": "Ausentes", "description": "Sem cianose periférica ou central" },
              { "id": "ans_2", "text": "Perioral", "description": "Cianose perioral" },
              { "id": "ans_3", "text": "Acral", "description": "Cianose em extremidades" },
              { "id": "ans_4", "text": "Generalizada", "description": "Cianose generalizada" }
            ],
            "type": "multiple-choice",
            "info": "Avalie lábios, leito ungueal e lóbulo das orelhas sob boa iluminação. Diferencie cianose periférica (vasoconstrição) de central (hipoxemia). Associe ao contexto clínico: taquipneia, saturação periférica e coloração da pele." 
          }
        ]
      },
      "ausculta": {
        "name": "Ausculta",
        "items": [
          {
            "id": "respiratorio_1758131000004",
            "question": "Murmúrios vesiculares?",
            "answers": [
              { "id": "ans_1", "text": "Preservados", "description": "Murmúrios vesiculares preservados bilateralmente" },
              { "id": "ans_2", "text": "Diminuídos difusos", "description": "Murmúrios vesiculares globalmente diminuídos" },
              { "id": "ans_3", "text": "Abolidos localizados", "description": "Murmúrios vesiculares abolidos em região específica" }
            ],
            "type": "multiple-choice",
            "info": "Auscute com diafragma do estetoscópio em pontos simétricos (ápices, bases, regiões axilares e infraclaviculares). Compare lado a lado para detectar diminuição localizada (derrame, pneumotórax) ou difusa (DPOC grave). Peça inspirações profundas pela boca." 
          },
          {
            "id": "respiratorio_1758131000005",
            "question": "Ruídos adventícios?",
            "answers": [
              { "id": "ans_1", "text": "Ausentes", "description": "Sem ruídos adventícios" },
              { "id": "ans_2", "text": "Estertores", "description": "Estertores crepitantes audíveis" },
              { "id": "ans_3", "text": "Sibilos", "description": "Sibilos difusos" },
              { "id": "ans_4", "text": "Roncos", "description": "Roncos expiratório-inspiratórios" }
            ],
            "type": "multiple-choice",
            "info": "Caracterize ruídos adventícios conforme momento do ciclo respiratório, tonalidade e localização. Estertores finos nas bases sugerem edema ou fibrose; sibilos difusos indicam broncoespasmo; roncos podem desaparecer após tosse. Registre se melhoram com tosse ou manobras de expiração prolongada." 
          },
          {
            "id": "respiratorio_1758131000006",
            "question": "Sons vocais transmitidos?",
            "answers": [
              { "id": "ans_1", "text": "Normais", "description": "Transmissão vocal preservada" },
              { "id": "ans_2", "text": "Broncofonia", "description": "Broncofonia presente" },
              { "id": "ans_3", "text": "Pectorilóquia afônica", "description": "Pectorilóquia afônica presente" }
            ],
            "type": "multiple-choice",
            "info": "Peça ao paciente para repetir a palavra 'trinta e três' ou sussurrar 's', auscultando áreas suspeitas. Aumento da transmissão (broncofonia/pectorilóquia) sugere consolidação; diminuição indica derrame ou enfisema. Compare bilateralmente e associe aos achados de percussão." 
          }
        ]
      },
      "percussao": {
        "name": "Percussão",
        "items": [
          {
            "id": "respiratorio_1758131000007",
            "question": "Som predominante?",
            "answers": [
              { "id": "ans_1", "text": "Claro pulmonar", "description": "Som claro pulmonar difuso" },
              { "id": "ans_2", "text": "Hipertimpanismo", "description": "Hipertimpanismo em hemitórax" },
              { "id": "ans_3", "text": "Submaciço", "description": "Som submaciço localizado" },
              { "id": "ans_4", "text": "Maciço", "description": "Som maciço sugestivo de derrame" }
            ],
            "type": "multiple-choice",
            "info": "Percuta de cima para baixo comparando espaços intercostais correspondentes. Som claro pulmonar é esperado; hipertimpanismo indica hiperinsuflação ou pneumotórax, enquanto macicez aponta para consolidação ou derrame. Demarque o nível superior da macicez em derrames para seguimento." 
          }
        ]
      },
      "palpacao": {
        "name": "Palpação",
        "items": [
          {
            "id": "respiratorio_1758131000009",
            "question": "Frêmito tóraco-vocal?",
            "answers": [
              { "id": "ans_1", "text": "Simétrico", "description": "Frêmito tóraco-vocal simétrico" },
              { "id": "ans_2", "text": "Aumentado à direita", "description": "Frêmito aumentado em hemitórax direito" },
              { "id": "ans_3", "text": "Aumentado à esquerda", "description": "Frêmito aumentado em hemitórax esquerdo" },
              { "id": "ans_4", "text": "Diminuído bilateral", "description": "Frêmito globalmente diminuído" }
            ],
            "type": "multiple-choice",
            "info": "Posicione as mãos ou borda cubital sobre regiões simétricas enquanto o paciente repete 'trinta e três'. Compare intensidade; aumento sugere condensação, diminuição indica derrame, pneumotórax ou obstrução brônquica. Realize em parede posterior e lateral." 
          },
          {
            "id": "respiratorio_1758131000010",
            "question": "Expansibilidade torácica?",
            "answers": [
              { "id": "ans_1", "text": "Preservada", "description": "Expansibilidade preservada" },
              { "id": "ans_2", "text": "Reduzida à direita", "description": "Expansibilidade reduzida à direita" },
              { "id": "ans_3", "text": "Reduzida à esquerda", "description": "Expansibilidade reduzida à esquerda" }
            ],
            "type": "multiple-choice",
            "info": "Coloque polegares próximos à linha média posterior com mãos abraçando a caixa torácica. Solicite inspiração profunda e observe o afastamento dos polegares. Diferencie limitação unilateral (atelectasia, derrame) de bilateral (DPOC avançado)." 
          },
          {
            "id": "respiratorio_1758131000011",
            "question": "Dor à palpação costal?",
            "answers": [
              { "id": "ans_1", "text": "Ausente", "description": "Sem dor à palpação costal" },
              { "id": "ans_2", "text": "Localizada", "description": "Dor localizada à palpação costal" },
              { "id": "ans_3", "text": "Difusa", "description": "Dor difusa à palpação torácica" }
            ],
            "type": "multiple-choice",
            "info": "Palpe suavemente cada arco costal com polpas digitais, aumentando pressão quando necessário. Dor localizada com ponto gatilho sugere costocondrite ou fratura oculta; dor difusa associada a hiperalgesia cutânea pode ocorrer em neuropatia pós-herpética." 
          }
        ]
      }
    }
  },
  "linfonodos": {
    "id": "linfonodos",
    "name": "Avaliação de Linfonodos",
    "description": "Roteiro para inspeção e palpação sistemática das principais cadeias linfonodais.",
    "findings": {
      "inspecao": {
        "name": "Inspeção",
        "items": [
          {
            "id": "linfonodos_1758132000001",
            "question": "Aumento visível de cadeias?",
            "answers": [
              { "id": "ans_1", "text": "Não", "description": "Sem aumento visível de linfonodos" },
              { "id": "ans_2", "text": "Cervical", "description": "Aumento cervical visível" },
              { "id": "ans_3", "text": "Supraclavicular", "description": "Aumento supraclavicular visível" },
              { "id": "ans_4", "text": "Axilar", "description": "Aumento axilar visível" }
            ],
            "type": "multiple-choice",
            "info": "Observe pescoço, fossas supraclaviculares e axilas com boa iluminação. Procure abaulamentos, eritema ou lesões cutâneas que possam justificar linfonodomegalias. Registre se há sinais inflamatórios locais ou cicatrizes de procedimentos prévios." 
          }
        ]
      },
      "cervical": {
        "name": "Palpação Cervical",
        "items": [
          {
            "id": "linfonodos_1758132000002",
            "question": "Cadeias cervicais anteriores?",
            "answers": [
              { "id": "ans_1", "text": "Não palpáveis", "description": "Linfonodos cervicais anteriores não palpáveis" },
              { "id": "ans_2", "text": "Discretamente aumentados", "description": "Linfonodos cervicais anteriores discretamente aumentados" },
              { "id": "ans_3", "text": "Aumentados e dolorosos", "description": "Linfonodos cervicais anteriores aumentados e dolorosos" },
              { "id": "ans_4", "text": "Aumentados endurecidos", "description": "Linfonodos cervicais anteriores endurecidos" }
            ],
            "type": "multiple-choice",
            "info": "Palpe com a polpa dos dedos indicador e médio ao longo do músculo esternocleidomastoideo, começando no ângulo da mandíbula até a fossa supraclavicular. Avalie tamanho (<1 cm fisiológico), mobilidade, dor e consistência (elástica x pétrea)." 
          },
          {
            "id": "linfonodos_1758132000003",
            "question": "Cadeias cervicais posteriores?",
            "answers": [
              { "id": "ans_1", "text": "Não palpáveis", "description": "Linfonodos cervicais posteriores não palpáveis" },
              { "id": "ans_2", "text": "Aumentados móveis", "description": "Linfonodos cervicais posteriores aumentados e móveis" },
              { "id": "ans_3", "text": "Aumentados aderidos", "description": "Linfonodos cervicais posteriores aderidos a planos profundos" }
            ],
            "type": "multiple-choice",
            "info": "Coloque a mão na nuca, palpando com movimentos circulares sob o trapézio até a linha do cabelo. Linfonodos aderidos ou em \"cadeias\" endurecidas requerem investigação para linfoma/metástase." 
          }
        ]
      },
      "supraclavicular": {
        "name": "Palpação Supraclavicular/Axilar",
        "items": [
          {
            "id": "linfonodos_1758132000004",
            "question": "Fossa supraclavicular?",
            "answers": [
              { "id": "ans_1", "text": "Sem linfonodos", "description": "Fossa supraclavicular livre" },
              { "id": "ans_2", "text": "Nódulo direito", "description": "Linfonodo supraclavicular direito palpável" },
              { "id": "ans_3", "text": "Nódulo esquerdo (Virchow)", "description": "Linfonodo supraclavicular esquerdo palpável" }
            ],
            "type": "multiple-choice",
            "info": "Com o paciente sentado e ombros relaxados, deslize os dedos na fossa supraclavicular pedindo leve flexão anterior da cabeça. Linfonodo esquerdo endurecido (Virchow) sugere doença abdominal; o direito, tórax/pulmão." 
          },
          {
            "id": "linfonodos_1758132000005",
            "question": "Cadeias axilares?",
            "answers": [
              { "id": "ans_1", "text": "Não palpáveis", "description": "Linfonodos axilares não palpáveis" },
              { "id": "ans_2", "text": "Discretos e móveis", "description": "Linfonodos axilares discretos e móveis" },
              { "id": "ans_3", "text": "Aumentados endurecidos", "description": "Linfonodos axilares aumentados endurecidos" }
            ],
            "type": "multiple-choice",
            "info": "Com o braço do paciente em abdução leve, explore parede torácica anterior, posterior e cadeia central. Comprima o conteúdo axilar contra a parede torácica para verificar tamanho, consistência e aderência." 
          }
        ]
      },
      "inguinal": {
        "name": "Palpação Inguinal",
        "items": [
          {
            "id": "linfonodos_1758132000006",
            "question": "Linfonodos inguinais?",
            "answers": [
              { "id": "ans_1", "text": "Até 1 cm, móveis", "description": "Linfonodos inguinais fisiológicos" },
              { "id": "ans_2", "text": "Aumentados dolorosos", "description": "Linfonodos inguinais aumentados e dolorosos" },
              { "id": "ans_3", "text": "Aumentados endurecidos", "description": "Linfonodos inguinais aumentados endurecidos" }
            ],
            "type": "multiple-choice",
            "info": "Posicione o paciente em decúbito dorsal, joelhos semifletidos. Palpe a região ao longo do ligamento inguinal e triângulo de Scarpa. Diferencie linfonodomegalia reacional (dolorosa, móvel) de suspeita neoplásica (dura, aderida)." 
          }
        ]
      }
    }
  }
};