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
                texto: "Próximo ☺︎",
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
                texto: "Próximo ☺︎",
                afirmacao: "",
            }
        ],
        imagem: "alice.jpg"
    },
    {
        enunciado: "Eu pensei que já havia explicado isso claramente antes. Eu não posso existir num mundo onde você não exista.",
        alternativas: [
            {
                texto: "Crepúsculo",
                afirmacao: "Crepúsculo,",
            },
            {
                texto: "Romeu e Julieta",
                afirmacao: "Romeu e Julieta,",
            }
        ],
        
    },
    {
        enunciado: "a resposta certa é Crepúsculo, de Stephenie Meyer! :)",
        alternativas: [
            {
                texto: "Próximo ☺︎",
                afirmacao: "",
            }
        ],
        imagem: "crepusculo.jpg" 
    },
    {
        enunciado: "Você arranjou a coisa, ela é sua, e mais cedo ou mais tarde acaba voltando às suas mãos.",
        alternativas: [
            {
                texto: "Frankstein",
                afirmacao: "Frankstein,",
            },
            {
                texto: "O Cemitério",
                afirmacao: "e O Cemitério",
            }
        ],
        
    },
    {
        enunciado: "a resposta certa é O Cemitério, de Stephen King! :)",
        alternativas: [
            {
                texto: "Terminei ☺︎",
                afirmacao: "",
            }
        ],
        imagem: "cemitério.jpg" 
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
    caixaPerguntas.textContent = "Se suas respostas foram: Corvo, Beija-flor, Corvo-Marinho, Condor-Andino e Coruja, parabéns! Você acertou tudo ☺︎";
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
