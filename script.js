const profissionais = [
    {
        nome: "Psic. Eliane Schlichting",
        foto: "img/Eli.jpg",
        descricao: "Psicoterapeuta, bacharel em Psicologia, com ênfase em abordagem sistêmica e terapias integrativas, Eliane possui mais de 17 anos de experiência em saúde mental e desenvolvimento humano. Também é fundadora e gestora do Ateliê do Ser. Sua abordagem cuidadosa e acolhedora auxilia os clientes a explorarem seu mundo interior e encontrarem caminhos para o equilíbrio emocional e relacional a partir da tríade corpo-mente-alma",
        servicos: [
            "Psicoterapia Sistêmica",
            "Constelação Familiar",
            "Mentoria de Desenvolvimento Pessoal e Profissional"
        ],
       
    },

    {
        nome: "Psi. Ana Lúcia Simoes",
        foto: "img/ana.jpg",
        descricao: "Ana Lúcia é psicóloga clínica com 20 anos de experiência em Teoria Psicanalítica. Com uma abordagem acolhedora e sensível, ela oferece um espaço seguro para ajudar seus pacientes a compreenderem as conexões entre mente, corpo e comportamento, promovendo autoconhecimento, equilíbrio emocional e bem-estar.",
        servicos: [
            "Psicanálise Clínica"
            
        ],
        
    },

    {
        nome: "Fisiot. Rosangela Silva",
        foto: "img/rosa.jpg",
        descricao: "Fisioterapeuta especializada em Microfisioterapia e Terapia Manual. Com uma abordagem focada em aliviar, tratar dores e promover o bem-estar físico, Rosângela utiliza técnicas eficazes para proporcionar relaxamento e recuperação de forma natural e integrada.",
        servicos: [
            "Microfisioterapia",
            "Drenagem Linfática",
            "Massagem Relaxante"
        ],
        
    },

    {
        nome: "Terap. Giselle Roseni",
        foto: "img/gis.jpg",
        descricao: "Especialista em Reflexoterapia Podal Físico e Emocional e técnicas da Medicina Chinesa, Giselle utiliza práticas como Moxabustão, Auriculoterapia, Ventosaterapia, Guasha e Acupuntura Estética Facial. Com uma abordagem acolhedora e sensível, ela promove o equilíbrio físico, mental e emocional, proporcionando um espaço seguro e focado na saúde holística de seus clientes.",
        servicos: [
            "Reflexoterapia",
            "Acupuntura",
            "Ventosaterapia",
            "Auriculoterapia",
            "Acupuntura Estética Facial"
        ],
        
    },

    {
        nome: "Yoga. Rogélia Silva",
        foto: "img/yoga.jpg",
        descricao: "Instrutora de Yoga na tradição de Shri T. Krishnamacharya e T. K. V. Desikachar, Rogélia compartilha sua paixão pelo yoga como uma ferramenta para o equilíbrio e bem-estar. Seu compromisso em transmitir os ensinamentos do yoga com amor e consciência ajuda os clientes a encontrarem paz e serenidade em meio ao caos do mundo moderno.",
        servicos: [
            "Aulas de Yoga Tradicional",
            "Práticas para Equilíbrio Físico e Mental",
            "Técnicas de Relaxamento e Meditação"
        ],
        
    },

    {
        nome: "Terap. Edna M Contato",
        foto: "img/edna.jpg",
        descricao: "Especialista em terapia floral, terapia energética e reiki, Edna utiliza suas práticas para promover o equilíbrio emocional e o bem-estar holístico. Sua dedicação é evidente em cada sessão, onde oferece um espaço seguro e acolhedor para a jornada de cura de seus clientes.",
        servicos: [
            "Florais de Bach",
            "Terapia Energética",
            "Reiki"
        ],
        
    }
    
];

let indiceAtual = 0;

function atualizarProfissional() {

    const profissional = profissionais[indiceAtual];

    document.getElementById("foto").src =
        profissional.foto;

    document.getElementById("nome").textContent =
        profissional.nome;

    document.getElementById("descricao").textContent =
        profissional.descricao;

    const lista =
        document.getElementById("servicos");

    lista.innerHTML = "";

    profissional.servicos.forEach(servico => {

        const item =
            document.createElement("li");

        item.textContent = servico;

        lista.appendChild(item);
    });

}

document.getElementById("proximo")
.addEventListener("click", () => {

    indiceAtual++;

    if (indiceAtual >= profissionais.length) {
        indiceAtual = 0;
    }

    atualizarProfissional();
});

document.getElementById("anterior")
.addEventListener("click", () => {

    indiceAtual--;

    if (indiceAtual < 0) {
        indiceAtual = profissionais.length - 1;
    }

    atualizarProfissional();
});

atualizarProfissional();






////////////

const elementos = document.querySelectorAll('.hidden');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});

elementos.forEach(el => observer.observe(el));
/////////
const slides = document.querySelector('.slides');
const imagens = document.querySelectorAll('.slides img');

const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

let index = 0;

function atualizarCarrossel() {
  slides.style.transform = `translateX(-${index * 100}%)`;
}

next.addEventListener('click', () => {
  index++;

  if (index >= imagens.length) {
    index = 0;
  }

  atualizarCarrossel();
});

prev.addEventListener('click', () => {
  index--;

  if (index < 0) {
    index = imagens.length - 1;
  }

  atualizarCarrossel();
});

///////

