const Publications = [
    /*
        TODO
        - Tipo de publicação (TCC, dissertação, conferência, etc)
        - Local da publicação
        - Idioma da publicação
        - Link para a publicação
    */
            {
                year: 2020,
                title: "Monitoramento e controle de ambientes com base em aprendizagem de máquina e computação em nevoeiro em arquitetura IoT",
                authors: [
                    "Rafael L. Patrão",
                    "Francisco L. de Caldas Filho",
                    "Lucas M. C. e Martins",
                    "Gerson do N. Silva",
                    "Matheus S. Monteiro",
                    "Marcos B. Andrade",
                    "Fabio L. L. de Mendonça",
                    "Rafael Timoteo de Sousa Júnior"
                ],
                type: "conference",
                name: "15th Iberian Conference on Information Systems and Technologies",
                short: "CISTI 2020",
                publication_link: "https://ieeexplore.ieee.org/abstract/document/9141085",
                download: "",
                language: "pt-br"
            },
            {
                year: 2019,
                title: "A Real Data Analysis in an Internet of Things Environment",
                authors: [
                    "Joao Victor Poletti",
                    "Lucas Mauricio Castro e Martins",
                    "Samuel Almeida",
                    "Maristela Holanda",
                    "Rafael Timoteo de Sousa Júnior"
                ],
                type: "conference",
                name: "Conferências Ibero-Americanas de Computação Aplicada 2017",
                short: "CIACA 2017",
                publication_link: "https://www.scitepress.org/PublicationsDetail.aspx?ID=2Wb+aNVirL0=&t=1",
                download: "polettietal2019.pdf",
                language: "en"
            },
            {
                year: 2019,
                title: "HIDS by Signature for embedded devices in IoT networks",
                authors: [
                    "Bruno Vieira Dutra",
                    "Lucas Mauricio Castro e Martins",
                    "Francisco L. de Caldas Filho",
                ],
                type: "conference",
                name: "V Jornadas Nacionales de Investigación en Ciberseguridad",
                short: "JNIC 2019",
                publication_link: "https://2019.jnic.es/Actas_JNIC2019.pdf",
                download: "",
                language: "en"
            },
            {
                year: 2019,
                title: "P2PIoT: A Peer-To-Peer Communication Model for the Internet of Things",
                authors: [
                    "abio L. L. de Mendonça",
                    "Dayanne F. da Cunha",
                    "Bruno J. G. Praciano",
                    "Mateus da Rosa Zanatta",
                    "Joao Paulo C. L. da Costa",
                    "Rafael T. de Sousa"
                ],
                type: "conference",
                name: "2019 Workshop on Communication Networks and Power Systems",
                short: "WCNPS 2019",
                publication_link: "https://ieeexplore.ieee.org/document/8896313",
                download: "",
                language: "en"
            },
            {
                year: 2019,
                title: "IPS architecture for IoT networks overlapped in SDN",
                authors: [
                    "Daniel G. V. Gonçalves",
                    "Bruno Vieira Dutra",
                    "Lucas Mauricio Castro e Martins",
                    "Francisco L. de Caldas Filho",
                    "Guilherme de O. Kfouri",
                    "Robson de O. Albuquerde",
                    "Rafael T. de Sousa Junior"
                ],
                type: "conference",
                name: "2019 Workshop on Communication Networks and Power Systems",
                short: "WCNPS 2019",
                publication_link: "https://ieeexplore.ieee.org/document/8896297",
                download: "",
                language: "en"
            },
            {
                year: 2019,
                title: "University Campus Microclimate Monitoring Using IoT",
                authors: [
                    "Matheus S. Monteiro",
                    "Lucas Mauricio Castro e Martins",
                    "Francisco L. de Caldas Filho",
                    "Lincoln A. Barbosa",
                    "João T. M. de Menezes",
                    "Demétrio A. da Silva Filho"
                ],
                type: "conference",
                name: "2019 Workshop on Communication Networks and Power Systems",
                short: "WCNPS 2019",
                publication_link: "https://ieeexplore.ieee.org/document/8896242",
                download: "",
                language: "en"
            },
            {
                title: "Publicação de testes",
                authors: [
                    'prado',
                    'campos',
                    'venzi'
                ],
                download: "download"
            },
            {
                year: 2020,
                title: "Publicação de testes 2",
                authors: [
                    'prado',
                    'lmartins'
                ]
            },
            {
                year: 2019,
                title: "Publicação de testes 2019",
                authors: [
                    'prado',
                    'campos'
                ]
            },
            // { 
            //     year: 2019,
            //     title: "A Real Data Analysis in an Internet of Things Environment", 
            //     authors: [
            //         "Joao Victor Poletti", 
            //         "Lucas Mauricio Castro e Martins", 
            //         "Samuel Almeida", 
            //         "Maristela Holanda", 
            //         "Rafael Timoteo de Sousa Júnior"
            //     ], 
            //     download: "download" 
            // },
            // { 
            //     year: 2019,
            //     title: "HIDS by Signature for embedded devices in IoT networks", 
            //     authors: [
            //         "Bruno Vieira Dutra", 
            //         "Lucas Mauricio Castro e Martins", 
            //         "Francisco L. de Caldas Filho",
            //     ], 
            //     download: "download" 
            // },
            // { 
            //     year: 2019,
            //     title: "IPS architecture for ioT networks overlapped in SDN", 
            //     authors: [
            //         "Daniel G. V. Gonçalves",
            //         "Bruno Vieira Dutra", 
            //         "Lucas Mauricio Castro e Martins", 
            //         "Francisco L. de Caldas Filho",
            //         "Guilherme de O. Kfouri",
            //         "Robson de O. Albuquerde",
            //         "Rafael T. de Sousa Junior"
            //     ], 
            //     download: "download" 
            // },
            // { 
            //     year: 2019,
            //     title: "University Campus Microclimate Monitoring Using IoT", 
            //     authors: [
            //         "Matheus S. Monteiro", 
            //         "Lucas Mauricio Castro e Martins", 
            //         "Francisco L. de Caldas Filho",
            //         "Lincoln A. Barbosa",
            //         "João T. M. de Menezes",
            //         "Demétrio A. da Silva Filho"
            //     ], 
            //     download: "download" 
            // },
            // { 
            //     year: 2019,
            //     title: "QoS Scheduling Algorithm for a Fog IoT Gateway", 
            //     authors: [ 
            //         "Lucas Mauricio Castro e Martins", 
            //         "Francisco L. de Caldas Filho",
            //         "Rodrigo L. Rocha",
            //         "Cláudia J. B. Abbas",
            //         "Edna Dias Canedo",
            //         "Rafael T. de Sousa Junior"
            //     ], 
            //     download: "download" 
            // },
            // { 
            //     year: 2019,
            //     title: "Inference of driver behavior using correlated IoT data from the vehicle telemetry and the driver mobile phone", 
            //     authors: [ 
            //         "Rafael T. de Sousa Jr",
            //         "Daniel Alves da Silva",
            //         "José Alberto Sousa Torres",
            //         "Alexandre Pinheiro",
            //         "Francisco L. de Caldas Filho",
            //         "Fabio L. L. Mendonça",
            //         "Bruno J. G Praciano",
            //         "Guilherme Oliveira Kfouri"
            //     ], 
            //     download: "download" 
            // },
            // { 
            //     year: 2019,
            //     title: "Arquitetura de IPS para redes IoT sobrepostas em SDN", 
            //     authors: [ 
            //         "Daniel GV Gonçalves", 
            //         "Guilherme de O Kfouri", 
            //         "Bruno V Dutra", 
            //         "João F de Alencastro", 
            //         "Francisco L de Caldas Filho", 
            //         "Lucas M. C. e Martins", 
            //         "Robson de O Martins", 
            //         "Rafael T de Sousa Jr"
            //     ], 
            //     download: "download" 
            // },
            // { 
            //     year: 2019,
            //     title: "Design of a Distributed HIDS for IoT Backbone Components", 
            //     authors: [ 
            //         "Guilherme de O Kfouri", 
            //         "Daniel G. V. Gonçalves", 
            //         "Bruno V. Dutra", 
            //         "João F. de Alencastro", 
            //         "Francisco L. de Caldas Filho", 
            //         "Lucas M. C. e Martins", 
            //         "Bruno J. G. Praciano", 
            //         "Robson de O. Albuquerque", 
            //         "Rafael T de Sousa Jr"
            //     ], 
            //     download: "download" 
            // },
            // { 
            //     year: 2018,
            //     title: "Evaluation of an IoT device designed for transparent traffic analysis", 
            //     authors: [
            //         "Thales L. von Sperling", 
            //         "Bruno de A. Franca", 
            //         "Francisco L. de Caldas Filho", 
            //         "Lucas Mauricio Castro e Martins", 
            //         "Rafael Timoteo de Sousa Júnior",
            //         "Robson de O. Albuquerque"
            //     ], 
            //     download: "download" 
            // },
            // { 
            //     year: 2018,
            //     title: "Protocolos de Redundancia de Gateway Aplicados em Redes IoT", 
            //     authors: [
            //         "Francisco L. de Caldas Filho", 
            //         "Lucas Mauricio Castro e Martins", 
            //         "Rafael Timoteo de Sousa Júnior",
            //         "Claudia J. Barenco Abbas",
            //         "Cassio Fabius C. Ribeiro",
            //     ], 
            //     download: "download" 
            // },
            // { 
            //     year: 2017,
            //     title: "Tracking intruders in IoT networks by means of DNS traffic analysis", 
            //     authors: [
            //         "Thales L. von Sperling",  
            //         "Francisco L. de Caldas Filho", 
            //         "Lucas Mauricio Castro e Martins", 
            //         "Rafael Timoteo de Sousa Júnior",
            //         "Rodrigo L. Rocha"
            //     ], 
            //     download: "download" 
            // },
            // { 
            //     year: 2017,
            //     title: "Increasing the Dependability of IoT Middleware with Cloud Computing and Microservices", 
            //     authors: [
            //         "Francisco L. de Caldas Filho", 
            //         "Lucas Mauricio Castro e Martins", 
            //         "Rafael Timoteo de Sousa Júnior",
            //         "William F. Giozza",
            //         "João Paulo C. L. da Costa",
            //     ], 
            //     download: "download" 
            // },
            // { 
            //     year: 2017,
            //     title: "Design and Evaluation of a Semantic Gateway Prototype for IoT Networks", 
            //     authors: [
            //         "Francisco L. de Caldas Filho", 
            //         "Lucas Mauricio Castro e Martins", 
            //         "Rafael Timoteo de Sousa Júnior",
            //         "Ingrid Palma Ataújo",
            //         "João Paulo C. L. da Costa",
            //         "Fábio L. L. de Medonça"
            //     ], 
            //     download: "download" 
            // },
            // { 
            //     year: 2017,
            //     title: "Distributed Data Service for Data management in Internet of Things Middleware", 
            //     authors: [
            //         "Ruben Cruz Huacarpuma", 
            //         "Maristela Terto de Holanda", 
            //         "Rafael Timoteo de Sousa Júnior",
            //         "Robson de Oliveira Albuquerque",
            //         "Luis Javier Garcia Villalba",
            //         "Tai-Hoon Kim"
            //     ], 
            //     download: "download" 
            // },
            // { 
            //     year: 2017,
            //     title: "Proposição de um modelo e sistema de gerenciamento de dados distribuídos para internet das coisas - GDDIoT", 
            //     authors: [
            //         "Ruben Cruz Huacarpuma"
            //     ], 
            //     download: "download" 
            // },
            // { 
            //     year: 2017,
            //     title: "Security analysis of a proposed internet of things middleware", 
            //     authors: [
            //         "Hiro Gabriel Cerqueira Ferreira",
            //         "Rafael Timóteo de Sousa Junior"
            //     ], 
            //     download: "download" 
            // },
            // { 
            //     year: 2017,
            //     title: "Proposta de adoção de microsserviços em IoT", 
            //     authors: [
            //         "Lucas M. C. e Martins",
            //         "Francisco L. de Caldas Filho",
            //         "Rafael Timóteo de Sousa Junior",
            //         "William F. Giozza",
            //         "João Paulo C. L. da Costa"
            //     ], 
            //     download: "download" 
            // },
            // { 
            //     year: 2017,
            //     title: "Gerenciamento de Serviços IoT com Gateway Semântico", 
            //     authors: [
            //         "Lucas M. C. e Martins",
            //         "Francisco L. de Caldas Filho",
            //         "Rafael Timóteo de Sousa Junior",
            //         "Ingrid P. Araújo",
            //         "Fábio L. L de medonça",
            //         "João Paulo C. L. da Costa"
            //     ], 
            //     download: "download" 
            // },
            // { 
            //     year: 2016,
            //     title: "Designand Evaluation of a Services Interface for the Internet of Things", 
            //     authors: [
            //         "Caio César de Melo Silva", 
            //         "Hiro Gabriel Verqueira Ferreira", 
            //         "Rafael Timoteo de Sousa Júnior",
            //         "Fábio Buiati",
            //         "Luis Javier García Villalba"
            //     ], 
            //     download: "download" 
            // },
            // { 
            //     year: 2016,
            //     title: "Proposta de auto-registro de serviços pelos dispositivos em ambientes de IoT", 
            //     authors: [
            //         "Caio C. M.Silva",
            //         "Francisco L. de Caldas",
            //         "Felipe D. Machado",
            //         "Fábio L. L. Medonça",
            //         "Rafael T. de Sousa Jr."
            //     ], 
            //     download: "download" 
            // },
            // { 
            //     year: 2016,
            //     title: "O auto-registro de serviços por dispositivos contribui com a escalabilidade de ambientes de IoT", 
            //     authors: [
            //         "Caio C. M.Silva",
            //         "Francisco L. de Caldas",
            //         "Felipe D. Machado",
            //         "Fábio L. L. Medonça",
            //         "Rafael T. de Sousa Jr."
            //     ], 
            //     download: "download" 
            // },
            // { 
            //     year: 2016,
            //     title: "Concepção e Desenvolvimento de um Serviço Distribuido de Coleta e Tratamento de Dados para Ambientes de Internet das Coisas", 
            //     authors: [
            //         "Ruben C. Huacarpuma",
            //         "Maristela Holanda",
            //         "Sérgio Lifschitz",
            //         "Rafael T. de Sousa Júnior."
            //     ], 
            //     download: "download" 
            // },
            // { 
            //     year: 2016,
            //     title: "Proposta de auto-registro de serviços pelos dispositivos em ambientes de IoT", 
            //     authors: [
            //         "Caio C. M.Silva",
            //         "Francisco L. de Caldas",
            //         "Felipe D. Machado",
            //         "Fábio L. L. Medonça",
            //         "Rafael T. de Sousa Jr."
            //     ], 
            //     download: "download" 
            // },
            // { 
            //     year: 2016,
            //     title: "RAISe: REST API Approach for IoT Services", 
            //     authors: [
            //         "Hiro Gabriel Cerqueira Ferreira",
            //         "Caio César de Melo e Silva",
            //         "Rafael T. de Sousa Jr."
            //     ], 
            //     download: "download" 
            // },
            // { 
            //     year: 2014,
            //     title: "A ubiquitous communication architecture integrating trasparent UPnP and REST APIs", 
            //     authors: [
            //         "Hiro Gabriel Cerqueira Ferreira", 
            //         "Edna Dias Canedi", 
            //         "Rafael Timoteo de Sousa Júnior"
            //     ], 
            //     download: "download" 
            // },
            // { 
            //     year: 2014,
            //     title: "Arquitetura de Middleware para Internet das Coisas", 
            //     authors: [
            //         "Hiro Gabriel Cerqueira Ferreir",
            //     ], 
            //     download: "download" 
            // },
            // { 
            //     year: 2014,
            //     title: "Proposal of a Secure, Deployable and Transparent Middleware for Internet of Things", 
            //     authors: [
            //         "Hiro Gabriel Cerqueira Ferreir",
            //         "Rafael Timóteo de Sousa Júnior",
            //         "Flávio Elias Gomes de Deus",
            //         "Edna Dias Canedo"
            //     ], 
            //     download: "download" 
            // },
            // { 
            //     year: 2013,
            //     title: "IoT Architecture to Enable Intercommunication Through REST API and UPnP Using IP, ZigBee and Arduino", 
            //     authors: [
            //         "Hiro Gabriel Cerqueira Ferreira", 
            //         "Edna Dias Canedo", 
            //         "Rafael Timoteo de Sousa Júnior"
            //     ], 
            //     download: "download" 
            // },
        ]

        export default Publications
