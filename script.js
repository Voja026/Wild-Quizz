// import questions
import {questions} from './questions.js'

// Dom elements
const btnValid = document.querySelector('#btn-validation');
const btnReset = document.querySelector('#btn-reset');
const divScore = document.querySelector('#score-container');
const answerDiv = document.querySelector('.answer-container');
const answerRadioBtn = document.querySelectorAll('.answerRadioBtn');

// 
let answerArray = []

function getAnswers() {
    answerDiv.forEach(div => {
        let divIndex = div.getAttribute('data-index')
        answerRadioBtn.forEach(btn => {
            if(btn.checked) {
                answerArray[divIndex] = btn.getAttribute('id')
            }
        })        
    });
}

alert(questions)


