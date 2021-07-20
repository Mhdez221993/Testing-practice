const Calculator = require('../src/task-3');

const calc = new Calculator();

describe('add', () => {
    test('return 15', () => {
        expect(calc.add(10, 5)).toBe(15);
    })

    test('expect to be true', () => {
        expect(calc.add(100, 100)).not .toBe(300);
    })

    test('expect to be true', () => {
        expect(calc.add()).toBeNaN();
    })
})

describe('subtract', () => {
    test('return 15', () => {
        expect(calc.subtract(10, 5)).toBe(5);
    })

    test('expect to be true', () => {
        expect(calc.subtract(100, 100)).not .toBeGreaterThan(100);
    })

    test('expect to be true', () => {
        expect(calc.subtract()).toBeNaN();
    })
})

describe('divide', () => {
    test('return 15', () => {
        expect(calc.divide(10, 5)).toBe(2);
    })

    test('expect to be true', () => {
        expect(calc.divide(100, 99)).toBeLessThan(10);
    })

    test('expect to be true', () => {
        expect(calc.divide(100, 10)).toEqual(10);
    })
})

describe('multiply', () => {
    test('return 15', () => {
        expect(calc.multiply(10, 5)).toBe(50);
    })

    test('expect to be true', () => {
        expect(calc.multiply(1, 1)).toBeLessThan(2);
    })

    test('expect to be true', () => {
        expect(calc.multiply()).toEqual(NaN);
    })
})