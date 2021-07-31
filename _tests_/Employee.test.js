
const Employee = require('../lib/Employee')

describe('Employee', () => {
    it('should be initiated', () => {
        const employee = new Employee('Angela', '1', 'noemail@email.com');
        expect(typeof( employee)).toBe('object')
        expect(employee instanceof Employee).toBe(true);
    })

    it('should have a name property', () => {
        const employee = new Employee('Angela', '1');
        expect(employee.name).toBe('Angela')
    })

    it('should have id property', () => {
    const employee = new Employee('Angela', '1');
    expect(employee.id).toBe('1')
    })
    
    it('should have email property', () => {
        const employee = new Employee('Angela', '1', 'noemail@email.com');
        expect(employee.email).toBe('noemail@email.com');
        })
});
