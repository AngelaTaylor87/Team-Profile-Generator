class Employee {
constructor(name, id, email) {
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
getRole() {
    let role = this.role
    return Employee
}
}

const 

module.exports = Employee

//Test employee file

const Employee = require(../lib/)

describe('emplyee class', () => {
    it('should be initiated', () =>) {
        const employee = new employee();
        expect(typeof( employee)).toBe('object')
        expect(employee instanceof Employee).toBe(true);
    }

    it('should have a name property', () =>) {
        const employee = new employee();
        expect(typeof( employee)).toBe('object')
})
t('should have id property', () =>) {
    const employee = new employee();
    expect(typeof( employee)).toBe('object')