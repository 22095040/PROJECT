document.addEventListener('DOMContentLoaded', function() {
  const toggleColorButton = document.getElementById('toggleColorButton');
  let isColor1 = true;
  
  toggleColorButton.addEventListener('click', function() {
    document.body.style.backgroundColor = isColor1 ? 'lightblue' : 'lightgreen';
    isColor1 = !isColor1;
  });
});

var enlargeables = document.querySelectorAll('.enlargeable');

enlargeables.forEach(function(image) {
  image.addEventListener('mouseover', function() {
    image.classList.add('enlarged');
  });

  image.addEventListener('mouseout', function() {
    image.classList.remove('enlarged');
  });
});
document.addEventListener('DOMContentLoaded', function() {
  const submitButton = document.getElementById('submitQuiz');
  const quizResults = document.getElementById('quizResults');

  submitButton.addEventListener('click', function() {
    const answers = document.querySelectorAll('.question input:checked');
    let correctAnswers = 0;

    answers.forEach(answer => {
      if (answer.value === 'NIFT') {
        correctAnswers++;
      }
    });

    const resultMessage = `You got ${correctAnswers} out of ${answers.length} questions correct!`;
    quizResults.textContent = resultMessage;
  });
});
