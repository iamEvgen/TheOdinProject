let number = +prompt('Введите число:');
let text = ''

for (let i = 1; i < number + 1; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        text += `${i}: FizzBuzz\n`;
    } else if (i % 3 === 0) {
        text += `${i}: Fizz\n`;
    } else if (i % 5 === 0) {
        text += `${i}: Buzz\n`;
    }
}

alert(text);