import questions from './questions.mjs'

// Basic function for getting answers
// function getSelectedValue(questionName) {
//     const selectedOption = document.querySelector(`input[name="${questionName}"]:checked`);
//     return selectedOption ? selectedOption.value : null; // Return the value or null if none is selected
// }

// Steps: Get the parameters to the quiz page, generate the questions correctly, score the quiz correclty and display results.

console.log(questions)
let wrongQuestions = []

const QuizPage = () => {

    const searchParams = window.location.search.substring(1);

    console.log(searchParams)

    const pairs = searchParams.split("&")

    let numberquestions = null;
    let difficultyquestions = null;
    let typequestions = null;

    for (let pair of pairs) {
        const [key, value] = pair.split("=")
        // console.log(value)
        if (key === "numberQuestions") numberquestions = value;
        if (key === "difficultyQuestions") difficultyquestions = value;
        if (key === "typeQuestions") typequestions = value;
    }

    // Parameters are successfully passed!
    console.log(numberquestions)
    console.log(difficultyquestions)
    console.log(typequestions)

    // Filter the questions by difficulty
    let filteredDifficulty = filterByDifficulty(questions, difficultyquestions)

    // console.log(filteredDifficulty)

    let filteredType = filterByType(filteredDifficulty, typequestions)

    console.log(filteredType)

    let filteredNumber = filterByNumber(filteredType, numberquestions)

    console.log("number of questions")
    console.log(filteredNumber)

    //put code to handle if there are zero questions that met the criteria


    //create the html dynamically and insert it
    renderQuestions(filteredNumber)


    // event listener for the submit button
    // grade and score the test
    const submitButton = document.querySelector('#submit-quiz')

    if (submitButton) {
        submitButton.addEventListener('click', () => scoreQuiz(filteredNumber));
    }

    
    //event listener for the dipslay wrong answers.
    const viewMissedButton = document.querySelector("#view-missed")

    if (viewMissedButton) {
        viewMissedButton.addEventListener('click', renderMissedQuestions)
    }
    


    // Add event listener for the "Try Again" button
    const tryAgainButton = document.querySelector('#try-again');
    
    // Check if the button exists
    if (tryAgainButton) {
        tryAgainButton.addEventListener('click', () => {
            // Navigate to the home page (adjust the URL if necessary)
            window.location.href = 'index.html';  // Replace '/' with your actual home page URL if needed
        });
    }

}

function filterByDifficulty(questions, difficulty) {

    if (difficulty === "all")
        return questions;
    else
        return questions.filter(question => parseInt(question.difficulty, 10) === parseInt(difficulty, 10))
}

function filterByType(questions, type) {

    if (type === "all")
        return questions


    if (type == "1")
        return questions.filter(question =>  question.type === "true-false")

    else
        return questions.filter(question => question.type == "multiple-choice")
}

function filterByNumber(array, number) {
    // if (number > array.length) {
    //     throw new Error("Requested number of questions exceeds available questions.");
    // }

    if (number > array.length)
        number = array.length

    const selectedQuestions = [];
    const usedIndexes = new Set();

    while (selectedQuestions.length < number) {
        // Generate a random index
        const randomIndex = Math.floor(Math.random() * array.length);

        // Ensure this index hasn't been used before
        if (!usedIndexes.has(randomIndex)) {
            selectedQuestions.push(array[randomIndex]);
            usedIndexes.add(randomIndex);
        }
    }

    return selectedQuestions;

}

function renderQuestions(questions) {
    let html = '';

    questions.forEach(question => {
        if (question.type === "multiple-choice") {
            html += generateMultipleChoiceQuestion(
                question.number,
                question.difficulty,
                question.points,
                question.question,
                question.options
            );
        } else if (question.type === "true-false") {
            html += generateTrueFalseQuestion(
                question.number,
                question.difficulty,
                question.points,
                question.question
            );
        }
    });

    // Insert the generated HTML into the question div
    document.getElementById('question-div').innerHTML = html;
}

function generateMultipleChoiceQuestion(id, difficulty, points, questionText, options) {
    const optionsHtml = options.map((option, index) => `
        <div class="${index % 2 === 0 ? 'top-left' : 'top-right'}">
            <input type="radio" name="${id}" id="${id}-${option}" value="${option}">
            <label for="${id}-${option}">${option}</label>
        </div>
    `).join('');

    return `
        <div id="question${id}" class="multi-choice-container">
            <div class="question-header">
                <h2>Difficulty: ${difficulty}</h2>
                <h2>Points: ${points}</h2>
            </div>
            <div class="question-text">
                <p>${questionText}</p>
            </div>
            <div class="question-multi">
                ${optionsHtml}
            </div>
        </div>
    `;
}

function generateTrueFalseQuestion(id, difficulty, points, questionText) {
    return `
        <div id="question${id}" class="true-false-container">
            <div class="question-header">
                <h2>Difficulty: ${difficulty}</h2>
                <h2>Points: ${points}</h2>
            </div>
            <div class="question-text">
                <p>${questionText}</p>
            </div>
            <div class="question-true-false">
                <div class="left">
                    <input type="radio" name="${id}" id="${id}-false" value="false">
                    <label for="${id}-false">False</label>
                </div>
                <div class="right">
                    <input type="radio" name="${id}" id="${id}-true" value="true">
                    <label for="${id}-true">True</label>
                </div>
            </div>
        </div>
    `;
}

// Old broken input tags for above. Keeping jsut in case
{/* <input type="radio" name="${id}" id="${id}-false value=false"> */}
{/* <input type="radio" name="${id}" id="${id}-true value="true"> */}



function scoreQuiz(questions) {

    let score = 0
    let points = 0



    questions.forEach(question => {
        // Question number id
        console.log(question.number);

        // Selectd Value
        const selected = document.querySelector(`input[name="${question.number}"]:checked`);
        
        // Get the value of the selected radio button, or null if none is selected
        const selectedValue = selected ? selected.value : null;

        
        // print the selected answer
        console.log(selectedValue)
        
        // Score the questions
        if (selectedValue === null){
            console.log("Not Answered")
            wrongQuestions.push(question)
            wrongQuestions.at(-1).response = selectedValue
        }
        else if (question.answer.toLowerCase() === selectedValue.toLowerCase()){
            console.log("Correct")
            score += 1
            points += question.points
        }
        else {
            console.log("Incorrect")
            wrongQuestions.push(question)
            wrongQuestions.at(-1).response = selectedValue
        }        
        

    });

    // Hide the question-div
    const question_div = document.querySelector("#question-div")
    question_div.classList.add("hide")

    const submit_div = document.querySelector("#submit-div")
    submit_div.innerHTML = "";

    console.log("Wrong Questions:")
    console.log(wrongQuestions)

    renderCongrats(score, points, questions.length);
}

function renderCongrats(score, points, len) {
    console.log(`Score: ${score} / ${len}`)
    console.log(`Points: ${points}`)

    

    // Update the score
    const scoreElement = document.querySelector("#score");
    if (scoreElement) {
        scoreElement.textContent = `Score: ${score}/${len}`;
    }

    // Update the points
    const pointsElement = document.querySelector("#points");
    if (pointsElement) {
        pointsElement.textContent = `Points: ${points}`;
    }
    
    // the results div is hidden so make it visable.
    document.querySelector("#results").classList.remove('hide');
    
}

function renderMissedQuestions() {
    console.log("Rendering Missed Questions")

    let html = ''

    wrongQuestions.forEach(question => {
        html += `
            <div class="true-false-container">
                <div class="question-header">
                    <h2>
                        Difficulty: ${question.difficulty}
                    </h2>
                    <h2>
                        Points: ${question.points}
                    </h2>
                </div>
                <div class="question-text">
                    <p>
                        ${question.question}
                    </p>
                </div>
                <div class="question-true-false">
                    <div class="left-result">
                        <p>Your Answer:</p>
                        <p class="wrong-answer">${question.response}</p>
                    </div>
                    
                    <div class="right-result">
                        <p>Correct Answer:</p>
                        <p class="right-answer">${question.answer}</p>
                    </div>
                </div>
            </div>
        `;

    document.querySelector("#view-missed-div").innerHTML = html
})}


    

QuizPage()