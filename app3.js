


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
let incorrectAnswer = "";
let askedCount = 0;
let correctScore = askedCount;
let totalQuestion = 18;
let finalScore = totalQuestion - correctScore;

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
    //console.log(data)
    // inserting correct answer in random position in the options list
    optionsList.splice(Math.floor(Math.random() * (incorrectAnswer.length + 1)), 0, correctAnswer); 
    
    $xForce.xquestion.html(`${data.question} <br> <span class ="category">${data.category} </span>`);
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
            //console.log(clickedOption.dataset.answer===clickedOption.innerText.split(" ").slice(1, clickedOption.innerText.split(" ").length).join(' '))
            //console.log(correctAnswer)
            //console.log(option)
            if(correctAnswer === option){
                $xForce.xcorrectScore.text(`${correctScore++}`);
                $xForce.xcheckBtn.html(`<p><i class = "fas fa-check"></i>Correct Answer!</p>`)
            }else{
                $xForce.xcorrectScore.text(`${correctScore++}`);
                $xForce.xcheckBtn.html(`<p><i class = "fas fa-times"></i>Incorrect Answer!</p> <small><b>Correct Answer: </b>${correctAnswer}</small>`)
            }
            checkCount();
    
        
            
        });
    })           
}



function checkCount(){
    askedCount = askedCount +1;
    setCount();
    if(askedCount == totalQuestion){
        setTimeout(() => {
            console.log("");
        }, 5000);

        $xForce.xresult.html(`<p>Your score is ${correctScore}.</p>`);
    } else {
        setTimeout(() => {
            loadQuestion();
        }, 300);
    }
}

function setCount(){
    $xForce.xtotalQuestion.text(`${totalQuestion}`);
    $xForce.xcorrectScore.textContent = correctScore;
}

function restartQuiz(){
    correctScore = askedCount = 0;
    $xForce.xplayAgainBtn.style.display = "none";
    $xForce.xcheckBtn.style.display = "block";
    $xForce.xcheckBtn.disabled = false;
    setCount();
    loadQuestion();
}






