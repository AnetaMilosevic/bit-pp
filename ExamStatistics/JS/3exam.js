class Exam {
    constructor(subject, student, grade) {
        this.subject = subject;
        this.student = student;
        this.grade = grade
    }
    getExamInfo() {
        this.subject + " " + this.student
    }
    hasPassed() {
        var passed = false
        if (this.grade > 5) {
            return passed = true
        } else {
            return passed
        }
    }
}



