let questionData;


const $xForce = {
    xquestion: $('#question'),
    xoptions: $('.quiz-options'),
    xcheckBtn: $('#check-answer'),
    xplayAgainBtn: $('#play-again'),
    xresult: $('#result'),
    xcorrectScore: $('#correct-score'),
    xtotalQuestion: $('#total-question'),
}

// const xquestion = document.getElementById('question');
// const xoptions = document.querySelector('.quiz-options');
// const xcheckBtn = document.getElementById('check-answer');
// const xplayAgainBtn = document.getElementById('play-again');
// const xresult = document.getElementById('result');
// const xcorrectScore = document.getElementById('correct-score');
// const xtotalQuestion = document.getElementById('total-question');

let correctAnswer = ""; 
let correctScore = askedCount = 0;
let totalQuestion = 10;

// load question from API
function loadQuestion(){

    const result = $.ajax({
        url: `https://opentdb.com/api.php?amount=1`
    })
    result.then(
        (data) => {
            questionData = data
            console.log(data);
            $xForce.xresult.html("");
            showQuestion(data.results[0])
        })
} 

loadQuestion()

// event listeners
function eventListeners(){
    $xForce.xcheckBtn.on("click", checkAnswer);
    $xForce.xplayAgainBtn.on("click", restartQuiz);
}

$(function() {
    loadQuestion();
    eventListeners();
    $xForce.xtotalQuestion.text() = totalQuestion;
    $xForce.xcorrectScore.text() = correctScore;
});

// display question and options
function showQuestion(data){
    $xForce.xcheckBtn.prop('disabled', false);
    correctAnswer = data.correctAnswer;
    let incorrectAnswer = data.incorrectAnswers;
    let optionsList = incorrectAnswer;
    optionsList.splice(Math.floor(Math.random() * (incorrectAnswer.length + 1)), 0, correctAnswer);


}











