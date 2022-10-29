// DOM manipulation
const $xForce = {
    xquestion: $('#question'),
    xoptions: $('.quiz-options'),
    xplayAgainBtn: $('#play-again'),
    xresult: $('#result'),
    xcorrectScore: $('#correct-score'),
    xtotalQuestion: $('#total-question')
}

// variables
let correctAnswer = "";
let askedCount = 0;
let correctScore = 0;
let totalQuestion = 18;
let incorrectScore = 0;


// event listener
$(document).ready(function() {
    loadQuestion();
    $xForce.xtotalQuestion.text(totalQuestion);
    $xForce.xcorrectScore.text(askedCount + 1);
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
    
    // inserting correct answer in random position in the options list
    optionsList.splice(Math.floor(Math.random() * (incorrectAnswer.length + 1)), 0, correctAnswer); 
    // inserting category
    $xForce.xquestion.html(`${data.question} <br> <span class ="category">${data.category} </span>`);
    // inserting answers/options to the li element
    $xForce.xoptions.html(`${optionsList.map((option, index) => `
    <li data-answer = "${correctAnswer}"> ${index + 1}.  ${option} </li>`).join('')}`);
    selectOption();
}

// options selection
function selectOption(){
    $('.quiz-options').each(()=>{
        $('li').on("click", (e) =>{
            const clickedOption = e.target;
            const correctAnswer = clickedOption.dataset.answer
            let option = e.target.innerText.split(" ").slice(1, e.target.innerText.split(" ").length).join(' ')
            if(correctAnswer === option){
                correctScore++;
                $xForce.xcorrectScore.text(`${++askedCount}`);
                $xForce.xresult.html(`<p><i class = "fas fa-check"></i>Correct Answer!</p>`)
            }else{
                $xForce.xcorrectScore.text(`${++askedCount}`);
                ++incorrectScore;
                $xForce.xresult.html(`<p><i class = "fas fa-times"></i>Incorrect Answer!</p> <small><b>Correct Answer: </b>${correctAnswer}</small>`)
            }
            $('li').off('click')
            checkCount(correctScore);
            
        });
    })           
}

// counting scores & restarting the game 
function checkCount(correctScore){
    if(askedCount == totalQuestion){
        setTimeout(() => {
            console.log("");
        }, 5000);
        restartQuiz()
        $xForce.xresult.html(`<p>Your score is ${correctScore}.</p>`);
    } else {
        setCount();
        setTimeout(() => {
            loadQuestion();
        }, 300);
    }
}

// showing question numbers
function setCount(){
    $xForce.xtotalQuestion.text(`${totalQuestion}`);
    $xForce.xcorrectScore.text(`${askedCount + 1}`);
}

// restart function
function restartQuiz(){
    correctScore = 0;
    incorrectScore = 0;
    askedCount = 0;
    
    setTimeout(() => {
        $xForce.xresult.html("");
        //$xForce.xcheckBtn.html("CHECK ANSWER");
        setCount();
    loadQuestion();
    }, 5000)
}    






