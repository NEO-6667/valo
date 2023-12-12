function checkAnswer() {
    const userAnswer = document.getElementById('answer-input').value.toLowerCase();
    const correctAnswer = 'yes'; // Customize the correct answer

    const resultElement = document.getElementById('result');

    if (userAnswer === correctAnswer) {
        resultElement.style.color = '#8b0000'; /* Dark red for correct answer */
        resultElement.textContent = 'aree aajaoo kheltee haiii babeee👉👈';
    } else {
        resultElement.style.color = '#FF0000'; /* Red for incorrect answer */
        resultElement.textContent = 'aise kaise nhiii aayegaa';
    }
}
