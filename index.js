document.addEventListener('DOMContentLoaded', () => {
    const quizContainer = document.getElementById('quiz');
    const submitBtn = document.getElementById('submitBtn');
    const resultContainer = document.getElementById('result');

    const quizQuestions = [
        {
            question: "What is the capital of France?",
            answers: {
                a: "Berlin",
                b: "Madrid",
                c: "Paris"
            },
            correctAnswer: "c"
        },
        {
            question: "Who wrote 'To Kill a Mockingbird'?",
            answers: {
                a: "Harper Lee",
                b: "Mark Twain",
                c: "Ernest Hemingway"
            },
            correctAnswer: "a"
        },
        {
            question: "What is the smallest planet in our solar system?",
            answers: {
                a: "Earth",
                b: "Mars",
                c: "Mercury"
            },
            correctAnswer: "c"
        }
    ];

    const buildQuiz = () => {
        const output = [];
        quizQuestions.forEach((currentQuestion, questionIndex) => {
            const answers = [];
            for (letter in currentQuestion.answers) {
                answers.push(
                    `<label>
                        <input type="radio" name="question${questionIndex}" value="${letter}">
                        ${letter} : ${currentQuestion.answers[letter]}
                    </label>`
                );
            }
            output.push(
                `<div class="question">${currentQuestion.question}</div>
                 <div class="answers">${answers.join('')}</div>`
            );
        });
        quizContainer.innerHTML = output.join('');
    };

    const showResults = () => {
        const answerContainers = quizContainer.querySelectorAll('.answers');
        let numCorrect = 0;

        quizQuestions.forEach((currentQuestion, questionIndex) => {
            const answerContainer = answerContainers[questionIndex];
            const selector = `input[name=question${questionIndex}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;

            if (userAnswer === currentQuestion.correctAnswer) {
                numCorrect++;
                answerContainers[questionIndex].style.color = 'green';
            } else {
                answerContainers[questionIndex].style.color = 'red';
            }
        });

        resultContainer.innerHTML = `${numCorrect} out of ${quizQuestions.length}`;
    };

    buildQuiz();

    submitBtn.addEventListener('click', showResults);
});
