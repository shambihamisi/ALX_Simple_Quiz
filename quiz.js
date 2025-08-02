function checkAnswer() {
    // Step 1: Define the correct answer
    const correctAnswer = "4";

    // Step 2: Get the selected radio button (user's answer)
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    // Step 3: Check if an option is selected
    if (selectedOption) {
        const userAnswer = selectedOption.value;

        // Step 4: Compare the user's answer with the correct answer
        const feedback = document.getElementById('feedback');
        if (userAnswer === correctAnswer) {
            feedback.textContent = "Correct! Well done.";
            feedback.style.color = "#28a745"; // optional: green text
        } else {
            feedback.textContent = "That's incorrect. Try again!";
            feedback.style.color = "#dc3545"; // optional: red text
        }
    } else {
        // Optional: handle no selection
        const feedback = document.getElementById('feedback');
        feedback.textContent = "Please select an answer before submitting.";
        feedback.style.color = "#ffc107"; // optional: yellow warning
    }
}

// Step 5: Add event listener to the submit button
const submitButton = document.getElementById('submit-answer');
submitButton.addEventListener('click', checkAnswer);
