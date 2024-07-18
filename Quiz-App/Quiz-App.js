const questions = [
    {
        question: "which one is a wild animal",
        answers: [
            { text: 'Goat', correct: false },
            { text: 'Cow', correct: false },
            { text: 'lion', correct: true },
            { text: 'Sheep', correct: false}

        ]
    },
    
    {
        question: " How many legs does a spider have?",
        answers: [
            { text: 'eight', correct: true },
            { text: 'four', correct: false },
            { text: 'five', correct: false },
            { text: 'ten', correct: false }
        ]
    },

    {
        question: " What is something you hit with a hammer?",
        answers: [
            { text: 'screw', correct: false },
            { text: 'tape', correct: false },
            { text: 'nail', correct: true },
            { text: 'car', correct: false }
        ]
    },
    {
        question: "What's the name of a place you go to see lots of animals?",
        answers: [
            { text: 'home', correct: false },
            { text: 'zoo', correct: true },
            { text: 'museum', correct: false },
            { text: 'pastry', correct: false }
        ]
    },
    {
        question: "  If you freeze water, what do you get?",
        answers: [
            { text: 'ice', correct: true },
            { text: 'smoke', correct: false },
            { text: 'vapor', correct: false },
            { text: 'juice', correct: false },
        ]
    },
    {
        question: "Which Disney movie is Elsa in? ",
        answers: [
            { text: 'frozen', correct: true },
            { text: 'barbie', correct: false },
            { text: 'Mega Mind', correct: false },
            { text: 'Lion King', correct: false },
        ]
    }

]

const ansBtn = document.querySelector('.answerBtn');
const questionElement = document.querySelector('.questions');
const nextBtn = document.querySelector('.nxtBtn');
const next = document.querySelector(".next");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {

    currentQuestionIndex = 0;
    score = 0;
    nextBtn.innerHTML = 'Next';
    showQuestion();
}

function showQuestion() {


    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add('answer');
        ansBtn.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer)
    });
}


function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";

    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    }

    else {
        selectedBtn.classList.add("incorrect");

    }
    Array.from(ansBtn.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }

        button.disabled = true;
    })

    next.style.display = "block";
}




function showScore() {

    resetState();
    questionElement.innerHTML = `you scored ${score} out of ${questions.length}`;
    nextBtn.innerHTML = "Play Again";
    next.style.display = "block";  
}




function handleNextButton() {

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    }
    else {
        showScore();
    }
    
}



nextBtn.addEventListener("click", function () {
    
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    }
    
    else {
        startQuiz()
    }
}
)


startQuiz();



function resetState() {

    next.style.display = "none";
    while (ansBtn.firstChild) {
        ansBtn.removeChild(ansBtn.firstChild);
    }}


