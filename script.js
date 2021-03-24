// import questions
import { questions } from './questions.js'

// Dom elements
const btnValid = document.querySelector('#btn-validation');
const btnReset = document.querySelector('#btn-reset');
const divScore = document.querySelector('#score-container');
const questionsContainer = document.querySelector('#questions-container')

// variables
let score = 0;

// functions

/* function checkAnswers() {
    questions.forEach(question => {
        const checkEach = questionDiv.querySelectorAll('input')

    })
} */

function setScore() {
    questions.forEach(question => {
        const questionDiv = document.getElementById(question.id);
        const answerBtns = questionDiv.querySelectorAll('input')
        answerBtns.forEach(answerBtn => {
            if (answerBtn.checked && answerBtn.value == question.correctAnswer) {
                score++
            }
        })
    })
}

/* function checkIfAnswered() {

    questions.forEach(question => {
        const questionDiv = document.getElementById(question.id);
        const answerBtns = questionDiv.querrySelectorAll('input')
        answerBtns.forEach(answerBtn => {
            if (answerBtn.checked) {

                break;
            }

        })
    })
} */

function displayResult() {
    const paragraphe = document.createElement("p")
    paragraphe.textContent = "votre score est de " + score
    divScore.appendChild(paragraphe);
}

function handleClick() {
    setScore()
    displayResult()
}

function resetAnswers() {
    const checkBoxes = document.querySelectorAll('input')
    checkBoxes.forEach(cb => {
        cb.checked = false
    })
}


btnValid.addEventListener('click', handleClick)
btnReset.addEventListener('click', resetAnswers)

questions.forEach(question => {
    const questionDiv = document.createElement('div')
    questionDiv.id = question.id
    questionDiv.classList.add('question-div')
    questionDiv.classList.add('mb-3')
    const questionH3 = document.createElement('h5')
    questionH3.textContent = question.question
    questionDiv.appendChild(questionH3)
    questionsContainer.appendChild(questionDiv)

    question.answers.forEach(answer => {
        let answerDiv = document.createElement('div')
        let answerRadioButton = document.createElement('input')
        answerRadioButton.setAttribute('type', 'radio');
        answerRadioButton.setAttribute('name', question.id);
        answerRadioButton.setAttribute('value', question.answers.indexOf(answer));
        answerRadioButton.classList.add('mx-2');
        let answerLabel = document.createElement('label');
        answerLabel.textContent = answer
        answerDiv.classList.add('d-inline')
        answerDiv.classList.add('px-3')
        answerDiv.appendChild(answerRadioButton)
        answerDiv.appendChild(answerLabel)
        questionDiv.appendChild(answerDiv)
    })
})