const questions = [
    { question: "Qual é a capital da França?", options: ["Paris", "Londres", "Berlim", "Madri"], answer: "Paris" },
    { question: "Qual é o maior planeta do sistema solar?", options: ["Terra", "Júpiter", "Saturno", "Marte"], answer: "Júpiter" },
    { question: "Qual é o elemento químico com o símbolo O?", options: ["Ouro", "Osmio", "Oxigênio", "Odin"], answer: "Oxigênio" },
    { question: "Quem escreveu 'Dom Quixote'?", options: ["Gabriel García Márquez", "Miguel de Cervantes", "Jorge Luis Borges", "Pablo Neruda"], answer: "Miguel de Cervantes" },
    { question: "Qual é o maior oceano do planeta?", options: ["Atlântico", "Índico", "Ártico", "Pacífico"], answer: "Pacífico" },
    { question: "Em que ano o homem pisou na Lua pela primeira vez?", options: ["1969", "1959", "1972", "1965"], answer: "1969" },
    { question: "Qual é o nome da série de livros escrita por J.K. Rowling?", options: ["O Senhor dos Anéis", "Harry Potter", "As Crônicas de Nárnia", "Percy Jackson"], answer: "Harry Potter" },
    { question: "Qual é a capital da Austrália?", options: ["Sydney", "Melbourne", "Canberra", "Brisbane"], answer: "Canberra" },
    { question: "Qual é o maior deserto do mundo?", options: ["Sahara", "Gobi", "Antártica", "Kalahari"], answer: "Antártica" },
    { question: "Quem pintou a Mona Lisa?", options: ["Leonardo da Vinci", "Vincent van Gogh", "Pablo Picasso", "Claude Monet"], answer: "Leonardo da Vinci" },
    { question: "Qual é a língua oficial do Brasil?", options: ["Espanhol", "Português", "Inglês", "Francês"], answer: "Português" },
    { question: "Qual planeta é conhecido como o 'Planeta Vermelho'?", options: ["Marte", "Vênus", "Mercúrio", "Netuno"], answer: "Marte" },
    { question: "Quem foi o primeiro presidente dos Estados Unidos?", options: ["Abraham Lincoln", "George Washington", "Thomas Jefferson", "John Adams"], answer: "George Washington" },
    { question: "Qual é o maior animal terrestre?", options: ["Elefante", "Girafa", "Hipopótamo", "Rinoceronte"], answer: "Elefante" },
    { question: "Qual é o nome do nosso planeta?", options: ["Terra", "Marte", "Vênus", "Júpiter"], answer: "Terra" },
    { question: "Qual é o processo pelo qual as plantas produzem seu próprio alimento?", options: ["Respiração", "Fermentação", "Fotossíntese", "Digestão"], answer: "Fotossíntese" },
    { question: "Quem descobriu a penicilina?", options: ["Alexander Fleming", "Louis Pasteur", "Marie Curie", "Gregor Mendel"], answer: "Alexander Fleming" },
    { question: "Qual é a fórmula química da água?", options: ["H2O", "CO2", "NaCl", "O2"], answer: "H2O" },
    { question: "Qual país é conhecido como a 'Terra do Sol Nascente'?", options: ["Japão", "China", "Coreia do Sul", "Tailândia"], answer: "Japão" },
    { question: "Qual é o menor país do mundo?", options: ["Mônaco", "San Marino", "Vaticano", "Liechtenstein"], answer: "Vaticano" },
    { question: "Qual é o metal líquido à temperatura ambiente?", options: ["Mercúrio", "Ouro", "Prata", "Cobre"], answer: "Mercúrio" },
    { question: "Qual é o nome da maior cadeia de montanhas do mundo?", options: ["Andes", "Himalaia", "Rochosas", "Alpes"], answer: "Himalaia" }
];

let currentQuestionIndex = 0;
let errorCount = 0;
const maxErrors = 5;
let optionSelected = false;

function loadQuestion() {
    const questionContainer = document.getElementById("question");
    const optionsContainer = document.getElementById("options");
    const feedbackContainer = document.getElementById("feedback");
    const statusContainer = document.getElementById("status");
    const nextButton = document.getElementById("next-button");

    if (currentQuestionIndex >= questions.length) {
        questionContainer.textContent = "Fim do quiz!";
        optionsContainer.innerHTML = "";
        feedbackContainer.textContent = "";
        nextButton.style.display = "none";
        return;
    }

    const currentQuestion = questions[currentQuestionIndex];
    questionContainer.textContent = currentQuestion.question;
    optionsContainer.innerHTML = "";

    currentQuestion.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.onclick = () => {
            checkAnswer(option);
            optionSelected = true;
            nextButton.disabled = false; // Habilita o botão "Próxima" quando uma opção for selecionada
        };
        optionsContainer.appendChild(button);
    });

    feedbackContainer.textContent = "";
    statusContainer.textContent = `Erros: ${errorCount}/${maxErrors}`;
    nextButton.disabled = true; // Desabilita o botão "Próxima" inicialmente
}

function checkAnswer(selectedOption) {
    const feedbackContainer = document.getElementById("feedback");
    const statusContainer = document.getElementById("status");
    const currentQuestion = questions[currentQuestionIndex];
    
    if (selectedOption === currentQuestion.answer) {
        feedbackContainer.textContent = "Correto!";
    } else {
        feedbackContainer.textContent = "Incorreto!";
        errorCount++;
    }

    statusContainer.textContent = `Erros: ${errorCount}/${maxErrors}`;

    if (errorCount >= maxErrors) {
        document.getElementById("question").textContent = "Você foi eliminado!";
        document.getElementById("options").innerHTML = "";
        document.getElementById("next-button").style.display = "none";
    }
}

function nextQuestion() {
    if (errorCount < maxErrors && optionSelected) {
        currentQuestionIndex++;
        loadQuestion();
        optionSelected = false; // Reseta o status de seleção de opção
    }
}

// Inicializar o quiz
loadQuestion();
