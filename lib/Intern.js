class Intern {
    constructor(name, id, email, school) {
        this.name = name;
        this.id = id;
        this.email = email;
        

    }
    getName() {
        let name = this.name
        return name
    }
    getId() {
        let id = this.id
        return id
    }
    getEmail() {
        let email = this.email
        return email
    }
    getSchool() {
        return 'school'
    } 
    getRole() {
        
        return 'Intern'
    }
}

module.exports = Intern