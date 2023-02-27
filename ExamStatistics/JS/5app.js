var subject = document.querySelector(".subject")
var students = []
var grade = document.querySelector(".grade")
var submit = document.querySelector(".button")
submit.addEventListener("click", getData)
var passedCounter = document.querySelector(".passedCounter")
var failedCounter = document.querySelector(".failedCounter")
var passedList = document.querySelector(".passedList")
var failedList = document.querySelector(".failedList")
console.log(students)

var passed = students.filter(x => {
    parseInt(x.exam.grade) > 5
})
var failed = students.filter(x => parseInt(x.exam.grade) <= 5)

for (var i = 0; i < students.length; i++) {
    console.log(students[i])
    if (parseInt(students[i].exam.grade) > 5) {
        passed.push(students[i])
    } else {
        failed.push(students[i])
    }
}

console.log("passed", passed)
console.log("failed", failed)
var passedStudentsNumber = document.createTextNode(`${passed.length}`)
var failedStudentsNumber = document.createTextNode(`${failed.length}`)
passedCounter.appendChild(passedStudentsNumber)
failedCounter.appendChild(failedStudentsNumber)

for (var i = 0; i < students.length; i++) {
    var li = document.createElement("li")
    passedList.append(`${students[i].exam.student} ${students[i].exam.subject} ${students[i].exam.grade}`, li)
}




