const reverseString = function(string) {
    let result = string.split('').reverse();
    result = result.join('');
    return result;
};

// Do not edit below this line
module.exports = reverseString;
