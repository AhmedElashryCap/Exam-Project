document.onkeydown = function (event) {
  if (event.keyCode == 116) {
    event.preventDefault();
  }
};
//TimeRun For Exam
const progressBar = document.getElementById("bar");
const loadingMsg = document.getElementById("loading");
let barWidth = 0;

const animate = () => {
  barWidth++;
  progressBar.style.width = `${barWidth}%`;
  setTimeout(() => {
    loadingMsg.innerHTML = `${barWidth}% Completed`;
  });
  // animation bar starts when page load
}

let intervalID = setInterval(() => {
  if (barWidth === 100) {
    clearInterval(intervalID);
  } else {
    animate();
  }
}, 1500); //this sets the speed of the animation << Time about 3:15 min>>

//////////////////////////////////////////////////////////////
//When Exam run of time do this>>
var TimeOut = "timeoutpage.html";
var openedPage;

setTimeout(function () {
  submitQuestion();
}, 200000); //<< Time about 3:15 min>>

/////////////////////////////////////////////////////////

//Question bank
var questionBank = [
  {
    question:
      "Eritrea, which became the 182nd member of the UN in 1993, is in the continent of",
    option: ["Asia", "Africa", "Europe", "Australia"],
    answer: "Africa",
    quesnum: "QuestionM(1)Mark",
  },
  {
    question: "Garampani sanctuary is located at",
    option: [
      "Junagarh, Gujarat",
      "Diphu, Assam",
      "Kohima, Nagaland",
      "Gangtok, Sikkim",
    ],
    answer: "Diphu, Assam",
    quesnum: "QuestionM(2)Mark",
  },
  {
    question: "For which of the following disciplines is Nobel Prize awarded?",
    option: [
      "Physics and Chemistry",
      "Physiology or Medicine",
      "Literature, Peace and Economics",
      "All of the above",
    ],
    answer: "All of the above",
    quesnum: "QuestionM(3)Mark",
  },
  {
    question: "Hitler party which came into power in 1933 is known as",
    option: ["Labour Party", "Nazi Party", "Ku-Klux-Klan", "Democratic Party"],
    answer: "Nazi Party",
    quesnum: "QuestionM(4)Mark",
  },
  {
    question:
      "First human heart transplant operation conducted by Dr. Christiaan Barnard on Louis Washkansky, was conducted in",
    option: ["1967", "1968", "1958", "1922"],
    answer: "1967",
    quesnum: "QuestionM(5)Mark",
  },
];

var question = document.getElementById("question");
var quizContainer = document.getElementById("quiz-container");
var scorecard = document.getElementById("scorecard");
var option0 = document.getElementById("option0");
var option1 = document.getElementById("option1");
var option2 = document.getElementById("option2");
var option3 = document.getElementById("option3");
var back = document.querySelector(".back");
var qusnum = document.querySelector(".qusnum");
var next = document.querySelector(".next");
var mark = document.querySelector(".mark");
var submit = document.querySelector(".submit");
var points = document.getElementById("score");
var span = document.querySelectorAll("span");
var markword = document.querySelector(".markword");
var timerun = document.getElementById("Time");
var i = 0;
var score = 0;

//function to display questions
function displayQuestion() {
  for (var a = 0; a < span.length; a++) {
    span[a].style.background = "none";
  }
  question.innerHTML = "Q." + (i + 1) + " " + questionBank[i].question;
  option0.innerHTML = questionBank[i].option[0];
  option1.innerHTML = questionBank[i].option[1];
  option2.innerHTML = questionBank[i].option[2];
  option3.innerHTML = questionBank[i].option[3];

  if (i == 0) {
    back.disabled = true;
  } else {
    back.disabled = false;
  }
  if (i == questionBank.length - 1) {
    next.disabled = true;
  } else {
    next.disabled = false;
  }
  
}

////////////////////////////////////////////////////////////////////
//function to calculate scores
function calcScore(e) {
  if (e.innerHTML === questionBank[i].answer && score < questionBank.length) {
    score = score + 1;
    document.getElementById(e.id).style.background = "limegreen";
  } else {
    document.getElementById(e.id).style.background = "tomato";
  }
  setTimeout(nextQuestion, 300);
}
//////////////////////////////////////////////////////////////////////
//function to display next question
qusnum.innerHTML = "Q" + " " + 1;
function nextQuestion() {
  if (i < questionBank.length - 1) {
    i = i + 1;
    displayQuestion();
    qusnum.innerHTML = "Q" + " " + (i + 1);
  }
}

//click events to next button
next.addEventListener("click", nextQuestion);
////////////////////////////////////////////////////////////////////////
//function to display back question

qusnum.innerHTML = "Q" + " " + 1;
function backQuestion() {
  if (i <= questionBank.length - 1) {
    i = i - 1;

    displayQuestion();
    qusnum.innerHTML = "Q" + " " + (i + 1);
  }
}

//click events to back button
back.addEventListener("click", backQuestion);
///////////////////////////////////////////////////////////////////////////
//function to display mark question
function markques() {
  var markL = document.getElementsByClassName("marklist")[0];
  var list = document.createElement("button");
  list.innerHTML = questionBank[i].quesnum;

  markL.appendChild(list);
}
//click events to mark button
mark.addEventListener("click", markques);
///////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////
//function to display submit question
function submitQuestion() {
  
  points.innerHTML = score + "/" + questionBank.length;
  quizContainer.style.display = "none";
  scoreboard.style.display = "block";
  timerun.style.display = "none";
 
}

//click events to next button
submit.addEventListener("click", submitQuestion);

///////////////////////////////////////////////////////////////////////////
//function to check Answers
function checkAnswer() {
  var answerBank = document.getElementById("answerBank");
  var answers = document.getElementById("answers");
  answerBank.style.display = "block";
  scoreboard.style.display = "none";
  for (var a = 0; a < questionBank.length; a++) {
    var list = document.createElement("li");
    list.innerHTML = questionBank[a].answer;
    answers.appendChild(list);
  }
}

displayQuestion();
