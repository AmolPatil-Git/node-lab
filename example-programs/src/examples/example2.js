function example2() {
    function factorial(n) {
        if (n < 0) {
            return 'Factorial is not defined for negative numbers';
        }
        if (n === 0 || n === 1) {
            return 1;
        }
        return n * factorial(n - 1);
    }

    const number = 5;
    console.log(`The factorial of ${number} is ${factorial(number)}`);
}

module.exports = example2;