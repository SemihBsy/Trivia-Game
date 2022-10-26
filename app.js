
//let questionData;

// const _question = document.getElementById('question');
// const _options = document.querySelector('.quiz-options');
// const _checkBtn = document.getElementById('check-answer');
// const _playAgainBtn = document.getElementById('play-again');
// const _result = document.getElementById('result');
// const _correctScore = document.getElementById('correct-score');
// const _totalQuestion = document.getElementById('total-question');

// const $xquestion = $('#question');
// const $xoptions = $('.quiz-options');
// const $xcheckBtn = $('#check-answer');
// const $xplayAgainBtn = $('#play-again');
// const $xresult = $('#result');
// const $xcorrectScore = $('#correct-score');
// const $xtotalQuestion = $('#total-question');

const $xForce = {
    xquestion: $('#question'),
    xoptions: $('.quiz-options'),
    xcheckBtn: $('#check-answer'),
    xplayAgainBtn: $('#play-again'),
    xresult: $('#result'),
    xcorrectScore: $('#correct-score'),
    xtotalQuestion: $('#total-question')
}

let correctAnswer = "";
let askedCount = 0;
let correctScore = askedCount;
let totalQuestion = 18

$(document).ready(function() {
    loadQuestion();
    $xForce.xtotalQuestion.text(totalQuestion);
    $xForce.xcorrectScore.text(correctScore);
});




// load question from API
function loadQuestion(){

    const promise = $.ajax({
        url: `https://opentdb.com/api.php?amount=1`
    })
    promise.then(
        (data) => {
            //questionData = data;
    showQuestion(data.results[0]);
})

}
// display question and options
function showQuestion(data){
    let correctAnswer = data.correct_answer;
    let incorrectAnswer = data.incorrect_answers;
    let optionsList = incorrectAnswer;
    optionsList.splice(Math.floor(Math.random() * (incorrectAnswer.length + 1)), 0, correctAnswer); // inserting correct answer in random position in the options list
    
    $xForce.xquestion.append(`${data.question} <br> <span class ="category">${data.category} </span>`);
    $xForce.xoptions.append(`${optionsList.map((option, index) => `
    <li> ${index + 1}. <span> ${option} </span> </li>`).join('')}`);
    selectOption();
}

// options selection
function selectOption(){
    $('$xForce.xoptions li').each((option) => {
        option.click(() => {
            console.log("hello");
        });
    });
}
