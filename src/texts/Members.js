const Members = [
  /*
      A definição da chave deve seguir a seguinte regra:
      - regra geral: usar o primeiro nome mais último sobrenome;
        - obs: caso o nome tenha algum sufixo, acrescentar a primeira letra do sufixo no final do nome;
      - exceção 1: usar o "nome de guerra" de professor da UnB (se houver);
      - exceção 2: usar o sobrenome se for um sobrenome já utilizado para se referir a pessoa. Exemplo: Patrão, Prado, Venzi e Kfouri.

      Obs.:
      - todos as letras minúsculas;
      - não usar acentos ou cedilha.
  */
        {
            key: "prado",
            name: "Daniel Prado",
            area: "Engenharia de Redes de Comunicação",
            email: "daniel.prado@uiot.org",
            picture: "man",
            bio: "A cool person",
            lattes: "",
            linkedin: "meu linked-in",
            belong: true,
            lab: {
                active: true,
                area: "software",
            }
        },
        {
            key: "lucasmartins",
            name: "Lucas Martins",
            area: "Doutorando em Engenharia Elétrica",
            role: "software",
            email: "lucas.martins@uiot.org",
            picture: "man",
            bio: "A cool person",
            lattes: "",
            linkedin: "meu linked-in",
            belong: true,
            lab: {
                active: false,
                area: "coordination",
            }
        },
        {
            key: "desousa",
            name: "Rafael de Sousa Jr.",
            area: "Professor Dr. Engenharia Elétrica",
            role: "",
            email: "desousa@unb.br",
            picture: "man",
            bio: "",
            lattes: "",
            linkedin: "",
            belong: true,
            lab: {
                active: false,
                area: "coordination",
            },
            order: 0
        },
        {
            key: "franciscocaldasf",
            name: "Francisco de Caldas Filho",
            area: "Doutorando em Engenharia Elétrica",
            role: "",
            email: "francisco.caldas@uiot.org",
            picture: "man",
            bio: "",
            lattes: "",
            linkedin: "",
            belong: true,
            lab: {
                active: false,
                area: "coordination",
            },
            order: 2
        },
        {
            key: "victorcampos",
            name: "Victor Campos",
            area: "Ciência da Computação",
            role: "software",
            email: "victor.campos@uiot.org",
            picture: "man",
            bio: "A strong person",
            lattes: "",
            linkedin: "meu linked-in",
            belong: true,
            lab: {
                active: true,
                area: "software",
            }
        },
        {
            key: "lincolnbarbosa",
            name: "Lincoln Abreu",
            area: "Engenharia da Computação",
            email: "lincoln.barbosa@uiot.org",
            picture: "man",
            bio: "A smart person",
            lattes: "",
            linkedin: "meu linked-in",
            belong: true,
            lab: {
                active: true,
                area: "hardware",
            }
        },
        {
            key: "venzi",
            name: "Daniel G. V. Gonçalves",
            area: "Engenharia de Redes de Comunicação",
            role: "security",
            email: "daniel.venzi@uiot.org",
            picture: "man",
            bio: "A smart person",
            lattes: "",
            linkedin: "meu linked-in",
            belong: true,
            lab: {
                active: false,
                area: "security",
            }
        },
        {
            key: "fabiomendonca",
            name: "Fábio L. L. de Mendonça",
            area: "Area atuação",
            role: "",
            email: "email@email.com",
            picture: "man",
            bio: "",
            lattes: "",
            linkedin: "",
            belong: true,
            lab: {
                active: true,
                area: "software",
            }
        },
        {
            key: "marcosandrade",
            name: "Marcos B. Andrade",
            area: "Area atuação",
            role: "hardware",
            email: "marcos.blandim@uiot.org",
            picture: "man",
            bio: "",
            lattes: "",
            linkedin: "",
            belong: true,
            lab: {
                active: false,
                area: "hardware",
            }
        },
        {
            key: "matheusmonteiro",
            name: "Matheus S. Monteiro",
            area: "Area atuação",
            role: "hardware",
            email: "matheus.monteiro@uiot.org",
            picture: "man",
            bio: "",
            lattes: "",
            linkedin: "",
            belong: true,
            lab: {
                active: true,
                area: "hardware",
            }
        },
        {
            key: "patrao",
            name: "Rafael L. Patrão",
            area: "Area atuação",
            role: "quality",
            email: "rafael.patrao@uiot.org",
            picture: "man",
            bio: "",
            lattes: "",
            linkedin: "",
            belong: true,
            lab: {
                active: true,
                area: "quality",
            }
        },
        {
            key: "fernandaformiga",
            name: "Fernanda Formiga",
            area: "Area atuação",
            role: "software",
            email: "fernanda.formiga@uiot.org",
            picture: "woman",
            bio: "",
            lattes: "",
            linkedin: "",
            belong: true,
            lab: {
                active: true,
                area: "software",
            }
        },

        {
            key: "gustavoluz",
            name: "Gustavo Pessoa Caixeta Pinto da Luz",
            area: "Area atuação",
            role: "software",
            email: "gustavo.luz@uiot.org",
            picture: "man",
            bio: "",
            lattes: "",
            linkedin: "",
            belong: true,
            lab: {
                active: true,
                area: "software",
            }
        },
        {
            key: "carolinasartori",
            name: "Carolina Sartori da Silva",
            area: "Area atuação",
            role: "software",
            email: "carolina.silva@uiot.org",
            picture: "woman",
            bio: "",
            lattes: "",
            linkedin: "",
            belong: true,
            lab: {
                active: true,
                area: "software",
            }
        },
        {
            key: "justino",
            name: "Bruno Justino G. Praciano",
            area: "Area atuação",
            role: "software",
            email: "email@email.com",
            picture: "man",
            bio: "",
            lattes: "",
            linkedin: "",
            belong: true,
            lab: {
                active: false,
                area: "software",
            }
        },
        {
            key: "robsonalbuquerde",
            name: "Robson de O. Albuquerque",
            area: "Area atuação",
            role: "orientation",
            email: "email@email.com",
            picture: "man",
            bio: "",
            lattes: "",
            linkedin: "",
            belong: false,
            lab: {
                active: false,
                area: "orientation",
            }
        },
        {
            key: "lustosa",
            name: "João Paulo C. L. da Costa",
            area: "Area atuação",
            role: "orientation",
            email: "email@email.com",
            picture: "man",
            bio: "",
            lattes: "",
            linkedin: "",
            belong: false,
            lab: {
                active: false,
                area: "orientation",
            }
        },
        {
            key: "cassioribeiro",
            name: "Cassio Fabius C. Ribeiro",
            area: "Area atuação",
            role: "hardware",
            email: "cassio.fabius@uiot.org",
            picture: "man",
            bio: "",
            lattes: "",
            linkedin: "",
            belong: true,
            lab: {
                active: true,
                area: "hardware",
            }
        },
        {
            key: "fiuza",
            name: "João F. de Alencastro",
            area: "Area atuação",
            role: "software",
            email: "email@email.com",
            picture: "man",
            bio: "",
            lattes: "",
            linkedin: "",
            belong: true,
            lab: {
                active: false,
                area: "software",
            }
        },
        {
            key: "maristelaholanda",
            name: "Maristela Holanda",
            area: "Area atuação",
            role: "orientation",
            email: "email@email.com",
            picture: "woman",
            bio: "",
            lattes: "",
            linkedin: "",
            belong: false,
            lab: {
                active: false,
                area: "orientation",
            }
        },
        {
            key: "thalessperling",
            name: "Thales L. von Sperling",
            area: "Area atuação",
            role: "software",
            email: "email@email.com",
            picture: "man",
            bio: "",
            lattes: "",
            linkedin: "",
            belong: true,
            lab: {
                active: false,
                area: "software",
            }
        },
        {
            key: "dayannecunha",
            name: "Dayanne Cunha",
            area: "Area atuação",
            role: "software",
            email: "email@email.com",
            picture: "woman",
            bio: "",
            lattes: "",
            linkedin: "",
            belong: true,
            lab: {
                active: false,
                area: "software",
            }
        },
        {
            key: "mateuszanatta",
            name: "Mateus da R. Zanatta",
            area: "Area atuação",
            role: "",
            email: "email@email.com",
            picture: "man",
            bio: "",
            lattes: "",
            linkedin: "",
            belong: true,
            lab: {
                active: false,
                area: "Area atuação",
            }
        },
        {
            key: "brunodutra",
            name: "Bruno V. Dutra",
            area: "Area atuação",
            role: "security",
            email: "email@email.com",
            picture: "man",
            bio: "",
            lattes: "",
            linkedin: "",
            belong: true,
            lab: {
                active: false,
                area: "security",
            }
        },
        {
            key: "brunofranca",
            name: "Bruno de A. França",
            area: "Area atuação",
            role: "software",
            email: "email@email.com",
            picture: "man",
            bio: "",
            lattes: "",
            linkedin: "",
            belong: true,
            lab: {
                active: false,
                area: "software",
            }
        },
        {
            key: "kfouri",
            name: "Guilherme de O. Kfouri",
            area: "Area atuação",
            role: "security",
            email: "email@email.com",
            picture: "man",
            bio: "",
            lattes: "",
            linkedin: "",
            belong: true,
            lab: {
                active: false,
                area: "security",
            }
        },
        {
            key: "gersonsilva",
            name: "Gerson do N. Silva",
            area: "Area atuação",
            role: "software",
            email: "email@email.com",
            picture: "man",
            bio: "",
            lattes: "",
            linkedin: "",
            belong: false,
            lab: {
                active: false,
                area: "software",
            }
        },
        {
            key: "tribouilet",
            name: "João Tribouilet M. de Menezes",
            area: "Area atuação",
            role: "software",
            email: "email@email.com",
            picture: "man",
            bio: "",
            lattes: "",
            linkedin: "",
            belong: true,
            lab: {
                active: true,
                area: "software",
            }
        },
        {
            key: "demetriosilvaf",
            name: "Demétrio A. da Silva Filho",
            area: "Area atuação",
            role: "orientation",
            email: "email@email.com",
            picture: "man",
            bio: "",
            lattes: "",
            linkedin: "",
            belong: true,
            lab: {
                active: false,
                area: "orientation",
            }
        },
        {
            key: "barenco",
            name: "Cláudia J. Barenco Abbas",
            area: "Area atuação",
            role: "orientation",
            email: "email@email.com",
            picture: "woman",
            bio: "",
            lattes: "",
            linkedin: "",
            belong: false,
            lab: {
                active: false,
                area: "orientation",
            }
        },
        {
            key: "ednacanedo",
            name: "Edna D. Canedo",
            area: "Area atuação",
            role: "orientation",
            email: "email@email.com",
            picture: "woman",
            bio: "",
            lattes: "",
            linkedin: "",
            belong: false,
            lab: {
                active: false,
                area: "orientation",
            }
        },
        {
            key: "rodrigorocha",
            name: "Rodrigo L. Rocha",
            area: "Area atuação",
            role: "hardware",
            email: "email@email.com",
            picture: "man",
            bio: "",
            lattes: "",
            linkedin: "",
            belong: true,
            lab: {
                active: false,
                area: "hardware",
            }
        },
        {
            key: "rubenhuacarpuma",
            name: "Ruben C. Huacarpuma",
            area: "Area atuação",
            role: "",
            email: "email@email.com",
            picture: "man",
            bio: "",
            lattes: "",
            linkedin: "",
            belong: false,
            lab: {
                active: false,
                area: "Area atuação",
            }
        },
        {
            key: "ingridaraujo",
            name: "Ingrid P. Araújo",
            area: "Area atuação",
            role: "",
            email: "email@email.com",
            picture: "woman",
            bio: "",
            lattes: "",
            linkedin: "",
            belong: false,
            lab: {
                active: false,
                area: "Area atuação",
            }
        },
        {
            key: "fabiobuiati",
            name: "Fábio Buiati",
            area: "Area atuação",
            role: "",
            email: "email@email.com",
            picture: "man",
            bio: "",
            lattes: "",
            linkedin: "",
            belong: false,
            lab: {
                active: false,
                area: "Area atuação",
            }
        },
        {
            key: "luisvillalba",
            name: "Luis Javier García Villalba",
            area: "Area atuação",
            role: "",
            email: "email@email.com",
            picture: "man",
            bio: "",
            lattes: "",
            linkedin: "",
            belong: false,
            lab: {
                active: false,
                area: "Area atuação",
            }
        },
        {
            key: "taikim",
            name: "Tai-Hoon Kim",
            area: "Area atuação",
            role: "",
            email: "email@email.com",
            picture: "man",
            bio: "",
            lattes: "",
            linkedin: "",
            belong: false,
            lab: {
                active: false,
                area: "Area atuação",
            }
        },
        {
            key: "caiosilva",
            name: "Caio C. M. Silva",
            area: "Area atuação",
            role: "software",
            email: "email@email.com",
            picture: "man",
            bio: "",
            lattes: "",
            linkedin: "",
            belong: true,
            lab: {
                active: false,
                area: "software",
            }
        },
        {
            key: "samuelalmeida",
            name: "Samuel Almeida",
            area: "Area atuação",
            role: "",
            email: "email@email.com",
            picture: "man",
            bio: "",
            lattes: "",
            linkedin: "",
            belong: false,
            lab: {
                active: false,
                area: "Area atuação",
            }
        },
        {
            key: "poletti",
            name: "João V. Poletti",
            area: "Area atuação",
            role: "",
            email: "email@email.com",
            picture: "man",
            bio: "",
            lattes: "",
            linkedin: "",
            belong: false,
            lab: {
                active: false,
                area: "Area atuação",
            }
        },
        {
            key: "felipemachado",
            name: "Felipe D. Machado",
            area: "Area atuação",
            role: "hardware",
            email: "email@email.com",
            picture: "man",
            bio: "",
            lattes: "",
            linkedin: "",
            belong: true,
            lab: {
                active: false,
                area: "hardware",
            }
        },
        {
            key: "sergiolifschitz",
            name: "Sérgio Lifschitz",
            area: "Area atuação",
            role: "",
            email: "email@email.com",
            picture: "man",
            bio: "",
            lattes: "",
            linkedin: "",
            belong: false,
            lab: {
                active: false,
                area: "Area atuação",
            }
        },
        {
            key: "hiroferreira",
            name: "Hiro G. C. Ferreira",
            area: "Area atuação",
            role: "software",
            email: "email@email.com",
            picture: "man",
            bio: "",
            lattes: "",
            linkedin: "",
            belong: true,
            lab: {
                active: false,
                area: "software",
            }
        },
        {
            key: "giozza",
            name: "William F. Giozza",
            area: "Area atuação",
            role: "orientation",
            email: "email@email.com",
            picture: "man",
            bio: "",
            lattes: "",
            linkedin: "",
            belong: false,
            lab: {
                active: false,
                area: "orientation",
            }
        },
        {
            key: "flavioelias",
            name: "Flávio Elias G. de Deus",
            area: "Area atuação",
            role: "orientation",
            email: "email@email.com",
            picture: "man",
            bio: "",
            lattes: "",
            linkedin: "",
            belong: false,
            lab: {
                active: false,
                area: "orientation",
            }
        },

        {
            key: "danielsilva",
            name: "Daniel A. da Silva",
            area: "Area atuação",
            role: "",
            email: "email@email.com",
            picture: "man",
            bio: "",
            lattes: "",
            linkedin: "",
            belong: false,
            lab: {
                active: false,
                area: "Area atuação",
            }
        },
        {
            key: "josetorres",
            name: "José Alberto S. Torres",
            area: "Area atuação",
            role: "",
            email: "email@email.com",
            picture: "man",
            bio: "",
            lattes: "",
            linkedin: "",
            belong: false,
            lab: {
                active: false,
                area: "Area atuação",
            }
        },
        {
            key: "alexandrepinheiro",
            name: "Alexandre Pinheiro",
            area: "Area atuação",
            role: "",
            email: "email@email.com",
            picture: "man",
            bio: "",
            lattes: "",
            linkedin: "",
            belong: false,
            lab: {
                active: false,
                area: "Area atuação",
            }

        },
        {
            key: "annarosa",
            name: "Anna Carolina Ferreira Rosa",
            area: "Curso",
            role: "hardware",
            email: "anna.rosa@uiot.org",
            picture: "woman",
            bio: "A strong person",
            lattes: "",
            linkedin: "meu linked-in",
            belong: true,
            lab: {
                active: true,
                area: "hardware",
            }
        },
        {
            key: "hectoroliveira",
            name: "Hector Wender dos Santos Oliveira",
            area: "Curso",
            role: "hardware",
            email: "hector.oliveira@uiot.org",
            picture: "man",
            bio: "A strong person",
            lattes: "",
            linkedin: "meu linked-in",
            belong: true,
            lab: {
                active: true,
                area: "hardware",
            }
        },
        {
            key: "jonathasalves",
            name: "Jonathas Alves de Oliveira",
            area: "Curso",
            role: "software",
            email: "jonatas.alves@uiot.org",
            picture: "man",
            bio: "A strong person",
            lattes: "",
            linkedin: "meu linked-in",
            belong: true,
            lab: {
                active: true,
                area: "software",
            }
        },
        {
            key: "nayarasilva",
            name: "Nayara Rossi Brito da Silva",
            area: "Curso",
            role: "software",
            email: "nayara.silva@uiot.org",
            picture: "woman",
            bio: "A strong person",
            lattes: "",
            linkedin: "meu linked-in",
            belong: true,
            lab: {
                active: true,
                area: "software",
            }
        },
        {
            key: "rafaelzerbini",
            name: "Rafael Zerbini Alves da Mata",
            area: "Curso",
            role: "security",
            email: "rafael.zerbini@uiot.org",
            picture: "man",
            bio: "A strong person",
            lattes: "",
            linkedin: "meu linked-in",
            belong: true,
            lab: {
                active: true,
                area: "security",
            }
        },
        {
            key: "viniciuscosta",
            name: "Vinicius Salgueiro Costa",
            area: "Curso",
            role: "hardware",
            email: "vinicius.costa@uiot.org",
            picture: "man",
            bio: "A strong person",
            lattes: "",
            linkedin: "meu linked-in",
            belong: true,
            lab: {
                active: true,
                area: "hardware",
            }
        },
        {
            key: "paulomendes",
            name: "Paulo Henrique Ferreira Campos Mendes",
            area: "Curso",
            role: "software",
            email: "paulo.mendes@uiot.org",
            picture: "man",
            bio: "A strong person",
            lattes: "",
            linkedin: "meu linked-in",
            belong: true,
            lab: {
                active: true,
                area: "software",
            }
        },
        {
            key: "nataliamarques",
            name: "Natália Andrade Marques",
            area: "Curso",
            role: "software",
            email: "natalia.marques@uiot.org",
            picture: "woman",
            bio: "A strong person",
            lattes: "",
            linkedin: "meu linked-in",
            belong: true,
            lab: {
                active: true,
                area: "software",
            }
        },
        {
            key: "lucascoelho",
            name: "Lucas Coelho de Almeida",
            area: "Curso",
            role: "software",
            email: "lucas.coelho@uiot.org",
            picture: "man",
            bio: "A strong person",
            lattes: "",
            linkedin: "meu linked-in",
            belong: true,
            lab: {
                active: true,
                area: "software",
            }
        },
        {
            key: "leonardoalmeida",
            name: "Leonardo de Oliveira Almeida",
            area: "Curso",
            role: "quality",
            email: "leonardo.almeida@uiot.org",
            picture: "man",
            bio: "A strong person",
            lattes: "",
            linkedin: "meu linked-in",
            belong: true,
            lab: {
                active: true,
                area: "quality",
            }
        },
        {
            key: "mariaflavia",
            name: "Maria Flávia da Rocha Soares",
            area: "Curso",
            role: "software",
            email: "flavia.maria@uiot.org",
            picture: "woman",
            bio: "A strong person",
            lattes: "",
            linkedin: "meu linked-in",
            belong: true,
            lab: {
                active: true,
                area: "software",
            }
        },
        {
            key: "pedrosusa",
            name: "Pedro de Oliveira Moura e Souza",
            area: "Curso",
            role: "software",
            email: "pedro.susa@uiot.org",
            picture: "man",
            bio: "A strong person",
            lattes: "",
            linkedin: "meu linked-in",
            belong: true,
            lab: {
                active: true,
                area: "software",
            }
        },
        {
            key: "heitorvieira",
            name: "Heitor Magalhães Vieira",
            area: "Curso",
            role: "software",
            email: "heitor.vieira@uiot.org",
            picture: "man",
            bio: "A strong person",
            lattes: "",
            linkedin: "meu linked-in",
            belong: true,
            lab: {
                active: true,
                area: "software",
            }
        },

        // template
        // {
        //     key: "x",
        //     name: "",
        //     area: "Area atuação",
        //     role: "",
        //     email: "email@email.com",
        //     picture: "man",
        //     bio: "",
        //     lattes: "",
        //     linkedin: "",
        //     lab: {
            //     active: false,
            //     area: "xxxxxxxxxxx",
            // }
        // },
    ]
  export default Members
