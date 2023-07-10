var startQuizButton = document.querySelector("#start-quiz");
var timerCountdown = document.querySelector("#timer");
var questionAsked = document.querySelector("#main-quiz-header");
var trueOrFalse = document.querySelector("#true-or-false");
var footer = document.querySelector("footer");
var highscoreSelect = document.querySelector("#highscore-button");

var time = 0;
var score = 0;

function timerGoDown() {
    var scoretext = document.querySelector("#score-text");
    scoretext.setAttribute("style", "display: flex");
    highscoreSelect.setAttribute("style", "display: none;");
    makeQuestion();
    trueOrFalse.setAttribute("style", "display: block;");
    trueOrFalse.textContent = "";
    var main = document.querySelector("main");
    main.setAttribute("style", "height: 65%");
    var highscoreDiv = document.querySelector("#main-highscore-div");
    highscoreDiv.setAttribute("style", "display: none");

    time = 60;
    intFunction = setInterval(() => {
        time--;
        updateTimer();
        if (time <= 0) {
            clearInterval(intFunction);
            timeRunOut();
            highscoreSelect.setAttribute("style", "display: flex;");

        }
    }, 1000)
}

function updateTimer() {
    timerCountdown.textContent = "Time: " + time;
}

function makeQuestion() {
    var questions = {
        topic: "",
        wrongAnswers: "",
        rightAnswer: ""
    }
    var question1 = Object.create(questions);
    question1.topic = "Arrays in JavaScript can be used to store _____";
    question1.wrongAnswers = ["numbers and strings", "other arrays", "booleans"];
    question1.rightAnswer = "all of the above";

    var question2 = Object.create(questions);
    question2.topic = "Commonly used data types do NOT include:";
    question2.wrongAnswers = ["strings", "booleans", "numbers"];
    question2.rightAnswer = "alerts";

    var question3 = Object.create(questions);
    question3.topic = "String values must be enclosed within ...? when being assigned to variables:";
    question3.wrongAnswers = ["commas", "curly brackets", "parenthesis"];
    question3.rightAnswer = "quotes";

    var question4 = Object.create(questions);
    question4.topic = "Javascript is a subset of:";
    question4.wrongAnswers = ["Python", "CSS", "HTML"];
    question4.rightAnswer = "Java";

    var question5 = Object.create(questions);
    question5.topic = "JavaScript arrays can contain elements of different data types";
    question5.wrongAnswers = ["false", "only if mixed-type array", "not applicable"];
    question5.rightAnswer = "true";

    var question6 = Object.create(questions);
    question6.topic = "What's the most basic syntax to declare a variable?";
    question6.wrongAnswers = ["let", "const", "local"];
    question6.rightAnswer = "var";

    var question7 = Object.create(questions);
    question7.topic = "What does the toUpperCase() method do?";
    question7.wrongAnswers = ["converts array contents to uppercase", "converts object contents to uppercase", "all of the above"];
    question7.rightAnswer = "converts a string value to uppercase";

    var question8 = Object.create(questions);
    question8.topic = "What does the concat() method do?";
    question8.wrongAnswers = ["combines multiple string values", "adds all provided numbers into a final sum", "all of the above"];
    question8.rightAnswer = "merges two or more arrays to create a new one";

    var question9 = Object.create(questions);
    question9.topic = "The push() method is used to add one or more elements to the end of an array";
    question9.wrongAnswers = ["Maybe..", "False", "False, it pushes elements out of an array"];
    question9.rightAnswer = "True";

    var question10 = Object.create(questions);
    question10.topic = "The pop() method is used to remove one or more elements from the end of an array";
    question10.wrongAnswers = ["Maybe..", "False", "False, it adds elements to the end of an array"];
    question10.rightAnswer = "True";

    var question11 = Object.create(questions);
    question11.topic = "The 'number' data type includes both integers and floating-point numbers";
    question11.wrongAnswers = ["False", "Only includes integers", "Only includes floating-points"];
    question11.rightAnswer = "True";

    var question12 = Object.create(questions);
    question12.topic = "The 'boolean' data type represents";
    question12.wrongAnswers = ["Variables without a value", "Numeric values", "Array data"];
    question12.rightAnswer = "Logical true/false";

    var question13 = Object.create(questions);
    question13.topic = "What is a function()?";
    question13.wrongAnswers = ["A complete object with data", "Assortment of numeric values", "Textual information"];
    question13.rightAnswer = "A reusable block of code";

    var question14 = Object.create(questions);
    question14.topic = "How can you locally store information?";
    question14.wrongAnswers = ["Window server storage API", "Holding data in variables", "All of the above"];
    question14.rightAnswer = "Window local storage API";

    var question15 = Object.create(questions);
    question15.topic = "The 'undefined' data type is automatically assigned to a variable that...";
    question15.wrongAnswers = ["Has lost scope when defined", "Was never defined", "Doesn't exist"];
    question15.rightAnswer = "All of the above";

    var question16 = Object.create(questions);
    question16.topic = "What's the recommended method of writing in JS?";
    question16.wrongAnswers = ["There is none", "using lowercase", "USING UPPERCASE"];
    question16.rightAnswer = "Using camelCase";

    var question17 = Object.create(questions);
    question17.topic = "What is the output of the following code? console.log(0.1 + 0.2 === 0.3);";
    question17.wrongAnswers = ["NaN", "SyntaxError", "False"];
    question17.rightAnswer = "True";

    var question18 = Object.create(questions);
    question18.topic = "What does 'JSON.parse()' do?";
    question18.wrongAnswers = ["Converts JS object into a JSON string", "Parses and executes JavaScript code from a string", "Checks the validity of a JSON string"];
    question18.rightAnswer = "Converts a JSON string into a JS object";

    var question19 = Object.create(questions);
    question19.topic = "What is the output of the following code? console.log(typeof 42);";
    question19.wrongAnswers = ["String", "Boolean", "Integer"];
    question19.rightAnswer = "Number";

    var question20 = Object.create(questions);
    question20.topic = "What is the result of the following expression? '10' + 5";
    question20.wrongAnswers = ["15", "105", "NaN"];
    question20.rightAnswer = "'105'";

    var question21 = Object.create(questions);
    question21.topic = "What does the '.length' property do?";
    question21.wrongAnswers = ["Returns the length of an array", "Returns the length of a string", "Returns the length of an object"];
    question21.rightAnswer = "All of the above";
    
    var question22 = Object.create(questions);
    question22.topic = "What does this operator mean? '==='";
    question22.wrongAnswers = ["Equal to", "Less than", "Greater than"];
    question22.rightAnswer = "Strictly equal to";

    var question23 = Object.create(questions);
    question23.topic = "What does this operator mean? '!=='";
    question23.wrongAnswers = ["Not equal to", "Less than", "Greater than"];
    question23.rightAnswer = "Strictly not equal to";

    var question24 = Object.create(questions);
    question24.topic = "The '||' operator means what?";
    question24.wrongAnswers = ["And", "Else", "If"];
    question24.rightAnswer = "Or";
    
    var question25 = Object.create(questions);
    question25.topic = "What's the structure of a for statement? In order";
    question25.wrongAnswers = ["For.. If.. Declare.. Then.. Code", "For.. Then.. Declare.. If.. Code", "For.. If.. Then.. Code"];
    question25.rightAnswer = "For.. Declare.. If.. Then.. Code";

    var questionArray = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10, question11, question12, question13, question14, question15, question16, question17, question18, question19, question20, question21, question22, question23, question24, question25];
    console.log(questionArray);
    if (questionArray) {
        var index = Math.floor(Math.random() * questionArray.length);
        var randomChosenQuestion = questionArray[index];
        console.log(randomChosenQuestion);
        questionAsked.textContent = randomChosenQuestion.topic;
        var wrongAnswer1 = randomChosenQuestion.wrongAnswers[0];
        var wrongAnswer2 = randomChosenQuestion.wrongAnswers[1];
        var wrongAnswer3 = randomChosenQuestion.wrongAnswers[2];
        var rightAnswer1 = randomChosenQuestion.rightAnswer;
        addQuestions(wrongAnswer1, wrongAnswer2, wrongAnswer3, rightAnswer1);
    }
}

function addQuestions(one, two, three, right) {
    var description = document.querySelector("#questions-asked");
    description.setAttribute("style", "display: none;");
    startQuizButton.setAttribute("style", "display: none;");
    var hr = document.querySelector("hr");
    hr.setAttribute("style", "display: block;");
    var mainQuestionDiv = document.querySelector("#main-question-div");
    mainQuestionDiv.setAttribute("style", "height: 60%;");
    var questionButton1 = document.createElement("button");
    var questionButton2 = document.createElement("button");
    var questionButton3 = document.createElement("button");
    var questionButton4 = document.createElement("button");

    questionButton1.setAttribute("class", "question-button");
    questionButton2.setAttribute("class", "question-button");
    questionButton3.setAttribute("class", "question-button");
    questionButton4.setAttribute("class", "question-button");

    var values = [one, two, three, right];
    values.sort(() => Math.random() - 0.5);

    questionButton1.textContent = values[0];
    questionButton2.textContent = values[1];
    questionButton3.textContent = values[2];
    questionButton4.textContent = values[3];

    mainQuestionDiv.append(questionButton1);
    mainQuestionDiv.append(questionButton2);
    mainQuestionDiv.append(questionButton3);
    mainQuestionDiv.append(questionButton4);


    mainQuestionDiv.addEventListener("click", function (event) {
        var trueorfalsetext = document.querySelector("#true-or-false");
        var clickedOn = event.target;
        if (clickedOn === questionButton1 || clickedOn === questionButton2 || clickedOn === questionButton3 || clickedOn === questionButton4) {
            if (clickedOn.textContent === right) {
                var rightButton = clickedOn.textContent === right;
                mainQuestionDiv.removeChild(questionButton1);
                mainQuestionDiv.removeChild(questionButton2);
                mainQuestionDiv.removeChild(questionButton3);
                mainQuestionDiv.removeChild(questionButton4);
                score++
                trueorfalsetext.setAttribute("style", "color: green;");
                updateTorF("True", "");
                updateScore(score);
                makeQuestion();

            } else {
                console.log('false');
                updateTorF("", "False");
                trueorfalsetext.setAttribute("style", "color: red;");
                mainQuestionDiv.removeChild(questionButton1);
                mainQuestionDiv.removeChild(questionButton2);
                mainQuestionDiv.removeChild(questionButton3);
                mainQuestionDiv.removeChild(questionButton4);
                if (time >= 5) {
                    time = time - 5;
                    updateTimer();
                }
                makeQuestion();
            }
        }
    })

}
startQuizButton.addEventListener("click", timerGoDown);

function updateScore(input) {
    var scoreText = document.querySelector("#score-text");
    scoreText.textContent = "Current Score: " + input
    window.localStorage.setItem("Score", input);
}
function timeRunOut() {
    var scoreText = document.querySelector("#score-text");
    scoreText.setAttribute("style", "display: none;");
    questionAsked.textContent = "Coding Quiz Challenge";
    var description = document.querySelector("#questions-asked");
    description.setAttribute("style", "display: block;");
    description.textContent = "Your score was: " + score;
    var mainQuestionDiv = document.querySelector("#main-question-div");
    mainQuestionDiv.children[1].remove();
    mainQuestionDiv.children[2].remove();
    mainQuestionDiv.children[1].remove();
    mainQuestionDiv.children[1].remove();
    mainQuestionDiv.setAttribute("style", "height: 40%;");

    var playAgainButton = document.createElement("button");
    playAgainButton.textContent = "Play Again";
    playAgainButton.setAttribute("class", "play-again");

    var enterInitials = document.createElement("input");
    enterInitials.placeholder = "Enter name here";

    var saveScoreButton = document.createElement("button");
    saveScoreButton.textContent = "Save Score";
    saveScoreButton.setAttribute("class", "save-score");


    mainQuestionDiv.append(enterInitials);
    mainQuestionDiv.append(saveScoreButton);
    mainQuestionDiv.append(playAgainButton);
    trueOrFalse.setAttribute("style", "display: none;");

    mainQuestionDiv.addEventListener("click", function (event) {
        var clickedOn = event.target;
        if (clickedOn === playAgainButton) {
            mainQuestionDiv.removeChild(saveScoreButton);
            mainQuestionDiv.removeChild(playAgainButton);
            mainQuestionDiv.removeChild(enterInitials);
            score = 0;
            updateScore(score);
            timerGoDown();
        }
    })
    saveScoreButton.addEventListener("click", function () {
        setandView();
        var unordered = document.querySelector("#highscores");
        saveScore(unordered);
        saveScoreButton.disabled = true;
        enterInitials.disabled = true;
    })
    enterInitials.addEventListener("input", function () {
        var nameContent = enterInitials.value;
        saveName(nameContent);
    })
}

function updateTorF(t, f) {
    if (t) {
        trueOrFalse.textContent = t;
    } else if (f) {
        trueOrFalse.textContent = f;
    } else {
        trueOrFalse.setAttribute("style", "display: none;");
    }
}

function setMainHeader() {
    var header = document.querySelector("#main-quiz-header");
    if (header) {
        header.textContent = "Coding Quiz Challenge";
    }
}

var highscoreButton = document.querySelector("#highscore-button");

function changePage() {
    var main = document.querySelector("main");
    var startQuizDiv = document.querySelector("#start-quiz-div");
    var mainQuestionDiv = document.querySelector("#main-question-div");
    var highscoreText = document.querySelector("#main-quiz-header");
    var highscoreDiv = document.querySelector("#main-highscore-div");
    var currentScore = document.querySelector("#score-text");

    var changed = highscoreButton.getAttribute('data-boolean-active');
    if (changed === "false") {
        main.setAttribute("style", "height: 80%");
        startQuizDiv.setAttribute("style", "display: none;");
        mainQuestionDiv.setAttribute("style", "display: none;");
        highscoreDiv.setAttribute("style", "display: flex");
        highscoreText.textContent = "Scores:";
        currentScore.setAttribute("style", "display: none;");
        highscoreButton.setAttribute('data-boolean-active', "true");
        highscoreButton.textContent = "Return"

    }
    if (changed === "true") {
        mainQuestionDiv.setAttribute("style", "display: flex; height: 40%;");
        startQuizDiv.setAttribute("style", "display: flex;");
        highscoreDiv.setAttribute("style", "display: none");
        highscoreButton.setAttribute('data-boolean-active', "false");
        setMainHeader();
        highscoreButton.textContent = "View Scores"

    }


}

function setandView() {
    changePage();
    createHighscoreListEl();
}

highscoreButton.addEventListener("click", changePage);

function createHighscoreListEl(score) {
    var listPara = document.createElement("p");
    listPara.setAttribute("class", "highscore-points");
    var listNumber = document.createElement("h4");
    listNumber.setAttribute("class", "highscore-number");
    var listItem = document.createElement("li");
    listItem.setAttribute("class", "highscore-list-item");
    var highscoreUl = document.querySelector("#highscores");

    listPara.textContent = "Score: " + window.localStorage.getItem("Score");
    listNumber.textContent = window.localStorage.getItem("Name");

    highscoreUl.appendChild(listItem);
    listItem.appendChild(listNumber);
    listItem.appendChild(listPara);
}

function saveName(name) {
    window.localStorage.setItem("Name", name)
}

function saveScore(input) {
    var stuff = input.innerHTML;
    window.localStorage.setItem("Information", stuff);
}

function init() {
    var information = window.localStorage.getItem("Information");
    var unordered = document.querySelector("#highscores");
    unordered.innerHTML = information;
}

init();
