let questions = [
  {
    q: "What is the full form of HTML?",
    options: ["Hyper Text Markup Language", "High Text Machine Language", "Hyper Tool Markup Level"],
    answer: 0
  },
  {
    q: "CSS is used for?",
    options: ["Styling", "Database", "Hosting"],
    answer: 0
  },
  {
    q: "JS stands for?",
    options: ["JavaScript", "JavaSystem", "JumpStart"],
    answer: 0
  }
];

let index = 0;

function loadQuestion() {
  let box = document.getElementById("quizBox");
  let q = questions[index];

  box.innerHTML = `
    <h3>${q.q}</h3>
    ${q.options.map((opt, i) => `
      <div class="option" onclick="selectOption(${i})">${opt}</div>
    `).join("")}
  `;
}

function selectOption(i) {
  if (i === questions[index].answer) {
    alert("Correct!");
  } else {
    alert("Wrong Answer!");
  }
}

function nextQuestion() {
  index++;
  if (index >= questions.length) {
    alert("Quiz Completed!");
    index = 0;
  }
  loadQuestion();
}

loadQuestion();