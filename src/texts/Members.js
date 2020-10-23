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
            role: "software",
            email: "daniel@gmail.com",
            pic: "",
            bio: "A cool person",
            linkedin: "meu linked-in",
            active: true
        },
        {
            key: "lucasmartins",
            name: "Lucas Martins",
            area: "Engenharia Elétrica",
            role: "software",
            email: "lmartins@gmail.com",
            pic: "",
            bio: "A cool person",
            linkedin: "meu linked-in",
            active: true
        },
        {
            key: "campos",
            name: "Victor Campos",
            area: "Ciência da Computação",
            role: "software",
            email: "victor@gmail.com",
            pic: "",
            bio: "A strong person",
            linkedin: "meu linked-in",
            active: true,
        },
        {
            key: "lincolnbarbosa",
            name: "Lincoln Abreu",
            area: "Engenharia da Computação",
            role: "hardware",
            email: "abreu@gmail.com",
            pic: "",
            bio: "A smart person",
            linkedin: "meu linked-in",
            active: true
        },
        {
            key: "venzi",
            name: "Daniel Gomes",
            area: "Engenharia de Redes de Comunicação",
            role: "security",
            email: "gomes@gmail.com",
            pic: "",
            bio: "A smart person",
            linkedin: "meu linked-in",
            active: false
        },
        {
            key: "desousa",
            name: "desousa",
            area: "",
            role: "",
            email: "",
            pic: "",
            bio: "",
            linkedin: "",
            active: false
        },
        {
            key: "franciscocaldasf",
            name: "franciscocaldasf",
            area: "",
            role: "",
            email: "",
            pic: "",
            bio: "",
            linkedin: "",
            active: false
        },
        {
            key: "maristelaholanda",
            name: "maristelaholanda",
            area: "",
            role: "",
            email: "",
            pic: "",
            bio: "",
            linkedin: "",
            active: false
        },
        {
            key: "fabiomendonca",
            name: "fabiomendonca",
            area: "",
            role: "",
            email: "",
            pic: "",
            bio: "",
            linkedin: "",
            active: false
        },
        {
            key: "marcosandrade",
            name: "marcosandrade",
            area: "",
            role: "",
            email: "",
            pic: "",
            bio: "",
            linkedin: "",
            active: false
        },
        {
            key: "matheusmonteiro",
            name: "matheusmonteiro",
            area: "",
            role: "",
            email: "",
            pic: "",
            bio: "",
            linkedin: "",
            active: false
        },
        {
            key: "patrao",
            name: "patrao",
            area: "",
            role: "",
            email: "",
            pic: "",
            bio: "",
            linkedin: "",
            active: false
        },
        {
            key: "robsonalbuquerde",
            name: "robsonalbuquerde",
            area: "",
            role: "",
            email: "",
            pic: "",
            bio: "",
            linkedin: "",
            active: false
        },
        {
            key: "lustosa",
            name: "lustosa",
            area: "",
            role: "",
            email: "",
            pic: "",
            bio: "",
            linkedin: "",
            active: false
        },
        {
            key: "cassioribeiro",
            name: "cassioribeiro",
            area: "",
            role: "",
            email: "",
            pic: "",
            bio: "",
            linkedin: "",
            active: false
        },
        {
            key: "thalessperling",
            name: "thalessperling",
            area: "",
            role: "",
            email: "",
            pic: "",
            bio: "",
            linkedin: "",
            active: false
        },
        {
            key: "dayannecunha",
            name: "dayannecunha",
            area: "",
            role: "",
            email: "",
            pic: "",
            bio: "",
            linkedin: "",
            active: false
        },
        {
            key: "justino",
            name: "justino",
            area: "",
            role: "",
            email: "",
            pic: "",
            bio: "",
            linkedin: "",
            active: false
        },
        {
            key: "mateuszanatta",
            name: "mateuszanatta",
            area: "",
            role: "",
            email: "",
            pic: "",
            bio: "",
            linkedin: "",
            active: false
        },
        {
            key: "brunodutra",
            name: "brunodutra",
            area: "",
            role: "",
            email: "",
            pic: "",
            bio: "",
            linkedin: "",
            active: false
        },
        {
            key: "kfouri",
            name: "kfouri",
            area: "",
            role: "",
            email: "",
            pic: "",
            bio: "",
            linkedin: "",
            active: false
        },
        {
            key: "gersonsilva",
            name: "gersonsilva",
            area: "",
            role: "",
            email: "",
            pic: "",
            bio: "",
            linkedin: "",
            active: false
        },
        {
            key: "tribouilet",
            name: "tribouilet",
            area: "",
            role: "",
            email: "",
            pic: "",
            bio: "",
            linkedin: "",
            active: false
        },
        {
            key: "demetriosilvaf",
            name: "demetriosilvaf",
            area: "",
            role: "",
            email: "",
            pic: "",
            bio: "",
            linkedin: "",
            active: false
        },
        {
            key: "barenco",
            name: "Cláudia Jacy Barenco Abbas",
            area: "",
            role: "",
            email: "",
            pic: "",
            bio: "",
            linkedin: "",
            active: false
        },
        {
            key: "rodrigorocha",
            name: "rodrigorocha",
            area: "",
            role: "",
            email: "",
            pic: "",
            bio: "",
            linkedin: "",
            active: false
        },
        {
            key: "rubenhuacarpuma",
            name: "Ruben Cruz Huacarpuma",
            area: "",
            role: "",
            email: "",
            pic: "",
            bio: "",
            linkedin: "",
            active: false
        },
        {
            key: "ingridaraujo",
            name: "ingridaraujo",
            area: "",
            role: "",
            email: "",
            pic: "",
            bio: "",
            linkedin: "",
            active: false
        },
        {
            key: "fabiobuiati",
            name: "Fábio Buiati",
            area: "",
            role: "",
            email: "",
            pic: "",
            bio: "",
            linkedin: "",
            active: false
        },
        {
            key: "luisvillalba",
            name: "Luis Javier García Villalba",
            area: "",
            role: "",
            email: "",
            pic: "",
            bio: "",
            linkedin: "",
            active: false
        },
        {
            key: "taikim",
            name: "Tai-Hoon Kim",
            area: "",
            role: "",
            email: "",
            pic: "",
            bio: "",
            linkedin: "",
            active: false
        },
        {
            key: "caiosilva",
            name: "caiosilva",
            area: "",
            role: "",
            email: "",
            pic: "",
            bio: "",
            linkedin: "",
            active: false
        },
        {
            key: "samuelalmeida",
            name: "samuelalmeida",
            area: "",
            role: "",
            email: "",
            pic: "",
            bio: "",
            linkedin: "",
            active: false
        },
        {
            key: "poletti",
            name: "poletti",
            area: "",
            role: "",
            email: "",
            pic: "",
            bio: "",
            linkedin: "",
            active: false
        },
        {
            key: "felipemachado",
            name: "felipemachado",
            area: "",
            role: "",
            email: "",
            pic: "",
            bio: "",
            linkedin: "",
            active: false
        },
        {
            key: "sergiolifschitz",
            name: "Sérgio Lifschitz",
            area: "",
            role: "",
            email: "",
            pic: "",
            bio: "",
            linkedin: "",
            active: false
        },
        {
            key: "flavioelias",
            name: "Flávio Elias Gomes de Deus",
            area: "",
            role: "",
            email: "",
            pic: "",
            bio: "",
            linkedin: "",
            active: false
        },

        // template
        {
            key: "x",
            name: "",
            area: "",
            role: "",
            email: "",
            pic: "",
            bio: "",
            linkedin: "",
            active: false
        },
    ]
  export default Members
