let questionData;

const xquestion = document.getElementById('question');
const xoptions = document.querySelector('.quiz-options');
const xcheckBtn = document.getElementById('check-answer');
const xplayAgainBtn = document.getElementById('play-again');
const xresult = document.getElementById('result');
const xcorrectScore = document.getElementById('correct-score');
const xtotalQuestion = document.getElementById('total-question');

let correctAnswer = "", correctScore = askedCount = 0, totalQuestion = 10;

// load question from API
function loadQuestion(){

    $.ajax({
        url : `${URL}`,
    }).then(
        (data) => {
            questionData = data.results[0];
            render()
            console.log(data); 
        })
} 

loadQuestion()

// function render() {
//     $result.text(questionData.results[0].question)
    

// }

// // event listeners
// function eventListeners(){
//     xcheckBtn.addEventListener('click', checkAnswer);
//     xplayAgainBtn.addEventListener('click', restartQuiz);
// }

// document.addEventListener('DOMContentLoaded', function(){
//     loadQuestion();
//     eventListeners();
//     xtotalQuestion.textContent = totalQuestion;
//     xcorrectScore.textContent = correctScore;
// });


// // display question and options
// function showQuestion(data){
//     xcheckBtn.disabled = false;
//     correctAnswer = data.correct_answer;
//     let incorrectAnswer = data.incorrect_answers;
//     let optionsList = incorrectAnswer;
//     optionsList.splice(Math.floor(Math.random() * (incorrectAnswer.length + 1)), 0, correctAnswer);
//     // console.log(correctAnswer);

    
//     xquestion.innerHTML = `${data.question} <br> <span class = "category"> ${data.category} </span>`;
//     xoptions.innerHTML = `
//         ${optionsList.map((option, index) => `
//             <li> ${index + 1}. <span>${option}</span> </li>
//         `).join('')}
//     `;
//     selectOption();
// }


// // options selection
// function selectOption(){
//     xoptions.querySelectorAll('li').forEach(function(option){
//         option.addEventListener('click', function(){
//             if(_options.querySelector('.selected')){
//                 const activeOption = _options.querySelector('.selected');
//                 activeOption.classList.remove('selected');
//             }
//             option.classList.add('selected');
//         });
//     });
// }

// // answer checking
// function checkAnswer(){
//     xcheckBtn.disabled = true;
//     if(xoptions.querySelector('.selected')){
//         let selectedAnswer = xoptions.querySelector('.selected span').textContent;
//         if(selectedAnswer == HTMLDecode(correctAnswer)){
//             correctScore++;
//             xresult.innerHTML = `<p><i class = "fas fa-check"></i>Correct Answer!</p>`;
//         } else {
//             xresult.innerHTML = `<p><i class = "fas fa-times"></i>Incorrect Answer!</p> <small><b>Correct Answer: </b>${correctAnswer}</small>`;
//         }
//         checkCount();
//     } else {
//         xresult.innerHTML = `<p><i class = "fas fa-question"></i>Please select an option!</p>`;
//         xcheckBtn.disabled = false;
//     }
// }

// // to convert html entities into normal text of correct answer if there is any
// function HTMLDecode(textString) {
//     let doc = new DOMParser().parseFromString(textString, "text/html");
//     return doc.documentElement.textContent;
// }


// function checkCount(){
//     askedCount++;
//     setCount();
//     if(askedCount == totalQuestion){
//         setTimeout(function(){
//             console.log("");
//         }, 5000);


//         xresult.innerHTML += `<p>Your score is ${correctScore}.</p>`;
//         xplayAgainBtn.style.display = "block";
//         xcheckBtn.style.display = "none";
//     } else {
//         setTimeout(function(){
//             loadQuestion();
//         }, 300);
//     }
// }

// function setCount(){
//     xtotalQuestion.textContent = totalQuestion;
//     xcorrectScore.textContent = correctScore;
// }


// function restartQuiz(){
//     correctScore = askedCount = 0;
//     xplayAgainBtn.style.display = "none";
//     xcheckBtn.style.display = "block";
//     xcheckBtn.disabled = false;
//     setCount();
//     loadQuestion();
// }