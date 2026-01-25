const questions = [
  {
    questions: "Is shanu : ",
    answers: [
      { text: "Straight", correct: true },
      { text: "Gay", correct: false },
      { text: "Slave", correct: false },
      { text: "Bottom", correct: false },
    ],
  },

  {
    questions: "whats yasmine full name : ",
    answers: [
      { text: "Mia", correct: false },
      { text: "Girl killer", correct: true },
      { text: "Ruler of World", correct: false },
      { text: "yasu", correct: false },
    ],
  },
  {
    questions: "Will she come back : ",
    answers: [
      { text: "No", correct: false },
      { text: "Yes", correct: false },
      { text: "I dont know", correct: true },
      { text: "She dont care", correct: false },
    ],
  },
  {
    questions: "do shanu still love her: ",
    answers: [
      { text: "Yes", correct: true },
      { text: "For sure", correct: true },
      { text: "absoutely", correct: true },
      { text: "haha yes", correct: true },
    ],
  },
];

const questionElement = document.getElementById("question");
const AnswerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.questions;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("butto");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    AnswerButton.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}
function resetState() {
  nextButton.style.display = "none";
  while (AnswerButton.firstChild) {
    AnswerButton.removeChild(AnswerButton.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct == "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(AnswerButton.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = " block";
}

function showScore(){
    resetState()
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`
    nextButton.innerHTML = "Play Again"
    nextButton.style.display = "block"
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}
nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});
startQuiz();
