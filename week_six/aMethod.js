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

const fruits = ["watermelon", "peach", "apple", "tomato", "grape"] 
const smallFruits = fruits.filter(fruit => fruit.length <= 6).join(", ")
document.querySelector("#fruits").innerHTML = smallFruits

numbers = [12, 34, 21, 54]
luckyNumber = 21
index = numbers.indexOf(21,0)
document.querySelector("#lucky").innerHTML = index
