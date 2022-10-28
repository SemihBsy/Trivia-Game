



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

// event listeners
// function eventListeners(){
//     $('#check-answer').on("click", checkAnswer);
// }



$(document).ready(function() {
    loadQuestion();
//    eventListeners();
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
    selectOption(data.results[0]);
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
    $xForce.xquestion.html(`${data.question} <br> <span class ="category">${data.category} </span>`);
    $xForce.xoptions.html(`${optionsList.map((option, index) => `
        <li> ${index + 1}. <span>${option}</span> </li>
        `).join('')}
    `);
    selectOption();
}
// options selection
function selectOption(data){
    let clickedOn =  
    // let correctAnswer = data.correct_answer;
    // let incorrectAnswer = data.incorrect_answers;
    // let optionsList = incorrectAnswer;
    //let option = $('li span').val()
    $('li').each((option)=>{
        $('li .selected').on("click", () =>{
            console.log("hello")
            // if($('li .selected')){
            //     const activeOption = $('.selected span');
            //     activeOption.removeClass('selected');
            // }
            // $('li').addClass('selected');
        });
    });
}

// function checkAnswer(data){
//     let correctAnswer = data.correct_answer;
//     console.log(correctAnswer)
//     $('#check-answer').attr("disabled", true);
//     if($('.quiz-options .selected') === correctAnswer){
//         let selectedAnswer = $('li .selected').text();
//         console.log(selectedAnswer);
//     } 
// }




