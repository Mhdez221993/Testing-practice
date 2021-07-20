const reverseString = require('../src/task-2');

test('return olleh', () => {
    expect(reverseString('Hello')).toBe('olleH');
});

test('return erro', () => {
    let error = 'No valid string';
    expect(() => reverseString()).toThrow(error);
})