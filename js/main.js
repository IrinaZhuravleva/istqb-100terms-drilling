// import { proverbList } from './proverbs.js';
const button = document.querySelector('button');
const nextButton = document.querySelector('button.nextButton');
const expressionNumber = document.querySelector('.expression-number');
const answersBlock = document.querySelector('.answers');
const version = document.querySelector('.version');

let questionCounter = 0;
let currentQuestionIndex = 0;
let length = base.length;
nextButton.disabled = true;

expressionNumber.innerText = `Term: ${currentQuestionIndex + 1} from ${data.length}`;

function showQuestion() {
    let questionToShow = selectQuestion();
    nextButton.disabled = true;
    addQuestionToSite(questionToShow);
}

let tralivaliShuffled = shuffle(data);

let questions = tralivaliShuffled.map(function (item, i) {
    return tralivaliShuffled[i].question;
});
let answers = tralivaliShuffled.map(function (item, i) {
    return tralivaliShuffled[i].answer;
});

function selectQuestion() {
    return tralivaliShuffled[currentQuestionIndex];
}

let correct;

function addQuestionToSite(item) {
    document.querySelector('.question').innerHTML = item.question;
    correct = item.answer;
    let shuffledAnswers = shuffle(answers);

    let readyAnswers = shuffledAnswers.length > 5 ? shuffledAnswers.slice(1, 5) : shuffledAnswers;
  
    if (!readyAnswers.includes(item.answer)) {
        readyAnswers.push(item.answer);
        readyAnswers.splice(0, 1);
        readyAnswers = shuffle(readyAnswers);
    }
    
    readyAnswers.forEach(function (answer, index) {
        answersBlock.insertAdjacentHTML("beforeend", "<li>" + answer + "</li> &nbsp;")
    })
}

answersBlock.addEventListener('click', (e) => {
    let target = e.target;
    if (correct == target.innerText) {
        document.querySelector('.checking-correct').style.display = 'block';
        if (nextButton.disabled) {
            nextButton.disabled = false;
        }

    } else {
        document.querySelector('.checking-incorrect').style.display = 'block';
        if (!nextButton.disabled) {
            nextButton.disabled = true;
        }
    }
})

function nextQuestion() {
    checkVisibility();
    document.querySelector('.question').innerHTML = tralivaliShuffled[currentQuestionIndex].question;
}

function nextButtonClickHandler() {

    if (currentQuestionIndex === tralivaliShuffled.length - 1) {
        clearAnswersHTML();
        if (document.querySelector('.checking-correct').style.display == 'block') {
            document.querySelector('.checking-correct').style.display = 'none';
        }
        document.querySelector('.nextButton').style.display = 'none';

        document.querySelector('.question').innerHTML = `Поздравляем!!! Вы справились))). Хотите продолжить?<button style="color: black; background-color: #ffffff;  " onClick="location.reload()">Повторить</button>`;
        
    } else {
        clearAnswersHTML();
        currentQuestionIndex++;
     
        document.querySelector('.expression-number').innerText = `Термин: ${currentQuestionIndex + 1} из ${tralivaliShuffled.length}`;
        checkVisibility()
        showQuestion();
    }
}

function clearAnswersHTML() {
    answersBlock.innerHTML = "";
}

nextButton.addEventListener('click', function () {
    questionCounter++;
    nextButtonClickHandler();
})

showQuestion();

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)); 
        [array[i], array[j]] = [array[j], array[i]];
    };
    return array;
}

function checkVisibility() {
    document.querySelectorAll('.checking').forEach(function (item) {
        if (item.style.display == 'block') {
            item.style.display = 'none';
        }
    });
}

function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}

function resetData() {
    // window.localStorage.removeItem('data');
    location.reload();
}

