let img = document.getElementById("")


dogButton.addEventListener("click", function() {
  checkAnswer(7);
});

catButton.addEventListener("click", function() {
  checkAnswer(4);
});

hamsterButton.addEventListener("click", function() {
  checkAnswer(25);
});

parrotButton.addEventListener("click", function() {
  checkAnswer(50);
});

function checkAnswer(correctAnswer) {
  const userAnswer = Number(inputField.value);

  if (userAnswer === correctAnswer) {
    outputField.textContent = "Goed geraden!";
  } else if (userAnswer < correctAnswer) {
    outputField.textContent = "Te jong!";
  } else {
    outputField.textContent = "Te oud!";
  }
}
