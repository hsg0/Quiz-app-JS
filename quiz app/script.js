const questions = [
    {
        question: "How many continents are there?",
        answers: [
            { text: "2", correct: false},
            { text: "7", correct: true},
            { text: "8", correct: false},
            { text: "3", correct: false},
            { text: "9", correct: false},

        ]
    },{
        question: "which continent has the largest population?",
        answers: [
            { text: "Africa", correct: false},
            { text: "Antarctica", correct: false},
            { text: "Asia", correct: true},
            { text: "Australia", correct: false},
            { text: "Europe", correct: false},

        ]
    },{
        question: "what is the smallest continent by land area?",
        answers: [
            { text: "Asia", correct: false},
            { text: "Antarctica", correct: false},
            { text: "Australia", correct: true},
            { text: "South America", correct: false},
            { text: "North America", correct: false},

        ]
    },{
        question: "Which continent has the higest mountain peek?",
        answers: [
            { text: "North America", correct: false},
            { text: "South America", correct: false},
            { text: "Europe", correct: false},
            { text: "Asia", correct: true},
            { text: "Africa", correct: false},

        ]
    },{
        question: "What is the second smallest continent by land area?",
        answers: [
            { text: "Asia", correct: false},
            { text: "Europe", correct: true},
            { text: "South America", correct: false},
            { text: "Africa", correct: false},
            { text: "Antarctica", correct: false},

        ]
    }
]

const questionElement = document.getElementById("question")
const answerButtons = document.getElementById("answer-buttons")
const nextButton = document.getElementById("next-btn")

let currentQuestionIndex = 0
let score = 0

function startQuiz(){
    currentQuestionIndex = 0
    score = 0
    nextButton.innerHTML = "Next"
    showQuestion()

}

function showQuestion(){
    resetState()
    let currentQuestion = questions[currentQuestionIndex]
    let questionNo = currentQuestionIndex + 1
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button")
        button.innerHTML = answer.text
        button.classList.add("btn")
        answerButtons.appendChild(button)
        if(answer.correct){
            button.dataset.correct = answer.correct // Fixed typo
        }
        button.addEventListener("click", selectAnswer) // Fixed event listener
    })
}

function resetState(){
    nextButton.style.display = "none"
    while (answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild)
    }
}

function selectAnswer(e){
    const selectedBtn = e.target
    const isCorrect = selectedBtn.dataset.correct === "true"
    if (isCorrect){
        selectedBtn.classList.add("correct")
        score++
    }else{
        selectedBtn.classList.add("incorrect")
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true"){
            button.classList.add("correct") // Fixed typo
        }
        button.disabled = true
    })
    nextButton.style.display = "block"
}

function showScore(){
    resetState()
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`
    nextButton.innerHTML = "Play Again"
    nextButton.style.display = "block"
}

function handleNextButton(){
    currentQuestionIndex++
    if(currentQuestionIndex < questions.length){
        showQuestion()
    }else{
        showScore()
    }
}

nextButton.addEventListener('click', ()=> {
    if(currentQuestionIndex < questions.length){
        handleNextButton()
    }else {
        startQuiz()
    }
})


startQuiz()

















