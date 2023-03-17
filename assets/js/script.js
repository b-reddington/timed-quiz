let container = document.getElementById("quiz-card");
let startButton = document.createElement("button");
let questionEl = document.createElement("h2"); // Creates an h2 to append the questions to
let correctText = document.createElement("h3");
let answerButton = document.createElement("button");
let score;
let questions = [
    {
        question: "Commonly used data types DO NOT Include:",
        answers: ["strings", "booleans", "alerts", "numbers"],
        correctAnswer: "alerts"
    },
    {
        question: "The condition in an if/else statement is enclosed within ______",
        answers: ["quotes", "curly brackets", "parantheses", "square brackets"],
        correctAnswer: "curly brackets"
    },
    {
        question: "Arrays in JavaSript can be used to store _______",
        answers: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        correctAnswer: "all of the above"
    },
    {
        question: "String values must be enclosed within _____ when being assigned to variables",
        answers: ["commas", "curly brackets", "quotes", "parentheses"],
        correctAnswer: "quotes"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: ["JavaScript", "terminal/bash", "for loops", "console.log"],
        correctAnswer: "console.log"
    },
];


/*
On Load Function
Present user with title of quiz
present user with start quiz button
*/
function onload() {
    score = 0;
    startButton.textContent = "Start Quiz"; // Add "Start Quiz" as the inner text of the button
    container.appendChild(startButton); // append the start button into the container element
}

/*
currentQuestion function
use current score to grab the index of the question
update questionEl with new question
executed in button eventListener & startQuiz button
*/

function getCurrentQuestion() {
    // Grabs the necessary question from the questions object
    questionEl.textContent = questions[score].question;
    
    //Appends the targeted question to the questionEl container
    container.appendChild(questionEl);
}


/*
Button Function
contains a for loop to iterate answers into buttons
*/

/* 
Timer Function
starts clock @ 60 seconds
subtracts 1 per second
lose 10 seconds per-incorrect answer
*/

/*
Start Quiz Button - clicked
hides start quiz button
Contains function to generate current question
Contains function to generate 4 button choices
starts timer of 60 seconds
*/
startButton.addEventListener("click", function startQuiz() {
    startButton.remove(); // removes start button when quiz begins
    getCurrentQuestion();
    // add current question
    // add answer choices
    // add timerStart
});

// Call Functions
onload();