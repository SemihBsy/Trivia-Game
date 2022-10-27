



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
    selectOption(data.results[0])
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
    console.log(optionsList)
    $xForce.xquestion.append(`${data.question} <br> <span class ="category">${data.category} </span>`);
    $xForce.xoptions.append(`${optionsList.map((option, index) => `
        <li> ${index + 1}. <span>${option}</span> </li>
        `).join('')}
    `);
    selectOption();
}
const oneLi = $('li').eq(0)
// options selection
function selectOption(data){
    $('.quiz-options').each((option)=>{
        $('li').on("click", () =>{
            if($xForce.xoptions.toggleClass('.selected')){
                const activeOption = $xForce.xoptions.toggleClass('.selected');
                console.log(activeOption)
                activeOption.removeClass('selected')
            }
            $('li').addClass('selected');
        });
    });
}






