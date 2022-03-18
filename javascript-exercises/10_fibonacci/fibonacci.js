const fibonacci = function(n) {
    n = +n;
    if (n < 1) return "OOPS";
    fibonacciSeq = [1, 1];
    for (let i = 2; i <= n; i++) {
        fibonacciSeq.push(fibonacciSeq[i - 1] + fibonacciSeq[i - 2]);
    }
    console.log(fibonacciSeq);
    return fibonacciSeq[n - 1];
};

// Do not edit below this line
module.exports = fibonacci;
