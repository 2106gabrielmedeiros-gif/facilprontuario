// ======== DADOS DE EXEMPLO (NATIVOS) ========
const scalesData = {
	"pps_1758045265186": {
      "id": "pps_1758045265186",
      "name": "Palliative Performance Scale (PPS)",
      "description": "Escala de performance paliativo.",
      "instructions": "A Escala de Performance Paliativa (PPS) é uma ferramenta utilizada para avaliar o estado funcional de pacientes em cuidados paliativos. Ela mede o declínio progressivo do paciente por meio da observação de cinco áreas principais: deambulação, atividade/evidência da doença, autocuidado, ingestão oral e nível de consciência. Para o preenchimento, avalie cada uma das cinco áreas que melhor descreve a condição atual e geral do paciente.",
      "progressive": false,
      "questions": [
        {
          "id": "pps_q_1758045315511",
          "question": "Deambulação",
          "explanation": "",
          "answers": [
            {
              "id": "ans_1758047988171_0.7238915568169247",
              "text": "Completa",
              "points": 1
            },
            {
              "id": "ans_1758047988171_0.7608651023202909",
              "text": "Reduzida",
              "points": 10000
            },
            {
              "id": "ans_1758047988171_0.9074998590098171",
              "text": "Maior parte do tempo sentado ou acamado",
              "points": 1000000
            },
            {
              "id": "ans_1758047988171_0.5209226234635277",
              "text": "Maior parte do tempo acamado",
              "points": 10000000
            },
            {
              "id": "ans_1758047988171_0.10220819298524608",
              "text": "Totalmente acamado",
              "points": 100000000
            }
          ]
        },
        {
          "id": "pps_q_1758045502541",
          "question": "Atividade e evidência da doença",
          "explanation": "",
          "answers": [
            {
              "id": "ans_1758048396107_0.9038584791459597",
              "text": "Atividade e trabalhos normais, sem evidência da doença",
              "points": 1
            },
            {
              "id": "ans_1758048396107_0.9533304019207418",
              "text": "Atividade e trabalhos normais, com alguma evidência da doença",
              "points": 100
            },
            {
              "id": "ans_1758048396107_0.9038376752575665",
              "text": "Atividade e trabalhos normais com esforço, com alguma evidência da doença",
              "points": 1000
            },
            {
              "id": "ans_1758048396107_0.9980808407683645",
              "text": "Incapaz para o trabalho, doença significativa",
              "points": 10000
            },
            {
              "id": "ans_1758048396107_0.8351359130622732",
              "text": "Incapaz para hobbies ou trabalho doméstico, doença significativa",
              "points": 100000
            },
            {
              "id": "ans_1758048396107_0.5782493046744873",
              "text": "Incapacitado para qualquer trabalho, doença extensa",
              "points": 1000000
            },
            {
              "id": "ans_1758048396107_0.6857780135694042",
              "text": "Incapaz para a maioria das atividades, doença extensa",
              "points": 10000000
            },
            {
              "id": "ans_1758048396107_0.1426087762322329",
              "text": "Incapaz para qualquer atividade, doença extensa",
              "points": 100000000
            }
          ]
        },
        {
          "id": "pps_q_1758045722860",
          "question": "Auto-cuidado",
          "explanation": "",
          "answers": [
            {
              "id": "ans_1758048440946_0.4777556589166604",
              "text": "Completo",
              "points": 1
            },
            {
              "id": "ans_1758048440946_0.922737085704993",
              "text": "Assistência ocasional",
              "points": 100000
            },
            {
              "id": "ans_1758048440946_0.4099175923154126",
              "text": "Assistência considerável",
              "points": 1000000
            },
            {
              "id": "ans_1758048440946_0.28425846065021776",
              "text": "Assistência quase completa",
              "points": 10000000
            },
            {
              "id": "ans_1758048440946_0.7499359398183238",
              "text": "Dependência completa",
              "points": 100000000
            }
          ]
        },
        {
          "id": "pps_q_1758045830130",
          "question": "Ingesta",
          "explanation": "",
          "answers": [
            {
              "id": "ans_1758048518116_0.3748514246123894",
              "text": "Normal",
              "points": 1
            },
            {
              "id": "ans_1758048518116_0.5041023944525359",
              "text": "Reduzida",
              "points": 1000
            },
            {
              "id": "ans_1758048518116_0.7389930951545696",
              "text": "Mínima a pequenos goles",
              "points": 1000000000
            },
            {
              "id": "ans_1758048518116_0.42866209969848934",
              "text": "Cuidados com a boca",
              "points": 10000000000
            }
          ]
        },
        {
          "id": "pps_q_1758045948887",
          "question": "Nível de consciência",
          "explanation": "",
          "answers": [
            {
              "id": "ans_1758048561542_0.5871835084465908",
              "text": "Completa",
              "points": 1
            },
            {
              "id": "ans_1758048561542_0.15819309073104892",
              "text": "Completa ou períodos de confusão",
              "points": 100000
            },
            {
              "id": "ans_1758048561542_0.32359909125400976",
              "text": "Completa ou sonolência com ou sem confusão",
              "points": 10000000
            },
            {
              "id": "ans_1758048561542_0.8066925649389868",
              "text": "Sonolência ou coma com ou sem confusão",
              "points": 10000000000
            }
          ]
        }
      ],
      "interpretations": [
        {
          "min": 1,
          "max": 99,
          "text": "PPS 100"
        },
        {
          "min": 100,
          "max": 999,
          "text": "PPS 90"
        },
        {
          "min": 1000,
          "max": 9999,
          "text": "PPS 80"
        },
        {
          "min": 10000,
          "max": 99999,
          "text": "PPS 70"
        },
        {
          "min": 100000,
          "max": 999999,
          "text": "PPS 60"
        },
        {
          "min": 1000000,
          "max": 9999999,
          "text": "PPS 50"
        },
        {
          "min": 10000000,
          "max": 99999999,
          "text": "PPS 40"
        },
        {
          "min": 100000000,
          "max": 999999999,
          "text": "PPS 30"
        },
        {
          "min": 1000000000,
          "max": 9999999999,
          "text": "PPS 20"
        },
        {
          "min": 10000000000,
          "max": 99999999999,
          "text": "PPS 10"
        }
      ]
    },
	    "katz_1758048788755": {
      "id": "katz_1758048788755",
      "name": "Escala de Katz",
      "description": "Avaliação de Atividades Básicas de Vida Diária",
      "instructions": "Para cada área de funcionamento a ser testada, verifique a descrição que melhor se adequa. O termo “assistência” tem a conotação de supervisão ou de auxílio direto de outra pessoa. Cada um dos seis itens da escala avalia se o indivíduo depende de outra pessoa para realizar as atividades diárias mencionadas (banho, vestir-se, uso do vaso sanitário, etc.). Deve-se apresentar as três alternativas de cada item e assinalar aquela que mais se assemelhar à condição do idoso.",
      "progressive": false,
      "questions": [
        {
          "id": "katz_q_1758048867860",
          "question": "Banho",
          "explanation": "A avaliação da atividade “banhar-se” é realizada em relação ao uso do chuveiro, da banheira e ao ato de esfregar-se em qualquer uma dessas situações. Nessa função, além do padronizado para todas as outras, também são considerados independentes os idosos que receberem algum auxílio para banhar uma parte específica do corpo, como a região dorsal ou uma das extremidades",
          "answers": [
            {
              "id": "ans_1758048867859_0.9558450685453425",
              "text": "Não recebe assistência (entra e sai do banheiro sozinho se essa é usualmente utilizada para banho).",
              "points": 0
            },
            {
              "id": "ans_1758048867859_0.016790814394157194",
              "text": "Recebe assistência no banho somente para uma parte do corpo (como costas ou uma perna)",
              "points": 0
            },
            {
              "id": "ans_1758048867860_0.8956737619386984",
              "text": "Recebe assistência no banho em mais de uma parte do corpo.",
              "points": 1
            }
          ]
        },
        {
          "id": "katz_q_1758048948239",
          "question": "Vestir",
          "explanation": "Para avaliar a função “vestir-se” considera-se o ato de pegar as roupas no armário, bem como o ato de se vestir propriamente dito. Como roupas são compreendidas roupas íntimas, roupas externas, fechos e cintos. Calçar sapatos está excluído da avaliação. A designação de dependência é dada às pessoas que recebem alguma assistência pessoal ou que permanecem parcial ou totalmente despidos",
          "answers": [
            {
              "id": "ans_1758048948239_0.9971569917458516",
              "text": "Pega as roupas e se veste completamente  sem assistência",
              "points": 0
            },
            {
              "id": "ans_1758048948239_0.46532969785150124",
              "text": "Pega as roupas e se veste sem assistência, exceto para amarrar os sapatos",
              "points": 0
            },
            {
              "id": "ans_1758048948239_0.5098112872088674",
              "text": "Recebe assistência para pegar as roupas  ou para vestir-se ou permanece parcial ou totalmente vestido.",
              "points": 1
            }
          ]
        },
        {
          "id": "katz_q_1758049061153",
          "question": "Banheiro",
          "explanation": "A função “ir ao banheiro” compreende o ato de dirigir-se ao sanitário para suas necessidades, higienizar-se e ajustar as próprias roupas. Os idosos considerados independentes podem utilizar algum equipamento ou auxílio mecânico para desempenhar a função, sem que isso altere sua classificação. Dependentes são aqueles que recebem qualquer auxílio direto de outra pessoa ou que não desempenham a função. Aqueles que utilizam urinois portáteis (“papagaios”) ou comadres também são considerados dependentes.",
          "answers": [
            {
              "id": "ans_1758049061153_0.6755693375293998",
              "text": "Vai ao banheiro, higieniza-se e se veste após as eliminações sem assistência (pode utilizar objetos de apoio, como bengala, andador, barras de apoio ou cadeira de rodas, e pode utilizar comadre ou urinol à noite, esvaziando por si mesmo pela manhã",
              "points": 0
            },
            {
              "id": "ans_1758049061153_0.5708784741980452",
              "text": "Recebe assistência para ir ao banheiro ou para higienizar-se ou para vestir-se após as eliminações ou para usar o urinol ou comadre à noite.",
              "points": 1
            },
            {
              "id": "ans_1758049061153_0.5422356967335554",
              "text": "Não vai ao banheiro para urinar ou evacuar",
              "points": 1
            }
          ]
        },
        {
          "id": "katz_q_1758049152622",
          "question": "Transferência",
          "explanation": "A função “transferência” avalia o movimento desempenhado pelo idoso para ir da cama a uma cadeira e vice-versa. Assim como na função anterior, o uso de equipamentos ou auxílio mecânico não altera a classificação de independência. São consideradas dependentes as pessoas que recebem qualquer auxílio em uma das transferências ou que não executam uma ou ambas.",
          "answers": [
            {
              "id": "ans_1758049152622_0.08982861697936317",
              "text": "Deita-se e levanta-se da cama ou da cadeira sem assistência (pode utilizar um objeto de apoio, como bengala ou andador)",
              "points": 0
            },
            {
              "id": "ans_1758049152622_0.9266671468698713",
              "text": "Deita-se e levanta-se da cama ou da cadeira com auxílio",
              "points": 1
            },
            {
              "id": "ans_1758049152622_0.5911886005730195",
              "text": "Não sai da cama",
              "points": 1
            }
          ]
        },
        {
          "id": "katz_q_1758049217158",
          "question": "Continência",
          "explanation": "Refere-se ao ato inteiramente autocontrolado de urinar ou defecar. A dependência está relacionada à presença de \nincontinência total ou parcial em qualquer das funções. Qualquer tipo de controle externo como enemas, cateterização ou uso regular de fraldas classifica a pessoa como dependente.",
          "answers": [
            {
              "id": "ans_1758049217158_0.018264471929653414",
              "text": "Controla inteiramente as funções de urinar  e evacuar",
              "points": 0
            },
            {
              "id": "ans_1758049217158_0.23859032191251472",
              "text": "Tem “acidentes” ocasionais = perdas urinárias ou fecais",
              "points": 1
            },
            {
              "id": "ans_1758049217158_0.3307920010237215",
              "text": "Precisa de ajuda para manter o controle da micção e da evacuação; usa cateter ou é incontinente",
              "points": 1
            }
          ]
        },
        {
          "id": "katz_q_1758049280765",
          "question": "Alimentação",
          "explanation": "Relaciona-se ao ato de dirigir a comida do prato (ou similar) à boca. O ato de cortar alimentos ou prepará-los está excluído da avaliação. “Dependentes” são as pessoas que recebem qualquer ajuda — aqueles que não se alimentam sem ajuda ou que utilizam sondas para se alimentar são considerados “dependentes”",
          "answers": [
            {
              "id": "ans_1758049280765_0.14612630606681754",
              "text": "Alimenta-se sem ajuda",
              "points": 0
            },
            {
              "id": "ans_1758049280765_0.6830764855701622",
              "text": "Alimenta-se sozinho, mas recebe ajuda para  cortar carne ou passar manteiga no pão",
              "points": 0
            },
            {
              "id": "ans_1758049280765_0.9459375709377734",
              "text": "Recebe ajuda para alimentar-se, ou é alimentado parcialmente ou completamente pelo uso de cateteres ou fluídos intravenosos",
              "points": 1
            }
          ]
        }
      ],
      "interpretations": [
        {
          "min": 0,
          "max": 0,
          "text": "Totalmente independente"
        },
        {
          "min": 1,
          "max": 1,
          "text": "Independente em cinco funções e dependente em uma função"
        },
        {
          "min": 2,
          "max": 2,
          "text": "Independente em quatro funções e dependente em duas funções"
        },
        {
          "min": 3,
          "max": 3,
          "text": "Independente em três funções e dependente em três funções"
        },
        {
          "min": 4,
          "max": 4,
          "text": "Independente em duas funções e dependente em quatro funções"
        },
        {
          "min": 5,
          "max": 5,
          "text": "Independente em uma função e dependente em cinco funções"
        },
        {
          "min": 6,
          "max": 6,
          "text": "Totalmente dependente"
        }
      ]
    },
	    "lawton_1758049593345": {
      "id": "lawton_1758049593345",
      "name": "Escala de Lawton",
      "description": "Avaliação de Atividades Instrumentais de Vida Diária",
      "instructions": "A Escala de Lawton e Brody avalia a independência do indivíduo na realização das Atividades Instrumentais de Vida Diária (AIVDs), que são mais complexas e necessárias para viver de forma autônoma na comunidade. As atividades incluem usar o telefone, fazer compras, preparar refeições, cuidar da casa, lavar roupas, usar meios de transporte, gerenciar medicamentos e finanças. Para o preenchimento, questione o paciente ou cuidador sobre a capacidade de realizar cada tarefa, pontuando de acordo com o nível de independência (geralmente de 0 a 3), para obter um escore total que reflete sua autonomia funcional.",
      "progressive": false,
      "questions": [
        {
          "id": "lawton_q_1758049636183",
          "question": "O(a) Sr(a) consegue usar o telefone?",
          "explanation": "",
          "answers": [
            {
              "id": "ans_1758049636182_0.4517268162792286",
              "text": "Sem ajuda",
              "points": 3
            },
            {
              "id": "ans_1758049636183_0.029133025079626895",
              "text": "Com ajuda parcial",
              "points": 2
            },
            {
              "id": "ans_1758049636183_0.5519555777388148",
              "text": "Não consegue",
              "points": 1
            }
          ]
        },
        {
          "id": "lawton_q_1758049664200",
          "question": "O(a) Sr(a) consegue ir a locais distantes, usando algum transporte,  sem necessidade de planejamentos especiais?",
          "explanation": "",
          "answers": [
            {
              "id": "ans_1758049664200_0.7503149854844035",
              "text": "Sem ajuda",
              "points": 3
            },
            {
              "id": "ans_1758049664200_0.3604140361356929",
              "text": "Com ajuda",
              "points": 2
            },
            {
              "id": "ans_1758049664200_0.2407214202959962",
              "text": "Não consegue",
              "points": 1
            }
          ]
        },
        {
          "id": "lawton_q_1758049685912",
          "question": "O(a) Sr(a) consegue fazer compras?",
          "explanation": "",
          "answers": [
            {
              "id": "ans_1758049685912_0.4748711699120043",
              "text": "Sem ajuda",
              "points": 3
            },
            {
              "id": "ans_1758049685912_0.05267218195704948",
              "text": "Com ajuda",
              "points": 2
            },
            {
              "id": "ans_1758049685912_0.4746217790128554",
              "text": "Não consegue",
              "points": 1
            }
          ]
        },
        {
          "id": "lawton_q_1758049707636",
          "question": "O(a) Sr(a) consegue preparar suas próprias refeições?",
          "explanation": "",
          "answers": [
            {
              "id": "ans_1758049707636_0.8756030299055322",
              "text": "Sem ajuda",
              "points": 3
            },
            {
              "id": "ans_1758049707636_0.7351905282456213",
              "text": "Com ajuda",
              "points": 2
            },
            {
              "id": "ans_1758049707636_0.42796411440547744",
              "text": "Não consegue",
              "points": 1
            }
          ]
        },
        {
          "id": "lawton_q_1758049730726",
          "question": "O(a) Sr(a) consegue arrumar a casa?",
          "explanation": "",
          "answers": [
            {
              "id": "ans_1758049730726_0.8298178938364834",
              "text": "Sem ajuda",
              "points": 3
            },
            {
              "id": "ans_1758049730726_0.5226233285702963",
              "text": "Com ajuda",
              "points": 2
            },
            {
              "id": "ans_1758049730726_0.34506082997829823",
              "text": "Não consegue",
              "points": 1
            }
          ]
        },
        {
          "id": "lawton_q_1758049786640",
          "question": "O(a) Sr(a) consegue fazer trabalhos manuais domésticos, como pequenos reparos?",
          "explanation": "",
          "answers": [
            {
              "id": "ans_1758049786640_0.37777909504259655",
              "text": "Sem ajuda",
              "points": 3
            },
            {
              "id": "ans_1758049786640_0.04737117363277865",
              "text": "Com ajuda",
              "points": 2
            },
            {
              "id": "ans_1758049786640_0.6471028072957437",
              "text": "Não consegue",
              "points": 1
            }
          ]
        },
        {
          "id": "lawton_q_1758049807941",
          "question": "O(a) Sr(a) consegue lavar e passar sua roupa?",
          "explanation": "",
          "answers": [
            {
              "id": "ans_1758049807940_0.3617367693560779",
              "text": "Sem ajuda",
              "points": 3
            },
            {
              "id": "ans_1758049807940_0.16460213953065272",
              "text": "Com ajuda",
              "points": 2
            },
            {
              "id": "ans_1758049807940_0.7360533228281593",
              "text": "Não consegue",
              "points": 1
            }
          ]
        },
        {
          "id": "lawton_q_1758049829605",
          "question": "O(a) Sr(a) consegue tomar seus remédios na dose e horários corretos?",
          "explanation": "",
          "answers": [
            {
              "id": "ans_1758049829605_0.25657890359034197",
              "text": "Sem ajuda",
              "points": 3
            },
            {
              "id": "ans_1758049829605_0.5202390518621074",
              "text": "Com ajuda",
              "points": 2
            },
            {
              "id": "ans_1758049829605_0.8570851236159527",
              "text": "Não consegue",
              "points": 1
            }
          ]
        },
        {
          "id": "lawton_q_1758049851910",
          "question": "O(a) Sr(a) consegue cuidar de suas finanças?",
          "explanation": "",
          "answers": [
            {
              "id": "ans_1758049851910_0.6758751809857432",
              "text": "Sem ajuda",
              "points": 3
            },
            {
              "id": "ans_1758049851910_0.2869459684492932",
              "text": "Com ajuda",
              "points": 2
            },
            {
              "id": "ans_1758049851910_0.7092842244905531",
              "text": "Não consegue",
              "points": 1
            }
          ]
        }
      ],
      "interpretations": [
        {
          "min": 1,
          "max": 9,
          "text": "Totalmente dependente para AIVD"
        },
        {
          "min": 10,
          "max": 15,
          "text": "Dependência grave para AIVD"
        },
        {
          "min": 16,
          "max": 20,
          "text": "Dependência moderada para AIVD"
        },
        {
          "min": 21,
          "max": 25,
          "text": "Dependência leve para AIVD"
        },
        {
          "min": 26,
          "max": 27,
          "text": "Independente para AIVD"
        }
      ]
    },
	 "kps_1758050048515": {
      "id": "kps_1758050048515",
      "name": "Karnofsky Paliative Scale (KPS)",
      "description": "Escala de funcionalidade",
      "instructions": "A Escala de Performance de Karnofsky (KPS) é um método para quantificar a capacidade funcional geral de um paciente, sendo amplamente utilizada em oncologia para avaliar o impacto da doença no seu dia a dia. A escala varia de 100% (normal, sem queixas) a 0% (óbito).",
      "progressive": true,
      "questions": [
        {
          "id": "kps_q_1758050073181",
          "question": "Normal, nenhuma queixa, nenhuma evidência de doença (KPS 100)",
          "explanation": "",
          "answers": [
            {
              "id": "ans_1758050235910_0.8541952775441201",
              "text": "Sim",
              "points": 1
            },
            {
              "id": "ans_1758050235910_0.01531385433764898",
              "text": "Não",
              "points": 0
            }
          ]
        },
        {
          "id": "kps_q_1758050114102",
          "question": "Capaz de continuar atividade normal, pequenos sintomas? (KPS 90)",
          "explanation": "",
          "answers": [
            {
              "id": "ans_1758050114102_0.8058407427870155",
              "text": "Sim",
              "points": 1
            },
            {
              "id": "ans_1758050114102_0.41171966713338815",
              "text": "Não",
              "points": 0
            }
          ]
        },
        {
          "id": "kps_q_1758050264211",
          "question": "Atividade normal com esforço, alguns sintomas (KPS 80)",
          "explanation": "",
          "answers": [
            {
              "id": "ans_1758050264211_0.33003408332729656",
              "text": "Sim",
              "points": 1
            },
            {
              "id": "ans_1758050264211_0.07003799382198117",
              "text": "Não",
              "points": 0
            }
          ]
        },
        {
          "id": "kps_q_1758050445489",
          "question": "Cuidados para si, incapaz de continuar sua atividade normal? (KPS 70)",
          "explanation": "",
          "answers": [
            {
              "id": "ans_1758050445489_0.7333345221277933",
              "text": "Sim",
              "points": 1
            },
            {
              "id": "ans_1758050445489_0.40612489051249756",
              "text": "Não",
              "points": 0
            }
          ]
        },
        {
          "id": "kps_q_1758050458835",
          "question": "Requer ajuda ocasional, cuidados para as maiorias das necessidades? (KPS 60)",
          "explanation": "",
          "answers": [
            {
              "id": "ans_1758050458835_0.7510284316068312",
              "text": "Sim",
              "points": 1
            },
            {
              "id": "ans_1758050458835_0.3226083466480334",
              "text": "Não",
              "points": 0
            }
          ]
        },
        {
          "id": "kps_q_1758050477267",
          "question": "Requer ajuda considerável e cuidado frequente? (KPS 50)",
          "explanation": "",
          "answers": [
            {
              "id": "ans_1758050477267_0.8480525369752898",
              "text": "Sim",
              "points": 1
            },
            {
              "id": "ans_1758050477267_0.2951810062499124",
              "text": "Não",
              "points": 0
            }
          ]
        },
        {
          "id": "kps_q_1758050493055",
          "question": "Incapacitado, requer cuidado especial e ajuda? (KPS 40)",
          "explanation": "",
          "answers": [
            {
              "id": "ans_1758050493055_0.67766311762192",
              "text": "Sim",
              "points": 1
            },
            {
              "id": "ans_1758050493055_0.2728607222414886",
              "text": "Não",
              "points": 0
            }
          ]
        },
        {
          "id": "kps_q_1758050507157",
          "question": "Severamente incapacitado, hospitalizado, morte não iminente? (KPS 30)",
          "explanation": "",
          "answers": [
            {
              "id": "ans_1758050507157_0.5132557655554825",
              "text": "Sim",
              "points": 1
            },
            {
              "id": "ans_1758050507157_0.9375572459487849",
              "text": "Não",
              "points": 0
            }
          ]
        },
        {
          "id": "kps_q_1758050530912",
          "question": "Muito doente, precisa de cuidado intensivo? (KPS 20)",
          "explanation": "",
          "answers": [
            {
              "id": "ans_1758050530912_0.8259881288189949",
              "text": "Sim",
              "points": 1
            },
            {
              "id": "ans_1758050530912_0.4342831728809686",
              "text": "Não",
              "points": 0
            }
          ]
        },
        {
          "id": "kps_q_1758050544175",
          "question": "Moribundo, processo de fatalidade progredindo rapidamente? (KPS 10)",
          "explanation": "",
          "answers": [
            {
              "id": "ans_1758050544175_0.026117769508591904",
              "text": "Sim",
              "points": 1
            },
            {
              "id": "ans_1758050544175_0.4287172575765733",
              "text": "Não",
              "points": 0
            }
          ]
        }
      ],
      "interpretations": []
    },
	"ppi_1758051671790": {
      "id": "ppi_1758051671790",
      "name": "Palliative Prognostic Index (PPI)",
      "description": "O PPI prevê a sobrevida em pacientes oncológicos terminais baseado no PPS",
      "instructions": "O Índice Prognóstico Paliativo (PPI) é uma ferramenta utilizada para estimar a sobrevida de pacientes com câncer em fase terminal, auxiliando na tomada de decisões clínicas e no planejamento de cuidados. Para o seu cálculo, é necessário avaliar e pontuar cinco critérios: a pontuação na Escala de Performance Paliativa (PPS), a ingestão oral, e a presença de edema, dispneia em repouso e delirium.",
      "progressive": false,
      "questions": [
        {
          "id": "ppi_q_1758051769222",
          "question": "Score PPS",
          "explanation": "",
          "answers": [
            {
              "id": "ans_1758052074630_0.3295242919787892",
              "text": "10-20",
              "points": 4
            },
            {
              "id": "ans_1758052074630_0.9567246627190861",
              "text": "30-50",
              "points": 2.5
            },
            {
              "id": "ans_1758052074630_0.8768350187607336",
              "text": "≥60",
              "points": 0
            }
          ]
        },
        {
          "id": "ppi_q_1758052069029",
          "question": "Ingesta oral",
          "explanation": "",
          "answers": [
            {
              "id": "ans_1758052069029_0.2766220900684546",
              "text": "Mínima ou pequenos goles",
              "points": 2.5
            },
            {
              "id": "ans_1758052069029_0.7523929457665267",
              "text": "Reduzida, mas engole",
              "points": 1
            },
            {
              "id": "ans_1758052069029_0.5327744550009856",
              "text": "Normal",
              "points": 0
            }
          ]
        },
        {
          "id": "ppi_q_1758052087264",
          "question": "Edema",
          "explanation": "",
          "answers": [
            {
              "id": "ans_1758052087264_0.17048767172437962",
              "text": "Presente",
              "points": 1
            },
            {
              "id": "ans_1758052087264_0.350367375847087",
              "text": "Ausente",
              "points": 0
            }
          ]
        },
        {
          "id": "ppi_q_1758052108528",
          "question": "Dispneia em repouso",
          "explanation": "",
          "answers": [
            {
              "id": "ans_1758052108528_0.12680903933152532",
              "text": "Presente",
              "points": 3.5
            },
            {
              "id": "ans_1758052108528_0.2233584229417993",
              "text": "Ausente",
              "points": 0
            }
          ]
        },
        {
          "id": "ppi_q_1758052125048",
          "question": "Delirium",
          "explanation": "",
          "answers": [
            {
              "id": "ans_1758052125048_0.45738904751479736",
              "text": "Presente",
              "points": 4
            },
            {
              "id": "ans_1758052125048_0.5118908654878266",
              "text": "Ausente",
              "points": 0
            }
          ]
        }
      ],
      "interpretations": [
        {
          "min": 0,
          "max": 4,
          "text": "PPI ≤ 4, sobrevida maior que 6 semanas"
        },
        {
          "min": 4.1,
          "max": 6,
          "text": "PPI >4 e <6 , sobrevida menor que 6 semanas"
        },
        {
          "min": 6.1,
          "max": 1000,
          "text": "PPI >6, sobrevida menor que 3 semanas"
        }
      ]
    },
	"ecog_1758052510869": {
      "id": "ecog_1758052510869",
      "name": "Eastern Cooperative Oncology Group (ECOG)",
      "description": "Escala de Performance",
      "instructions": "A escala de performance ECOG é uma das ferramentas mais utilizadas em oncologia para avaliar como a doença afeta as capacidades de vida diária do paciente, sendo crucial para determinar a elegibilidade para tratamentos e ensaios clínicos. A escala vai de 0 (totalmente ativo) a 5 (óbito). Para o preenchimento, selecione o único número que melhor corresponde ao nível atual de funcionalidade do paciente, com base em sua capacidade de deambulação e de realizar o autocuidado.",
      "progressive": true,
      "questions": [
        {
          "id": "ecog_q_1758052566051",
          "question": "ECOG 0 – Completamente ativo, capaz de realizar todas as suas atividades sem restrição (Karnofsky 90 – 100%)",
          "explanation": "",
          "answers": [
            {
              "id": "ans_1758052566051_0.45538133502044376",
              "text": "Sim",
              "points": 1
            },
            {
              "id": "ans_1758052566051_0.6990859831852259",
              "text": "Não",
              "points": 0
            }
          ]
        },
        {
          "id": "ecog_q_1758052587089",
          "question": "ECOG 1 – Restrição a atividades físicas rigorosas, é capaz de trabalhos leves e de natureza sedentária  (Karnofsky 70 – 80%)",
          "explanation": "",
          "answers": [
            {
              "id": "ans_1758052593988_0.4615982091217211",
              "text": "Sim",
              "points": 1
            },
            {
              "id": "ans_1758052593988_0.7407849895021266",
              "text": "Não",
              "points": 0
            }
          ]
        },
        {
          "id": "ecog_q_1758052609638",
          "question": "ECOG  2 – Capaz de realizar todos os auto-cuidados, mas incapaz de realizar qualquer atividade de trabalho;  em pé aproximadamente 50% das horas em que o paciente está acordado (Karnofsky 50 – 60%)",
          "explanation": "",
          "answers": [
            {
              "id": "ans_1758052609638_0.0511927337316499",
              "text": "Sim",
              "points": 1
            },
            {
              "id": "ans_1758052609638_0.10414381795193073",
              "text": "Não",
              "points": 0
            }
          ]
        },
        {
          "id": "ecog_q_1758052627139",
          "question": "ECOG  3 – Capaz de realizar somente auto-cuidados limitados, confinado ao leito ou cadeira mais de 50% das  horas em que o paciente está acordado (Karnofsky  30 – 40%)",
          "explanation": "",
          "answers": [
            {
              "id": "ans_1758052627139_0.9651666733679943",
              "text": "Sim",
              "points": 1
            },
            {
              "id": "ans_1758052627139_0.359308446888172",
              "text": "Não",
              "points": 0
            }
          ]
        },
        {
          "id": "ecog_q_1758052639208",
          "question": "ECOG  4 – Completamente incapaz de realizar auto-cuidados básico, totalmente confinado ao leito e à cadeira  (Karnofsky < 30%)",
          "explanation": "",
          "answers": [
            {
              "id": "ans_1758052639208_0.59707179116855",
              "text": "Sim",
              "points": 1
            },
            {
              "id": "ans_1758052639208_0.11982463186475223",
              "text": "Não",
              "points": 0
            }
          ]
        }
      ],
      "interpretations": []
    },
	 "rankin_1758052845868": {
      "id": "rankin_1758052845868",
      "name": "Escala de Rankin",
      "description": "Escala de Rankin",
      "instructions": "A Escala de Rankin é utilizada principalmente para medir o grau de incapacidade ou dependência nas atividades diárias de pacientes que sofreram um acidente vascular cerebral (AVC) ou outra condição neurológica. A escala vai de 0 (sem sintomas) a 6 (óbito). Para preencher, avalie a condição geral do paciente em relação às suas atividades cotidianas e selecione o grau na escala que melhor descreve seu nível de independência e funcionalidade.",
      "progressive": true,
      "questions": [
        {
          "id": "rankin_q_1758052860603",
          "question": "Rankin 0 - Sem sintomas",
          "explanation": "",
          "answers": [
            {
              "id": "ans_1758052860603_0.8349007758245952",
              "text": "Sim",
              "points": 1
            },
            {
              "id": "ans_1758052860603_0.9010447476655867",
              "text": "Não",
              "points": 0
            }
          ]
        },
        {
          "id": "rankin_q_1758052871701",
          "question": "Rankin 1 - Nenhuma incampacidade significativa: a despeito dos sintomas; capaz de conduzir todos os deveres e as atividades habituais",
          "explanation": "",
          "answers": [
            {
              "id": "ans_1758052871701_0.9264647803393227",
              "text": "Sim",
              "points": 1
            },
            {
              "id": "ans_1758052871701_0.32745615780409787",
              "text": "Não",
              "points": 0
            }
          ]
        },
        {
          "id": "rankin_q_1758052882069",
          "question": "Rankin 2 - Leve incapacidade: incapaz de realizar todas as atividades prévias, porém é independente para os cuidados pessoais",
          "explanation": "",
          "answers": [
            {
              "id": "ans_1758052882069_0.5248314405978652",
              "text": "Sim",
              "points": 1
            },
            {
              "id": "ans_1758052882069_0.7618011341155297",
              "text": "Não",
              "points": 0
            }
          ]
        },
        {
          "id": "rankin_q_1758052901420",
          "question": "Rankin 3 - Incapacidade moderada: requer alguma ajuda, mas é capaz de caminhar sem assistência (pode usar bengala ou andador)",
          "explanation": "",
          "answers": [
            {
              "id": "ans_1758052901420_0.2266899940264312",
              "text": "Sim",
              "points": 1
            },
            {
              "id": "ans_1758052901420_0.0763763089201287",
              "text": "Não",
              "points": 0
            }
          ]
        },
        {
          "id": "rankin_q_1758052914939",
          "question": "Rankin 4 - Incapacidade moderadamente severa: incapaz de caminhar sem assistência e incapaz de atender às próprias necessidades fisiológicas sem assistência.",
          "explanation": "",
          "answers": [
            {
              "id": "ans_1758052914939_0.8774469835433826",
              "text": "Sim",
              "points": 1
            },
            {
              "id": "ans_1758052914939_0.11775421213020953",
              "text": "Não",
              "points": 0
            }
          ]
        },
        {
          "id": "rankin_q_1758052932673",
          "question": "Rankin 5 - Deficiência grave: confinado à cama, incontinente, requerendo cuidados e atenção constante de enfermagem",
          "explanation": "",
          "answers": [
            {
              "id": "ans_1758052932673_0.7883330841235887",
              "text": "Sim",
              "points": 1
            },
            {
              "id": "ans_1758052932673_0.9111587101156715",
              "text": "Não",
              "points": 0
            }
          ]
        },
        {
          "id": "rankin_q_1758052943937",
          "question": "Rankin 6 - Óbito",
          "explanation": "",
          "answers": [
            {
              "id": "ans_1758052943937_0.6794169608034897",
              "text": "Sim",
              "points": 1
            },
            {
              "id": "ans_1758052943937_0.27038991525400813",
              "text": "Não",
              "points": 0
            }
          ]
        }
      ],
      "interpretations": []
    },
	"coelhosavassi_1758053052794": {
      "id": "coelhosavassi_1758053052794",
      "name": "Escala de Coelho-Savassi",
      "description": "Instrumento de estratificação familiar",
      "instructions": "A Escala de Risco Familiar de Coelho e Savassi é um instrumento de estratificação utilizado na Atenção Primária à Saúde para classificar as famílias em graus de risco social e de saúde, permitindo o planejamento de ações e a priorização do cuidado. O preenchimento é realizado pela equipe de saúde com base em dados coletados em cadastros (como a Ficha A do SIAB/e-SUS), visitas domiciliares e observações da rotina familiar. Pontuam-se diversos indicadores de risco e, ao final, a soma dos pontos classifica a família em baixo, médio ou alto risco.",
      "progressive": false,
      "questions": [
        {
          "id": "coelhosavassi_q_1758053545623",
          "question": "No domicílio, há paciente acamado?",
          "explanation": "Toda pessoa restrita ao seu domicílio, por falta de habilidade e/ou \nincapacidade de locomoção por si só a qualquer unidade de saúde",
          "answers": [
            {
              "id": "ans_1758053565806_0.7131779126866268",
              "text": "Sim",
              "points": 3
            },
            {
              "id": "ans_1758053565806_0.9730990477023324",
              "text": "Não",
              "points": 0
            }
          ]
        },
        {
          "id": "coelhosavassi_q_1758053584955",
          "question": "No domicílio, há paciente com deficiência física?",
          "explanation": "Defeito ou condição física de longa duração ou permanente,  \nque dificulta ou impede a realização de determinadas atividades \ncotidianas, escolares, de trabalho ou de lazer",
          "answers": [
            {
              "id": "ans_1758053625042_0.351632490926186",
              "text": "Sim",
              "points": 3
            },
            {
              "id": "ans_1758053625042_0.2387749011796152",
              "text": "Não",
              "points": 0
            }
          ]
        },
        {
          "id": "coelhosavassi_q_1758053610441",
          "question": "No domicílio, há paciente com deficiência mental?",
          "explanation": "Defeito ou condição mental de longa duração ou permanente,  que dificulta ou impede a realização de determinadas atividades cotidianas, escolares, de trabalho ou de lazer",
          "answers": [
            {
              "id": "ans_1758053610441_0.08851515741288596",
              "text": "Sim",
              "points": 3
            },
            {
              "id": "ans_1758053610441_0.4255801163074756",
              "text": "Não",
              "points": 0
            }
          ]
        },
        {
          "id": "coelhosavassi_q_1758053656578",
          "question": "No domicílio, há baixas condições de saneamento?",
          "explanation": "Saneamento implica no controle dos fatores do meio físico do homem,  \nque podem exercer efeitos prejudiciais à sua saúde",
          "answers": [
            {
              "id": "ans_1758053656578_0.7057509215245007",
              "text": "Sim",
              "points": 3
            },
            {
              "id": "ans_1758053656578_0.2619812239958804",
              "text": "Não",
              "points": 0
            }
          ]
        },
        {
          "id": "coelhosavassi_q_1758053679344",
          "question": "No domicílio, há paciente com desnutrição grave?",
          "explanation": "Percentil menor que 0,1 e peso muito baixo para a idade",
          "answers": [
            {
              "id": "ans_1758053679344_0.9102108621715086",
              "text": "Sim",
              "points": 3
            },
            {
              "id": "ans_1758053679344_0.29873036147072674",
              "text": "Não",
              "points": 0
            }
          ]
        },
        {
          "id": "coelhosavassi_q_1758053703964",
          "question": "No domicílio, há paciente com drogadição?",
          "explanation": "Utilização compulsiva de drogas lícitas ou ilícitas, que apresentem \npotencial para causar dependência química (álcool, tabaco, \nbenzodiazepínicos, barbitúricos e drogas ilícitas)",
          "answers": [
            {
              "id": "ans_1758053703964_0.8066651131881282",
              "text": "Sim",
              "points": 2
            },
            {
              "id": "ans_1758053703964_0.9954798799872767",
              "text": "Não",
              "points": 0
            }
          ]
        },
        {
          "id": "coelhosavassi_q_1758053723847",
          "question": "No domicílio, há paciente em situação de desemprego?",
          "explanation": "Situação na qual a pessoa não esteja exercendo nenhuma ocupação  \n(não incluir na avaliação férias, licenças ou afastamentos temporários).  \nA realização de tarefas domésticas é considerada ocupação  \n(trabalho doméstico), mesmo que não seja remunerado",
          "answers": [
            {
              "id": "ans_1758053766407_0.18774063692516418",
              "text": "Sim",
              "points": 2
            },
            {
              "id": "ans_1758053766407_0.6569433778946246",
              "text": "Não",
              "points": 0
            }
          ]
        },
        {
          "id": "coelhosavassi_q_1758053750881",
          "question": "No domicílio, há paciente em situação de analfabetismo?",
          "explanation": "Pessoa que, a partir da idade escolar, não sabe ler nem escrever no  \nmínimo um bilhete, e/ou que sabe apenas assinar o nome",
          "answers": [
            {
              "id": "ans_1758053750881_0.7913537921821817",
              "text": "Sim",
              "points": 1
            },
            {
              "id": "ans_1758053750881_0.3799608009644112",
              "text": "Não",
              "points": 0
            }
          ]
        },
        {
          "id": "coelhosavassi_q_1758053823021",
          "question": "No domicílio, há paciente com menos de 6 meses de idade?",
          "explanation": "Lactente com idade até 5 meses e 29 dias",
          "answers": [
            {
              "id": "ans_1758053823021_0.6233915414752033",
              "text": "Sim",
              "points": 1
            },
            {
              "id": "ans_1758053823021_0.6846254584240845",
              "text": "Não",
              "points": 0
            }
          ]
        },
        {
          "id": "coelhosavassi_q_1758053843902",
          "question": "No domicílio, há paciente com mais de 70 anos de idade?",
          "explanation": "Toda pessoa com mais de 70 anos completos",
          "answers": [
            {
              "id": "ans_1758053843902_0.03005829052737552",
              "text": "Sim",
              "points": 1
            },
            {
              "id": "ans_1758053843902_0.21415419789423207",
              "text": "Não",
              "points": 0
            }
          ]
        },
        {
          "id": "coelhosavassi_q_1758053870104",
          "question": "No domicílio, há paciente portador de Hipertensão Arterial Sistêmica?",
          "explanation": "Pressão arterial sistólica maior ou igual a 140mmHg e pressão arterial \ndiastólica maior ou igual a 90mmHg, em indivíduos que não usam \nmedicação anti-hipertensiva",
          "answers": [
            {
              "id": "ans_1758053870104_0.14880026479107578",
              "text": "Sim",
              "points": 1
            },
            {
              "id": "ans_1758053870104_0.08871746363582711",
              "text": "Não",
              "points": 0
            }
          ]
        },
        {
          "id": "coelhosavassi_q_1758053909623",
          "question": "No domicílio, há portador de Diabetes Mellitus?",
          "explanation": "Grupo de doenças metabólicas caracterizadas por hiperglicemia e \nassociadas a complicações, disfunções e insuficiência de vários órgãos",
          "answers": [
            {
              "id": "ans_1758053909623_0.7339050226162085",
              "text": "Sim",
              "points": 1
            },
            {
              "id": "ans_1758053909623_0.7470927322686813",
              "text": "Não",
              "points": 0
            }
          ]
        },
        {
          "id": "coelhosavassi_q_1758053953206",
          "question": "Qual é a relação morador/cômodo do domicílio?",
          "explanation": "Número de cômodos na residência dividido pelo número de moradores \ndo domicílio. São considerados cômodos todos os compartimentos \nintegrantes do domicílio, inclusive banheiro e cozinha, separados por \nparedes, e os existentes na parte externa do prédio, desde que constituam \nparte integrante do domicílio, com exceção de corredores, alpendres, \nvarandas abertas, garagens, depósitos",
          "answers": [
            {
              "id": "ans_1758053953206_0.8986171347415601",
              "text": ">1",
              "points": 3
            },
            {
              "id": "ans_1758053953206_0.5797934295401809",
              "text": "Igual a 1",
              "points": 2
            },
            {
              "id": "ans_1758053953206_0.6967407168034667",
              "text": "<1",
              "points": 1
            }
          ]
        }
      ],
      "interpretations": [
        {
          "min": 5,
          "max": 6,
          "text": "R1 - Risco menor"
        },
        {
          "min": 7,
          "max": 8,
          "text": "R2 - Risco médio"
        },
        {
          "min": 9,
          "max": 1000,
          "text": "R3 - Risco máximo"
        }
      ]
    },
	"pinheirofiuza_1758054318937": {
      "id": "pinheirofiuza_1758054318937",
      "name": "Pinheiro e Fiuza",
      "description": "Escala para classificação de risco e vulnerabilidade clínica para pacientes em visita domiciliar na APS",
      "instructions": "",
      "progressive": false,
      "questions": [
        {
          "id": "pinheirofiuza_q_1758054438634",
          "question": "Idade",
          "explanation": "",
          "answers": [
            {
              "id": "ans_1758054520204_0.735954894960851",
              "text": "75 a 84 anos",
              "points": 1
            },
            {
              "id": "ans_1758054520204_0.6549187985553153",
              "text": ">85 anos",
              "points": 2
            },
            {
              "id": "ans_1758054520204_0.6841308720985831",
              "text": "Não pontua",
              "points": 0
            }
          ]
        },
        {
          "id": "pinheirofiuza_q_1758054486286",
          "question": "Multimorbidade",
          "explanation": "",
          "answers": [
            {
              "id": "ans_1758054526821_0.6708980366603071",
              "text": "Nº de comorbidades ≥5",
              "points": 2
            },
            {
              "id": "ans_1758054526821_0.7483424819358165",
              "text": "Descompensação clínica",
              "points": 5
            },
            {
              "id": "ans_1758054526821_0.45279114310451096",
              "text": "Não pontua",
              "points": 0
            }
          ]
        },
        {
          "id": "pinheirofiuza_q_1758054512006",
          "question": "Polifármacia",
          "explanation": "",
          "answers": [
            {
              "id": "ans_1758054534288_0.18228386474038671",
              "text": "Nº de medicamentos (≥ 5)",
              "points": 2
            },
            {
              "id": "ans_1758054534289_0.5530096072800319",
              "text": "Não pontua",
              "points": 0
            }
          ]
        },
        {
          "id": "pinheirofiuza_q_1758054570256",
          "question": "Dependência funcional",
          "explanation": "",
          "answers": [
            {
              "id": "ans_1758054570256_0.5688070294657573",
              "text": "AVDs instrumentais",
              "points": 1
            },
            {
              "id": "ans_1758054570256_0.6989243844944093",
              "text": "AVDs básicas e instrumentais",
              "points": 2
            },
            {
              "id": "ans_1758054570256_0.23163999255701107",
              "text": "Sem dependência",
              "points": 0
            }
          ]
        },
        {
          "id": "pinheirofiuza_q_1758054619694",
          "question": "Mobilidade",
          "explanation": "",
          "answers": [
            {
              "id": "ans_1758054619694_0.05807227245145963",
              "text": "Dificuldade de marcha",
              "points": 1
            },
            {
              "id": "ans_1758054619694_0.34909611046776357",
              "text": "Risco de queda",
              "points": 2
            },
            {
              "id": "ans_1758054619694_0.3072142718123998",
              "text": "Acamado",
              "points": 3
            },
            {
              "id": "ans_1758054619694_0.16735592352797457",
              "text": "Sem dificuldades",
              "points": 0
            }
          ]
        },
        {
          "id": "pinheirofiuza_q_1758054686278",
          "question": "Suporte familiar",
          "explanation": "",
          "answers": [
            {
              "id": "ans_1758054686278_0.9193762015461387",
              "text": "Disfunção familiar",
              "points": 1
            },
            {
              "id": "ans_1758054686278_0.6959335150372218",
              "text": "Sobrecarga do cuidador",
              "points": 1
            },
            {
              "id": "ans_1758054686278_0.20319502681415502",
              "text": "Suporte adequado",
              "points": 0
            }
          ]
        },
        {
          "id": "pinheirofiuza_q_1758054725614",
          "question": "Síndrome demencial?",
          "explanation": "",
          "answers": [
            {
              "id": "ans_1758054725614_0.8081884723089253",
              "text": "Sim",
              "points": 2
            },
            {
              "id": "ans_1758054725614_0.4618466556313341",
              "text": "Não",
              "points": 0
            }
          ]
        },
        {
          "id": "pinheirofiuza_q_1758054736781",
          "question": "Depressão?",
          "explanation": "",
          "answers": [
            {
              "id": "ans_1758054736781_0.6010844862286555",
              "text": "Sim",
              "points": 2
            },
            {
              "id": "ans_1758054736781_0.7089980069352616",
              "text": "Não",
              "points": 0
            }
          ]
        },
        {
          "id": "pinheirofiuza_q_1758054747299",
          "question": "Parkinson?",
          "explanation": "",
          "answers": [
            {
              "id": "ans_1758054747299_0.6737560630337633",
              "text": "Sim",
              "points": 2
            },
            {
              "id": "ans_1758054747299_0.4622371716805257",
              "text": "Não",
              "points": 0
            }
          ]
        },
        {
          "id": "pinheirofiuza_q_1758054757167",
          "question": "Neoplasia?",
          "explanation": "",
          "answers": [
            {
              "id": "ans_1758054757167_0.9133956674382566",
              "text": "Sim",
              "points": 2
            },
            {
              "id": "ans_1758054757167_0.21169658456449314",
              "text": "Não",
              "points": 0
            }
          ]
        },
        {
          "id": "pinheirofiuza_q_1758054767019",
          "question": "Sarcopenia?",
          "explanation": "",
          "answers": [
            {
              "id": "ans_1758054767019_0.39206334749883165",
              "text": "Sim",
              "points": 2
            },
            {
              "id": "ans_1758054767019_0.42128088777603145",
              "text": "Não",
              "points": 0
            }
          ]
        },
        {
          "id": "pinheirofiuza_q_1758054776628",
          "question": "Desnutrição?",
          "explanation": "",
          "answers": [
            {
              "id": "ans_1758054776628_0.6728875207573963",
              "text": "Sim",
              "points": 2
            },
            {
              "id": "ans_1758054776628_0.1527460666865541",
              "text": "Não",
              "points": 0
            }
          ]
        },
        {
          "id": "pinheirofiuza_q_1758054796802",
          "question": "Disfagia?",
          "explanation": "",
          "answers": [
            {
              "id": "ans_1758054796802_0.9368778935449449",
              "text": "Sim",
              "points": 2
            },
            {
              "id": "ans_1758054796802_0.1227911522769245",
              "text": "Não",
              "points": 0
            }
          ]
        },
        {
          "id": "pinheirofiuza_q_1758054806656",
          "question": "Incontinência?",
          "explanation": "",
          "answers": [
            {
              "id": "ans_1758054806656_0.5445261578396396",
              "text": "Sim",
              "points": 2
            },
            {
              "id": "ans_1758054806656_0.43163943032877605",
              "text": "Não",
              "points": 0
            }
          ]
        },
        {
          "id": "pinheirofiuza_q_1758054824953",
          "question": "Paralisia cerebral?",
          "explanation": "",
          "answers": [
            {
              "id": "ans_1758054824953_0.6921722088804588",
              "text": "Sim",
              "points": 2
            },
            {
              "id": "ans_1758054824953_0.5019256319856453",
              "text": "Não",
              "points": 0
            }
          ]
        },
        {
          "id": "pinheirofiuza_q_1758054900525",
          "question": "Cuidados Paliativos (PPS)",
          "explanation": "PPS: Palliative Performance Scale: Escala de Performance Paliativa (PPS) é uma ferramenta amplamente utilizada para avaliação e classificação de cuidados paliativos, sendo um instrumento validado para o contexto e lingua portuguesa em 2009.",
          "answers": [
            {
              "id": "ans_1758054900525_0.9874156478533467",
              "text": "PPS 80 a 100",
              "points": 2
            },
            {
              "id": "ans_1758054900525_0.9193979016943132",
              "text": "PPS 50 a 70",
              "points": 5
            },
            {
              "id": "ans_1758054900525_0.9790306003912448",
              "text": "PPS 30 a 50",
              "points": 8
            },
            {
              "id": "ans_1758054900525_0.17883089009366626",
              "text": "PPS <20",
              "points": 10
            }
          ]
        }
      ],
      "interpretations": [
        {
          "min": 0,
          "max": 5,
          "text": "Risco baixo: tempo médio de planejamento para a próxima visita de 6 meses a 1 ano"
        },
        {
          "min": 6,
          "max": 10,
          "text": "Risco médio: tempo médio de planejamento para a próxima visita de 4 a 6 meses"
        },
        {
          "min": 11,
          "max": 15,
          "text": "Risco alto: tempo médio de planejamento para a próxima visita de 2 a 3 meses"
        },
        {
          "min": 16,
          "max": 100,
          "text": "Risco muito alto: tempo médio de planejamento para a próxima visita de 1 a 2 meses"
        }
      ]
    },
	 "zarit_1758055107003": {
      "id": "zarit_1758055107003",
      "name": "Escala de Zarit",
      "description": "Tem por objetivo avaliar a sobrecarga dos cuidadores de idosos.",
      "instructions": "Tem por objetivo avaliar a sobrecarga dos cuidadores de idosos. Esta escala não deve ser realizada na presença do idoso. A cada afirmativa o cuidador deve indicar a frequência que se sente em relação ao que foi perguntado (nunca, raramente, algumas vezes, frequentemente ou sempre). Não existem respostas certas ou erradas. O estresse dos cuidadores será indicado por altos escores.",
      "progressive": false,
      "questions": [
        {
          "id": "zarit_q_1758055212408",
          "question": "Sente que, por causa do tempo que utiliza com o seu familiar/doente já não tem tempo suficiente para você mesmo?",
          "explanation": "",
          "answers": [
            {
              "id": "ans_1758055212408_0.6204717858030097",
              "text": "Nunca",
              "points": 1
            },
            {
              "id": "ans_1758055212408_0.10076195251563314",
              "text": "Quase nunca",
              "points": 2
            },
            {
              "id": "ans_1758055212408_0.7586429441191395",
              "text": "Às vezes",
              "points": 3
            },
            {
              "id": "ans_1758055212408_0.9650936335927446",
              "text": "Frequentemente",
              "points": 4
            },
            {
              "id": "ans_1758055212408_0.24951875711554128",
              "text": "Quase sempre",
              "points": 5
            }
          ]
        },
        {
          "id": "zarit_q_1758055275578",
          "question": "Sente-se estressado/angustiado por ter que cuidar do seu familiar/doente e ao mesmo tempo ser responsável por outras tarefas? (ex.: cuidar de outros familiares, ter que trabalhar)",
          "explanation": "",
          "answers": [
            {
              "id": "ans_1758055275577_0.3684412051942202",
              "text": "Nunca",
              "points": 1
            },
            {
              "id": "ans_1758055275577_0.5937392969638666",
              "text": "Quase nunca",
              "points": 2
            },
            {
              "id": "ans_1758055275577_0.8538150876968379",
              "text": "Às vezes",
              "points": 3
            },
            {
              "id": "ans_1758055275577_0.777138059781122",
              "text": "Frequentemente",
              "points": 4
            },
            {
              "id": "ans_1758055275577_0.7387138165021443",
              "text": "Quase sempre",
              "points": 5
            }
          ]
        },
        {
          "id": "zarit_q_1758055339199",
          "question": "Acha que a situação atual afeta a sua relação com amigos ou outros elementos da família de uma forma negativa?",
          "explanation": "",
          "answers": [
            {
              "id": "ans_1758055339199_0.2573616774981671",
              "text": "Nunca",
              "points": 1
            },
            {
              "id": "ans_1758055339199_0.892641794159313",
              "text": "Quase nunca",
              "points": 2
            },
            {
              "id": "ans_1758055339199_0.5641759881034193",
              "text": "Às vezes",
              "points": 3
            },
            {
              "id": "ans_1758055339199_0.6974847048543006",
              "text": "Frequentemente",
              "points": 4
            },
            {
              "id": "ans_1758055339199_0.1263731730766916",
              "text": "Quase sempre",
              "points": 5
            }
          ]
        },
        {
          "id": "zarit_q_1758055391517",
          "question": "Sente-se exausto quando tem de estar junto do seu familiar/doente?",
          "explanation": "",
          "answers": [
            {
              "id": "ans_1758055391517_0.8158121416617833",
              "text": "Nunca",
              "points": 1
            },
            {
              "id": "ans_1758055391517_0.28333803640317623",
              "text": "Quase nunca",
              "points": 2
            },
            {
              "id": "ans_1758055391517_0.12819859036259185",
              "text": "Às vezes",
              "points": 3
            },
            {
              "id": "ans_1758055391517_0.6392948385067689",
              "text": "Frequentemente",
              "points": 4
            },
            {
              "id": "ans_1758055391517_0.8299284386725806",
              "text": "Quase sempre",
              "points": 5
            }
          ]
        },
        {
          "id": "zarit_q_1758055422750",
          "question": "Sente que sua saúde tem sido afetada por ter que cuidar do seu familiar/doente?",
          "explanation": "",
          "answers": [
            {
              "id": "ans_1758055422750_0.2894051362685317",
              "text": "Nunca",
              "points": 1
            },
            {
              "id": "ans_1758055422750_0.38257086256659556",
              "text": "Quase nunca",
              "points": 2
            },
            {
              "id": "ans_1758055422750_0.21431876590179633",
              "text": "Às vezes",
              "points": 3
            },
            {
              "id": "ans_1758055422750_0.06618193158072083",
              "text": "Frequentemente",
              "points": 4
            },
            {
              "id": "ans_1758055422750_0.551441272268725",
              "text": "Quase sempre",
              "points": 5
            }
          ]
        },
        {
          "id": "zarit_q_1758055457470",
          "question": "Sente que tem perdido o controle da sua vida desde que a doença o seu familiar/ doente se manifestou?",
          "explanation": "",
          "answers": [
            {
              "id": "ans_1758055457470_0.9098891565595152",
              "text": "Nunca",
              "points": 1
            },
            {
              "id": "ans_1758055457470_0.14185145571069235",
              "text": "Quase nunca",
              "points": 2
            },
            {
              "id": "ans_1758055457470_0.23168825728057962",
              "text": "Ás vezes",
              "points": 3
            },
            {
              "id": "ans_1758055457470_0.46776180371074527",
              "text": "Frequentemente",
              "points": 4
            },
            {
              "id": "ans_1758055457470_0.737559072732173",
              "text": "Quase sempre",
              "points": 5
            }
          ]
        },
        {
          "id": "zarit_q_1758055495656",
          "question": "No geral, sente-se muito sobrecarregado por ter que cuidar do seu familiar/doente?",
          "explanation": "",
          "answers": [
            {
              "id": "ans_1758055495656_0.3590802627211185",
              "text": "Nunca",
              "points": 1
            },
            {
              "id": "ans_1758055495656_0.09717893594052429",
              "text": "Quase nunca",
              "points": 2
            },
            {
              "id": "ans_1758055495656_0.8738997712423241",
              "text": "Às vezes",
              "points": 3
            },
            {
              "id": "ans_1758055495656_0.02383086146249158",
              "text": "Frequentemente",
              "points": 4
            },
            {
              "id": "ans_1758055495656_0.3814243935253864",
              "text": "Quase sempre",
              "points": 5
            }
          ]
        }
      ],
      "interpretations": [
        {
          "min": 0,
          "max": 14,
          "text": "Sobrecarga leve"
        },
        {
          "min": 15,
          "max": 21,
          "text": "Sobrecarga moderada"
        },
        {
          "min": 22,
          "max": 100,
          "text": "Sobrecarga grave"
        }
      ]
    },

};