let questionData;


const $question = $('#question');
const $options = $('.quiz-options');
const $checkBtn = $('#check-answer');
const $playAgainBtn = $('#play-again');
const $result = $('#result');
const $correctScore = $('#correct-score');
const $totalQuestion = $('#total-question');

let correctAnswer = "", correctScore = askedCount = 0, totalQuestion = 10;

const $URL = "https://opentdb.com/api.php?amount=1"



async function loadQuestion(){

await $.ajax({
    url : `${URL}`,
    }).then(
        (data) => {
            questionData = data;
            render()
           // console.log(data);
            $result.innerHTML = "";
            showQuestion(data.results[0])
        })
} 

loadQuestion()

function render() {
    $result.text(questionData.results[0].question)
    

}

// event listeners
function eventListeners(){
    $checkBtn.addEventListener('click', checkAnswer);
    $playAgainBtn.addEventListener('click', restartQuiz);
}