let number = prompt('Введите число:');
result = [];


function check_simple(number) {
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

for (let i = 2; i < number; i++) {
    if (check_simple(i)) {
        result.push(i);
    }
}

alert(result);