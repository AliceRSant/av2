const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const perguntas = [
    {
        enunciado: "Prepare-se para testar seu conhecimento sobre livros em geral. Que os jogos comecem... e que a sorte esteja sempre em seu favor.",
        alternativas: [
        {
                texto: "Começar ☺︎",
                afirmacao: "Você marcou:",
            }
        ],
        imagem: "capa.png"
    },
    {
        enunciado: "Fui à floresta porque queria viver deliberadamente; enfrentar apenas os fatos essenciais da vida.",
        alternativas: [
            {
                texto: "Walden",
                afirmacao: "Walden,",
            },
            {
                texto: "Moby Dick",
                afirmacao: "Moby Dick,",
            }
        ],
        
        
    
    },
    {
        enunciado: "a resposta certa é Walden, de H. D. Thoreau! :)",
        alternativas: [
            {
                texto: "Próximo ☺︎",
                afirmacao: "",
            }
        ],
        imagem: "walden.jpg" 
    },
    {
        enunciado: "Toda revolução começa com uma faísca.",
        alternativas: [
            {
                texto: "Maze Runner",
                afirmacao: "Maze Runner,",
            },
            {
                texto: "Jogos Vorazes",
                afirmacao: "Jogos Vorazes,",
            }
        ],
    
    },
    {
        enunciado: "a resposta certa é Jogos Vorazes, de Suzanne Collins! :)",
        alternativas: [
            {
                texto: "Próximo ♡︎",
                afirmacao: "",
            }
        ],
        imagem: "thg.jpg" 
    },
    {
        enunciado: "Quando acordei hoje de manhã, eu sabia quem eu era, mas acho que já mudei muitas vezes desde então.",
        alternativas: [
            {
                texto: "As Vantagens de Ser Invisível",
                afirmacao: "As Vantagens de Ser Invisível,",
            },
            {
                texto: "Alice no País das Maravilhas",
                afirmacao: "Alice no País das Maravilhas,",
            }
        ],
       
    },
    {
        enunciado: "a resposta Alice no País das Maravilhas, de Lewis Caroll! :)",
        alternativas: [
            {
                texto: "Próximo ♡︎",
                afirmacao: "",
            }
        ],
        imagem: "alice.jpg"
    },
    {
        enunciado: "Qual é o pássaro que pode voar a uma altitude superior a 8.000 metros, quase na estratosfera? ⚝✩𓅮",
        alternativas: [
            {
                texto: "Condor-andino",
                afirmacao: "Condor-Andino,",
            },
            {
                texto: "Falcão-peregrino",
                afirmacao: "Falcão-Peregrino,",
            }
        ],
        imagem: "https://i.pinimg.com/736x/86/e6/d1/86e6d14e3cac87cb538281990edcd28a.jpg" 
    },
    {
        enunciado: "a resposta certa é Condor-Andino! :)",
        alternativas: [
            {
                texto: "Próximo ♡︎",
                afirmacao: "",
            }
        ],
        imagem: "https://i.pinimg.com/474x/5d/1c/76/5d1c764f5f79272976ffd81a4c2e4730.jpg" 
    },
    {
        enunciado: "Qual pássaro tem a habilidade de dormir com um olho aberto e metade do cérebro ativo para se proteger de predadores? ರಠ",
        alternativas: [
            {
                texto: "Pato",
                afirmacao: "e Pato",
            },
            {
                texto: "Coruja",
                afirmacao: "e Coruja",
            }
        ],
        imagem: "https://i.pinimg.com/736x/56/c1/71/56c171496a435c168f27fccd174583bd.jpg" 
    },
    {
        enunciado: "a resposta certa é Coruja! :)",
        alternativas: [
            {
                texto: "Terminei ♡︎",
                afirmacao: "",
            }
        ],
        imagem: "https://i.pinimg.com/474x/cc/0f/5b/cc0f5bab0f655342516aa8835d374f0e.jpg" 
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = ""; 
   
    const enunciado = document.createElement("p");
    enunciado.textContent = perguntaAtual.enunciado;
    caixaPerguntas.appendChild(enunciado);
    
   
    if (perguntaAtual.imagem) {
        const img = document.createElement("img");
        img.src = perguntaAtual.imagem;
        img.alt = "Imagem relacionada";
        caixaPerguntas.appendChild(img);
    }
    
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Se suas respostas foram: Corvo, Beija-flor, Corvo-Marinho, Condor-Andino e Coruja, parabéns! Você acertou tudo ♡︎♡︎♡︎";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = ""; 

   
    const enunciado = document.createElement("p");
    enunciado.textContent = perguntaAtual.enunciado;
    caixaPerguntas.appendChild(enunciado);
    
  
    if (perguntaAtual.imagem) {
        const img = document.createElement("img");
        img.src = perguntaAtual.imagem;
        img.alt = "Imagem relacionada";
        img.style.width = "280px"; 
        img.style.height = "auto"; 
        caixaPerguntas.appendChild(img);
    }
    
    caixaAlternativas.textContent = ""; 
    mostraAlternativas();
}
