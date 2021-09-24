const questions = [
    {
        quest: "What does 'CSS' stand for?",
        options: ["a. Customer Service and Support", "b. Central Security Service", "c. Cascading Style Sheets", "d. Commander Support Staff"],
        answer: "c. Cascading Style Sheets"
    },
    {
        quest: "Which best describes a Boolean?",
        options:["a. True/False", "b. A sandwich", "c. HTML element", "d. CSS selector"],
        answer: "a. True/False"        
    },
    {
        quest: "Who invented JavaScript?",
        options: ["a. Douglas Crockford", "b. Sheryl Sandberg", "c. Brendan Eich", "d. Ben Javascript"],
        answer: "c. Brendan Eich"        
    },
    {
        quest: "How do you add a comment in a HTML?",
        options: ["a. //This is a comment", "b. <!--This is a comment-->", "c. 'This is a comment", "d. * This is a comment *"],
        answer: "b. <!--This is a comment-->"        
    },
    {
        quest: "The first index of an array is ____.",
        options: ["a. 0", "b. 1", "c. 8", "d. any"],
        answer: "a. 0"        
    }
];

var questionTitle
var quizOptions
var currentQuestionIndex = 0;



// display question & choices
function beginQuiz() {
    questionTitle = document.createElement("h1");
    questionTitle.innerHTML = [questions[0].quest];
    document.getElementById("display").appendChild(questionTitle);

    var currentQuestion = questions[currentQuestionIndex];

    for (var i = 0; i < currentQuestion.options.length; i++) {
        var button = document.createElement("button");
        button.textContent = currentQuestion.options[i];
        document.getElementById("display").appendChild(button);

    }
   
    
    

}






// clear starting page&begin first question
beginBtn.addEventListener("click", function(){
document.getElementById("display").innerHTML = "";
beginQuiz();
});
