const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(list) {
	return list.reduce((sum, element) => {return sum + element}, 0);
};

const multiply = function(list) {
  return list.reduce((total, element) => {return total * element}, 1);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(n) {
	if (n === 0) return 1;
  if (n === 1) return 1;
  let factorial = 1;
  for (let i = 2; i <= n; i++) {
    factorial *= i;
  }
  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
