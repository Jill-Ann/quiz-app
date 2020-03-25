const intro = document.getElementById("intro");
const start = document.getElementById("start");
const startButton = document.getElementById("start-button")
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const imageContainer = document.getElementById("image-container");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("score-container");
const finalImageContainer = document.getElementById("final-image-container");
const finalScore = document.getElementById("final-score");

let questions = [
    {
        question : "Question 1<br><br>If something's <i><b>not your cup of tea</b></i>, it means that...",
        imgSrc : "images/tea.png",
        choiceA : "A.  it's not the type of thing that you like.",
        choiceB : "B.  it's too expensive for you.",
        choiceC : "C.  you prefer coffee.",
        correct : "A"
    },{
        question : "Question 2<br><br>Your friend tells you that <i><b>there are plenty more fish in the sea</b></i>. She says this because...",
        imgSrc : "images/fish.png",
        choiceA : "A.  there was no salmon left at the supermarket.",
        choiceB : "B.  you just lost 50€.",
        choiceC : "C.  you've just broken up with your boyfriend / girlfriend.",
        correct : "C"
    },{
        question : "Question 3<br><br>If you <i><b>rock the boat</b></i>, you...",
        imgSrc : "images/ship.png",
        choiceA : "A.  are taking a year off to sail around the world.",
        choiceB : "B.  do or say something that will cause problems.",
        choiceC : "C.  have a dangerous lifestyle.",
        correct : "B"
    },{
        question : "Question 4<br><br><i><b>You can't teach an old dog new tricks</b></i> means that...",
        imgSrc : "images/dog.png",
        choiceA : "A.  it's hard for older people to do physical exercise.",
        choiceB : "B.  it's time to get a dog trainer.",
        choiceC : "C.  it can be difficult to make someone change their habits.",
        correct : "C"
    },{
        question : "Question 5<br><br>If something is <i><b>out of this world</b></i>, it's...",
        imgSrc : "images/rocket.png",
        choiceA : "A.  crazy in a bad way.",
        choiceB : "B.  extremely good or impressive.",
        choiceC : "C.  impossible to achieve.",
        correct : "B"
    }
];

// variables
const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
// const questionTime = 10; // 10s
let score = 0;

// render question
function renderQuestion(){
    let q = questions[runningQuestion];

    question.innerHTML = "<p>"+ q.question +"</p>";
    imageContainer.innerHTML = "<img src="+ q.imgSrc +">";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
}

start.addEventListener("click",startQuiz);

// start quiz
function startQuiz(){
    intro.classList.add('hide')
    startButton.classList.add('hide')
    renderQuestion();
    quiz.classList.remove('hide')
    renderProgress();
}

// render progress
function renderProgress(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='progress-dots' id="+ qIndex +"></div>";
    }
}

// rendercounter - what makes the questions move on after 10 secs - deleted

// checkAnwer
function checkAnswer(answer){
    if( answer == questions[runningQuestion].correct){
        // answer is correct
        score++;
        // change progress color to green
        answerIsCorrect();
    }else{
        // answer is wrong
        // change progress color to red
        answerIsWrong();
    }
    count = 0;
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }else{
        // end the quiz and show the score
        scoreRender();
    }
}

// answer correct
function answerIsCorrect(){
    document.getElementById(runningQuestion).style.backgroundColor = "#32CD32";
}

// answer wrong
function answerIsWrong(){
    document.getElementById(runningQuestion).style.backgroundColor = "#FF0000";
}

// score render
function scoreRender(){
    quiz.classList.add('hide');
    scoreDiv.style.display = "block";

    // calculate the amount of question percent answered by the user
    const scorePerCent = Math.round(100 * score/questions.length);



    let img = "images/abacus.png";

    finalImageContainer.innerHTML = "<img src="+ img +">";
    finalScore.innerHTML += "<p>"+ scorePerCent +"%</p>";
}
