let container = document.getElementById("quiz-card");
let startButton = document.createElement("button");
startButton.textContent = "Start Quiz"; // Add "Start Quiz" as the inner text of the button
container.appendChild(startButton); // append the start button into the container element
let answerButton = document.createElement("button");

function init() {
    let questionEl = document.createElement("h2"); // Creates an h2 to append the questions to
    container.appendChild(questionEl); // Appends the questionEl to the container element
    let correct = 0;
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
        }
    ];
    //create a for loop to avoid repetitive code
    for (let q = 0; q < questions.length; q++) {
        if (correct === 0) {
        questionEl.textContent = questions[q].question;
        }
    }
    // container.appendChild(questions[q].answers);

    // questionEl.textContent = questions[0].question;
    // // answerButtonOne.textContent = questions[0];
    // answerButton.textContent = "Answer 2";
    // answerButton.textContent = "Answer 3";
    // answerButton.textContent = "Answer 4";



}

startButton.addEventListener("click", function () {
    startButton.remove(); // When start button is clicked, remove the start button element
    init();
});
