const { toThrowErrorMatchingInlineSnapshot } = require('jest-snapshot');
const Intern = require('../lib/Intern')

describe('manager class', () => {
    it('should be initiated', () => {
        const intern = new Intern('Angela', 1, 'noemail@email.com');
        expect(typeof( intern)).toBe('object')
        expect(intern instanceof Intern).toBe(true);
    })

    it('should have a name property', () => {
        const intern = new Intern('Angela');
        expect(intern.name).toBe('Angela');
    })

    it('should have id property', () => {
    const intern = new Intern('Angela', 1);
    expect(intern.id).toBe(1);
    })

    it('should have id property', () => {
        const intern = new Intern('Angela', 1,'noemail@email.com');
        expect(intern.email).toBe('noemail@email.com');
        })

})