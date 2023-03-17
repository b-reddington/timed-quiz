let container = document.getElementById("quiz-card");
let timerText = document.createElement("p");
let instructionText = document.getElementById("instructions");
container.appendChild(timerText);
let startButton = document.createElement("button");
let questionEl = document.createElement("h2"); // Creates an h2 to append the questions to
let correctText = document.createElement("h3");
let score;
let timerCount = 60;
// an array to store all the buttons
let buttons = [];
let finalScore;
let highscoreButton = document.getElementById("highscore");
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
    timerCount = 60;
    questionEl.remove();
    container.appendChild(instructionText);
    startButton.textContent = "Start Quiz"; // Add "Start Quiz" as the inner text of the button
    container.appendChild(startButton); // append the start button into the container element
}
function displayScores() {
    let scores = JSON.parse(localStorage.getItem("scores")) || [];
    scores.sort(function (a, b) {
        return b.score - a.score;
    });
    let scoreBoard = document.createElement("ul");
    for (let i = 0; i < scores.length; i++) {
        let userScore = document.createElement("li");
        userScore.textContent = scores[i].initials + " highest score is " + scores[i].score;
        scoreBoard.appendChild(userScore);
    }
    container.appendChild(scoreBoard);
    let backButton = document.createElement("button");
    backButton.textContent = "Back";
    scoreBoard.appendChild(backButton);
    backButton.addEventListener("click", function () {
        onLoad();
        scoreBoard.remove();
        backButton.remove();
        container.appendChild(highscoreButton);
    });
}
// Activates functions to view high score
highscoreButton.addEventListener("click", function () {
    displayScores();
    highscoreButton.remove();
    questionEl.remove();
    instructionText.remove();
    hideAll();
});

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
            if (score > (questions.length - 2)) {
                winGame();
            }

            if (answerButton.textContent === questions[score].correctAnswer) {
                score++;
                for (let i = 0; i < buttons.length; i++) {
                    buttons[i].remove();
                }
                timerCount += 5;
                container.appendChild(correctText);
                correctText.textContent = "";
                getCurrentQuestion();
                generateGame();
            }
            //if incorrect answer is selected, -10 seconds, push text = incorrect
            else {
                timerCount -= 10;
                correctText.textContent = "Incorrect!";
                container.appendChild(correctText);
            }
        });
    }
}

function startTimer() {
    timerInterval = setInterval(function () {
        if (timerCount > 0) {
            timerCount--;
            timerText.textContent = timerCount + " seconds left";
        }
        else {
            loseGame();
        }
    }, 1000);
}
// Called when the user meets requirements to win the game
function winGame() {
    clearInterval(timerInterval);
    finalScore = score + timerCount;
    questionEl.textContent = "Congratulations, you've won! Your score is " + finalScore;
    hideAll();
    submitScore(finalScore);
}

// Called when the user meets requirements to lose the game
function loseGame() {
    clearInterval(timerInterval);
    questionEl.textContent = "Uh oh! Time is up, you lose! Your score is " + score;
    hideAll();
    submitScore(score);
}

// Hides buttons, timers, and correct/incorrect text
function hideAll() {
    startButton.remove();
    correctText.remove();
    timerText.remove();
    // Removes buttons
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].style.display = "none";
    }
}

function submitScore(finalScore) {
    let nameField = document.createElement("input");
    nameField.setAttribute("type", "text");
    nameField.setAttribute("placeholder", "Input your initials");
    container.appendChild(nameField);
    let submitButton = document.createElement("button");
    submitButton.textContent = "Submit";
    submitButton.setAttribute("id", "submit");
    container.appendChild(submitButton);

    submitButton.addEventListener("click", function () {
        let initials = nameField.value;
        // Create a new object with the score and initials
        let data = { score: finalScore, initials: initials };
        // Retrieve the existing scores array from local storage
        let scores = JSON.parse(localStorage.getItem("scores")) || [];
        // Add the new data object to the scores array
        scores.push(data);
        // Save the updated scores array to local storage
        localStorage.setItem("scores", JSON.stringify(scores));
        submitButton.remove();
        nameField.remove();
        onLoad();
        container.appendChild(highscoreButton);

    });
}

startButton.addEventListener("click", function startQuiz() {
    startButton.remove(); // removes start button when quiz begins
    getCurrentQuestion();
    generateGame();
    startTimer();
    highscoreButton.remove();
});