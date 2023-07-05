var startQuizButton = document.querySelector("#start-quiz");
var timerCountdown = document.querySelector("#timer");
var questionAsked = document.querySelector("#main-quiz-header");
var trueOrFalse = document.querySelector("#true-or-false");

var time = 0;
var score = 0;

function timerGoDown() {
    makeQuestion();
    trueOrFalse.setAttribute("style", "display: block;");
    trueOrFalse.textContent = "";
    time = 60;
    intFunction = setInterval(() => {
        time--;
        updateTimer();
        if (time <= 0) {
            clearInterval(intFunction);
            timeRunOut();
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

    var questionArray = [question1, question2, question3];
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

    
    mainQuestionDiv.addEventListener("click", function(event) {
        var clickedOn = event.target;
        if (clickedOn === questionButton1 || clickedOn === questionButton2 || clickedOn === questionButton3 || clickedOn === questionButton4) {
            if (clickedOn.textContent === right) {
                var rightButton = clickedOn.textContent === right;
                // run true function here
                mainQuestionDiv.removeChild(questionButton1);
                mainQuestionDiv.removeChild(questionButton2);
                mainQuestionDiv.removeChild(questionButton3);
                mainQuestionDiv.removeChild(questionButton4);
                score++
                updateTorF("True", "");
                updateScore(score);
                makeQuestion();

            } else {
                console.log('false');
                // run false function here
                updateTorF("", "False");
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

}
function timeRunOut() {
    questionAsked.textContent = "Time's up! Quiz is over.";
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
    playAgainButton.setAttribute("style", "height: 13%; width: 40%; margin: 20px 0;")


    var saveScoreButton = document.createElement("button");
    saveScoreButton.textContent = "Save Score";
    saveScoreButton.setAttribute("style", "height: 13%; width: 40%;")


    mainQuestionDiv.append(playAgainButton);
    mainQuestionDiv.append(saveScoreButton);
    trueOrFalse.setAttribute("style", "display: none;");

    mainQuestionDiv.addEventListener("click", function(event) {
        var clickedOn = event.target;
        if (clickedOn === playAgainButton) {
            mainQuestionDiv.removeChild(saveScoreButton);
            mainQuestionDiv.removeChild(playAgainButton);
            score = 0;
            updateScore(score);
            timerGoDown();
        }
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