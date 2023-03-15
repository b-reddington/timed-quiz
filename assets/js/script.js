let container = document.getElementById("quiz-card");
let questionEl = document.createElement("h2");
let questions = ["Commonly used data types DO NOT Include:", "The condition in an if/else statement is enclosed within ______", "Arrays in JavaSript can be used to store _______",
    "String values must be enclosed within _____ when being assigned to variables",
    "A very useful tool used during development and debugging for printing content to the debugger is:",]

init();
function init() {
    let startButton = document.createElement("Button")
    startButton.textContent = "Start Quiz";
    container.appendChild(startButton);
}

function addQuestion(q) {
    questionEl.textContent = q;
    container.appendChild(questionEl)
}
// addQuestion(questions[0])