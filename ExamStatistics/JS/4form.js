function getData() {
    var isNameValid = checkName(nameSurname.value)
    var isGradeValid = checkGrade(grade.value)
    if (isGradeValid && isNameValid) {
        var subject1 = new Subject(subject.value)
        var studentName = new Name(nameSurname.value)
        var exam1 = new Exam(subject1.getSubjectName(), studentName.getStudentData(), grade.value)
        students.push({
            subject: subject1,
            name: studentName,
            exam: exam1
        })
    } else {
        alert("Invalid input!")
    }
}

function checkName(name) {
    var splitted = name.split(" ")
    var names = splitted[0]
    var surnames = splitted[1]
    if (names[0] !== names[0].toUpperCase() && surnames[0] !== surnames[0].toUpperCase()) {
        return false
    }

    return true
}

function checkGrade(grade) {
    if (grade < 1 || grade > 10) {
        return false
    }
    return true
}

