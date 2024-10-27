function getGrades() {
    let input = document.getElementById("grades").value;
    let grades = input.split(",")

    grades = grades.map(grade => grade.toUpperCase())
    return grades
}

function lookupGrades(grades) {
    let gpaPoints = grades.map(grade => {
        if (grade == "A"){
            return 4
        }
        else if (grade == "B"){
            return 3
        }
        else if (grade == "C"){
            return 2
        }
        else if (grade == "D"){
            return 1
        }
        else if (grade == "F"){
            return 0
        }
        else {
            return ''
        }
    })
    gpaPoints = gpaPoints.filter(point => point !== "")
    return gpaPoints
}

function calculateGpa(numbers) {
    let sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    let gpa = sum / numbers.length
    return gpa
}

function outputGpa(gpa, selector) {
    document.getElementById(selector).innerText = gpa
}

function clickHandler() {
    // console.log("nice")
    let grades = getGrades()
    // console.log(grades)
    let gpaPoints = lookupGrades(grades)
    // console.log(gpaPoints)
    let gpa = calculateGpa(gpaPoints)
    console.log(gpa)
    let output = "output"
    outputGpa(gpa, output)
}

document.getElementById("submitButton").addEventListener("click", clickHandler)