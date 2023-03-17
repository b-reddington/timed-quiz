let container = document.getElementById("quiz-card");
let timerText = document.createElement("p");
container.appendChild(timerText);
let startButton = document.createElement("button");
let questionEl = document.createElement("h2"); // Creates an h2 to append the questions to
let correctText = document.createElement("h3");
let score;
let timerCount = 3;
// an array to store all the buttons
let buttons = [];
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
//What I want to appear on the screen when you first load the website
onLoad();

function onLoad() {
    score = 0;
    startButton.textContent = "Start Quiz"; // Add "Start Quiz" as the inner text of the button
    container.appendChild(startButton); // append the start button into the container element
}

function getCurrentQuestion() {
    // Grabs the necessary question from the questions object
    questionEl.textContent = questions[score].question;

    //Appends the targeted question to the container element
    container.appendChild(questionEl);
}

function generateGame() {
    // this loop generates the same amount of buttons that there are of answers
    for (let i = 0; i < questions[score].answers.length; i++) {
        let answerButton = document.createElement("button");
        answerButton.textContent = questions[score].answers[i];
        container.appendChild(answerButton);

        // add each button to the array
        buttons.push(answerButton);

        //If correct answer is clicked, remove previous question and answers and replace them with the next ones
        answerButton.addEventListener("click", function () {
            if (answerButton.textContent === questions[score].correctAnswer) {
                score++;
                for (let i = 0; i < buttons.length; i++) {
                    buttons[i].remove();
                }
                timerCount += 5;
                container.appendChild(correctText);
                correctText.textContent = "Correct! +5 seconds";
                getCurrentQuestion();
                generateGame();
            }
            else {
                timerCount -= 10;
            }
        });
    }

}

function startTimer() {
    timerInterval = setInterval(function () {
        if (timerCount > 0) {
        timerCount--;
        timerText.textContent = timerCount;
        }
        else {
            loseGame();
        }
    }, 1000);
}

function loseGame() {
    clearInterval(timerInterval);
    questionEl.textContent = "Uh oh! Time is up, you lose!";
    timerText.remove();
    // Removes buttons
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].style.display = "none";
    }
}

startButton.addEventListener("click", function startQuiz() {
    startButton.remove(); // removes start button when quiz begins
    getCurrentQuestion();
    generateGame();
    startTimer();
});
