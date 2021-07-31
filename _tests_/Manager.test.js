
const Manager = require('../lib/Manager')

describe('manager class', () => {
    it('should be initiated', () => {
        const manager = new Manager('Angela', '1', 'noemail@email.com');
        expect(typeof( manager)).toBe('object')
        expect(manager instanceof Manager).toBe(true);
    })

    it('should have a name property', () => {
        const manager = new Manager('Angela');
        expect(manager.name).toBe('Angela');
    })

    it('should have id property', () => {
    const manager = new Manager('Angela', '1');
    expect(manager.id).toBe('1');
    })

    it('should have email property', () => {
        const manager = new Manager('Angela', '1', 'noemail@email.com');
        expect(manager.email).toBe('noemail@email.com');
        })
});