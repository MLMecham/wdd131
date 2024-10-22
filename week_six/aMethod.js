const steps = ["one", "two", "three"];

const listTemplate = (step) => {

  return `<li>${step}</li>`    //the html string made from step
}
const stepsHtml = steps.map(listTemplate).join('');// use map to convert the list from strings to HTML
document.querySelector("#myList").innerHTML = stepsHtml// set the innerHTML

const letters = ['A', 'B', 'A']
const gradeConverter = (grade) => {
    if (grade == 'A')
        return `<li>${4.0}</li>`
    else if (grade == 'B')
        return `<li>${3.0}</li>`
}
const gpaNumbers = letters.map(gradeConverter).join("")
document.querySelector("#grades").innerHTML = gpaNumbers

const gpaMaker = (grade) => {
    if (grade == 'A')
        return 4.0
    else if (grade == 'B')
        return 3.0
}
const intNumbers = letters.map(gpaMaker)
let totalGpa = intNumbers.reduce((sum, value) => {
    return sum + value
}, 0)
const gpa = totalGpa / intNumbers.length
document.querySelector('#gpa').innerHTML = gpa