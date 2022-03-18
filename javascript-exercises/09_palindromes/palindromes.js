const palindromes = function (string) {
    string = string.toLowerCase();
    for (let symbol of ['!', '.', ',', ' ']) {
        while (string.includes(symbol)) {
            string = string.replace(symbol, '')
        }
    }
    return string.split('').reverse().join('') === string;
};

// Do not edit below this line
module.exports = palindromes;
