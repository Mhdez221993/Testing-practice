const stringLength = require('../src/task-1')

test('expectec to 5', () => {
    expect(stringLength('Hello')).toBe(5);
});


test('expectec throw an error', () => {
    let err = 'the length of the string is not in the range of 1 to 10';
    expect(() => stringLength('')).toThrow(err);
});
