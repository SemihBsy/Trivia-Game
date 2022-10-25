let questionData;


const $xquestion = $('#question');
const $xoptions = $('.quiz-options');
const $xcheckBtn = $('#check-answer');
const $xplayAgainBtn = $('#play-again');
const $xresult = $('#result');
const $xcorrectScore = $('#correct-score');
const $xtotalQuestion = $('#total-question');

let correctAnswer = "", correctScore = askedCount = 0, totalQuestion = 10;

//const URL = "https://opentdb.com/api.php?amount=1"


// load question from API
function loadQuestion(){
    const URL = "https://opentdb.com/api.php?amount=1";
     $.ajax(URL)
    .then((data) => {
        questionData = $xresult.data;
        console.log(data)
        $xresult.html = "",
        render()
    })
    
}
loadQuestion()

function render() {
    $xresult.text(questionData.results[0].question)
    

}