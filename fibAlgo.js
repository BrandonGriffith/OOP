class Fibonacci {
    constructor(n) {
        this.n = n;
    }
    calculate() {
        if (this.n <= 1) return console.log(this.n);
        let fib = [0, 1];
        for (let i = 2; i <= this.n; i++) fib[i] = fib[i - 1] + fib[i - 2];
        return console.log(fib[this.n]);
    }
}
new Fibonacci(10).calculate();