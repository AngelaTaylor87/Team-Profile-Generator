
const Engineer = require('../lib/Engineer')

describe('Engineer class', () => {
    it('should be initiated', () => {
        const engineer = new Engineer('Angela', '1', 'noemail@email.com');
        expect(typeof( engineer)).toBe('object')
        expect(engineer instanceof Engineer).toBe(true);
    })

    it('should have a name property', () => {
        const engineer = new Engineer('Angela');
        expect(engineer.name).toBe('Angela');
    })

    it('should have id property', () => {
    const engineer = new Engineer('Angela', '1');
    expect(engineer.id).toBe('1');
    })

    it('should have email property', () => {
        const engineer = new Engineer('Angela', '1', 'noemail@email.com');
        expect(engineer.email).toBe('noemail@email.com');
        })
})