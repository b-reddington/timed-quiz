let container = document.getElementById("quiz-card");
let startButton = document.createElement("button");
startButton.textContent = "Start Quiz"; // Add "Start Quiz" as the inner text of the button
container.appendChild(startButton); // append the start button into the container element
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
let score = 0;


function generateButtons(score) {
    for (let i = 0; i < questions[0].answers.length; i++) {
    let answerButton = document.createElement("button");
    answerButton.textContent = questions[score].answers[i];
    answerButton.setAttribute("type", "button");
    answerButton.setAttribute("id", questions[score].answers[i]);
    container.appendChild(answerButton);
    answerButton.addEventListener("click", function() {
        if (this.id === questions[score].correctAnswer)
        score++;
        console.log("score: " + score + "\ni = " + i + "\n" + answerButton.id + "\nquestions.correctAnswer = " + questions[score].correctAnswer);
    })
    }
    
}

function init() {
    let questionEl = document.createElement("h2"); // Creates an h2 to append the questions to
    container.appendChild(questionEl); // Appends the questionEl to the container element
    
        if (score === 0) {
        questionEl.textContent = questions[score].question;
        generateButtons(score);
        }
        if (score === 1) {
        questionEl.textContent = questions[score].question;
        generateButtons(score);
        }
        if (score === 2) {
        questionEl.textContent = questions[score].question;
        generateButtons(score);
        }
        if (score === 3) {
        questionEl.textContent = questions[score].question;
        generateButtons(score);
        }
        if (score === 4) {
        questionEl.textContent = questions[score].question;
        generateButtons(score);
        }
    }


startButton.addEventListener("click", function () {
    startButton.remove(); // When start button is clicked, remove the start button element
    init();
});
