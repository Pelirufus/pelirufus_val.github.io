const quizData = [
  {
    question: "What is my favorite color?",
    choices: ["Red", "Green", "Blue", "Black"],
    answer: "Black"
  },
  {
    question: "What is my favorite animal?",
    choices: ["Dog", "Wolf", "Fish", "Bird"],
    answer: "Wolf"
  },
  {
    question: "What is my favorite football club?",
    choices: ["Man City", "Chelsea", "Arsenal", "Man U"],
    answer: "Chelsea"
  }
];

const quizContainer = document.getElementById("quiz-container");
const questionEl = document.getElementById("question");
const choice1El = document.getElementById("choice1");
const choice2El = document.getElementById("choice2");
const choice3El = document.getElementById("choice3");
const choice4El = document.getElementById("choice4");
const nextBtn = document.getElementById("next-btn");
const resultContainer = document.getElementById("result-container");
const resultEl = document.getElementById("result");
const proposalEl = document.getElementById("proposal");
const hackme = document.getElementById("hackme")

let currentQuestion = 0;
let score = 0;

function displayQuestion() {
  const currentQuizData = quizData[currentQuestion];
  questionEl.textContent = currentQuizData.question;
  choice1El.textContent = currentQuizData.choices[0];
  choice2El.textContent = currentQuizData.choices[1];
  choice3El.textContent = currentQuizData.choices[2];
  choice4El.textContent = currentQuizData.choices[3];
}

function hideQuiz() {
  quizContainer.style.display = "none";
}

function showResult() {
  resultContainer.style.display = "block";
}

displayQuestion();

choice1El.addEventListener("click", function() {
  if (quizData[currentQuestion].choices[0] === quizData[currentQuestion].answer) {
    score++;
  }
  currentQuestion++;
  if (currentQuestion === quizData.length) {
    hideQuiz();
    showResult();
    resultEl.textContent = "Your score is " + score + " out of " + quizData.length;
    proposalEl.textContent = "Will you be my Valentine?";
    hackme.textContent = "If yes, let the LOVE HACK BEGIN.\nI have attached a HTB voucher to this site, can you find it?"
    return;
  }
  displayQuestion();
});

choice2El.addEventListener("click", function() {
  if (quizData[currentQuestion].choices[1] === quizData[currentQuestion].answer) {
    score++;
  }
  currentQuestion++;
  if (currentQuestion === quizData.length) {
    hideQuiz();
    showResult();
    resultEl.textContent = "Your score is " + score + " out of " + quizData.length;
    proposalEl.textContent = "Will you be my Valentine?";
    hackme.textContent = "If yes, let the LOVE HACK BEGIN.\nI have attached a HTB voucher to this site, can you find it?"
    return;
  }
  displayQuestion();
});

choice3El.addEventListener("click", function() {
  if (quizData[currentQuestion].choices[2] === quizData[currentQuestion].answer) {
    score++;
  }
  currentQuestion++;
  if (currentQuestion === quizData.length) {
    hideQuiz();
    showResult();
    resultEl.textContent = "Your score is " + score + " out of " + quizData.length;
    proposalEl.textContent = "Will you be my Valentine?";
    hackme.textContent = "If yes, let the LOVE HACK BEGIN.\nI have attached a HTB voucher to this site, can you find it?"
    return;
  }
  displayQuestion();
});

choice4El.addEventListener("click", function() {
  if (quizData[currentQuestion].choices[3] === quizData[currentQuestion].answer) {
    score++;
  }
  currentQuestion++;
  if (currentQuestion === quizData.length) {
    hideQuiz();
    showResult();
    resultEl.textContent = "Your score is " + score + " out of " + quizData.length;
    proposalEl.textContent = "Will you be my Valentine?";
    hackme.textContent = "If yes, let the LOVE HACK BEGIN.\nI have attached a HTB voucher to this site, can you find it?"
    return;
  }
  displayQuestion();
});

