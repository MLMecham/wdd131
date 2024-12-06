console.log("home")

const a = document.createElement("a")

document.getElementById("startquiz").addEventListener("click", function () {
    //Get the select values

    const numberQuestions = document.getElementById("numberquestions").value;
    const difficultyQuestions = document.getElementById("difficultyquestions").value;
    const typeQuestions = document.getElementById("typequestions").value

    // test the parameters
    // console.log(numberQuestions)
    // console.log(difficultyQuestions)
    // console.log(typeQuestions)

    // build the query parameters
    const params = new URLSearchParams({
        numberQuestions : numberQuestions,
        difficultyQuestions : difficultyQuestions,
        typeQuestions : typeQuestions,
    });

    console.log(params.toString())

    // go to the new url with query params
    
    window.location.href = "quizpage.html?" + params.toString();
});

