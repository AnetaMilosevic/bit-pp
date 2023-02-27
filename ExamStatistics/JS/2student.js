
var nameSurname = document.querySelector(".nameSurname")
class Name {
    constructor(name) {
        this.name = name;
    }
    getStudentData() {
        var splitted = this.name.split(" ")
        var names = splitted[0]
        var surnames = splitted[1]
        return names + " " + surnames
    }
}
