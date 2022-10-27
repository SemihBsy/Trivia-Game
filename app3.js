
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
let totalQuestion = 18;


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
    console.log(data)
    // inserting correct answer in random position in the options list
    optionsList.splice(Math.floor(Math.random() * (incorrectAnswer.length + 1)), 0, correctAnswer); 
    
    $xForce.xquestion.append(`${data.question} <br> <span class ="category">${data.category} </span>`);
    $xForce.xoptions.append(`${optionsList.map((option, index) => `
    <li data-answer = "${correctAnswer}"> ${index + 1}.  ${option} </li>`).join('')}`);
    selectOption();
}

// options selection
function selectOption(){
    $('.quiz-options').each(()=>{
        $('li').on("click", (e) =>{
            //console.dir(e.target);
            //console.log(e.target.innerText)
            //console.log(e.target.parentElement.dataset)
            //console.log(typeof e.target.innerText)
            console.log(e.target.dataset.answer===e.target.innerText.split(" ").slice(1, e.target.innerText.split(" ").length).join(' '))

            const clickedOption = e.target.innerText;
            //if()
//             if($('.quiz-options .selected')){
//                 const activeOption = $('.quiz-options .selected');
//                 activeOption.removeClass('selected');
//             }
//             $('.quiz-options .selected').ready(function(){
//                 $('.quiz-options').addClass('selected');
//             })
            
        });
    })           
}






