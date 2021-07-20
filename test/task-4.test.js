const capitalize = require('../src/task-4');

describe('capitalize', () => {
    test('return the word capitalized', ()=> {
        expect(capitalize('hello')).toEqual('Hello');
    })

    test('throw error', ()=> {
        expect(() => capitalize()).toThrow()
        expect(() => capitalize()).toThrow("")
    })

    test('if number', ()=> {
        expect(() => capitalize(4)).toThrow('string.charAt is not a function')
    })
})