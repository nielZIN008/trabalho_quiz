const questions = [
    {
        question: "O que é aquecimento global?",
        choices: [
            "Aumento da temperatura média da Terra",
            "Resfriamento da Terra",
            "Desmatamento das florestas",
            "Poluição das águas",
        ],
        correct: 0,
    },
    {
        question: "Qual é a principal causa do efeito estufa?",
        choices: [
            "Gases de combustíveis fósseis",
            "Desmatamento",
            "Uso de energia solar",
            "Reciclagem de lixo",
        ],
        correct: 0,
    },
    {
        question: "O que é desmatamento?",
        choices: [
            "Corte de árvores",
            "Plantio de árvores",
            "Poluição dos oceanos",
            "Reciclagem de papel",
        ],
        correct: 0,
    },
    {
        question: "Qual é a fonte de energia renovável?",
        choices: ["Petróleo", "Carvão", "Energia solar", "Gás natural"],
        correct: 2,
    },
    {
        question: "O que é biodiversidade?",
        choices: [
            "Variedade de vida na Terra",
            "Poluição do ar",
            "Quantidade de espécies extintas",
            "Água potável disponível",
        ],
        correct: 0,
    },
    {
        question: "O que podemos reciclar?",
        choices: [
            "Papel, plástico, vidro e metal",
            "Resíduos orgânicos",
            "Água e ar",
            "Som e luz",
        ],
        correct: 0,
    },
    {
        question: "O que é energia eólica?",
        choices: [
            "Energia gerada pelo vento",
            "Energia gerada pela água",
            "Energia gerada pelo sol",
            "Energia gerada pelo carvão",
        ],
        correct: 0,
    },
    {
        question: "O que é poluição do ar?",
        choices: [
            "Contaminação da atmosfera",
            "Desmatamento",
            "Reciclagem de lixo",
            "Plantio de árvores",
        ],
        correct: 0,
    },
    {
        question: "Como podemos economizar água?",
        choices: [
            "Tomando banhos curtos",
            "Lavando o carro todos os dias",
            "Regando as plantas ao meio-dia",
            "Deixando torneiras abertas",
        ],
        correct: 0,
    },
    {
        question: "O que é efeito estufa?",
        choices: [
            "Aquecimento da Terra devido à retenção de calor pelos gases na atmosfera",
            "Resfriamento da Terra",
            "Desmatamento das florestas",
            "Poluição das águas",
        ],
        correct: 0,
    },
];

function startQuiz() {
    const name = document.getElementById("name").value;
    if (name.trim() === "") {
        alert("Por favor, insira seu nome.");
        return;
    }

    document.getElementById("welcome").style.display = "none";
    document.getElementById("quiz").style.display = "block";
    document.getElementById(
        "greeting"
    ).innerText = `Olá, ${name}! Boa sorte no quiz!`;

    const questionsDiv = document.getElementById("questions");
    questionsDiv.innerHTML = "";

    questions.forEach((q, index) => {
        const questionElement = document.createElement("div");
        questionElement.classList.add("question");
        questionElement.innerHTML = `
            <p>${index + 1}. ${q.question}</p>
            ${q.choices
                .map(
                    (choice, i) => `
                <label>
                    <input type="radio" name="question${index}" value="${i}">
                    ${choice}
                </label><br>
            `
                )
                .join("")}
        `;
        questionsDiv.appendChild(questionElement);
    });
}

function submitQuiz() {
    let score = 0;
    questions.forEach((q, index) => {
        const selectedOption = document.querySelector(
            `input[name="question${index}"]:checked`
        );
        if (selectedOption && parseInt(selectedOption.value) === q.correct) {
            score++;
        }
    });

    document.getElementById("quiz").style.display = "none";
    document.getElementById("result").style.display = "block";
    document.getElementById(
        "score"
    ).innerText = `Você acertou ${score} de ${questions.length} perguntas.`;
}

function restartQuiz() {
    document.getElementById("result").style.display = "none";
    document.getElementById("welcome").style.display = "block";
}
