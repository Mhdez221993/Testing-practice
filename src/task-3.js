class Calculator {

    add(num1, num2){
        return num1 + num2
    }

    subtract(num1, num2){
        return num1 - num2
    }

    divide(num1, num2){
        return num1 / num2
    }

    multiply(num1, num2){
        return num1 * num2
    }
}

let cal = new Calculator()
console.log(cal.add());

module.exports = Calculator