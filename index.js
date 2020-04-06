// 1.Fibonacci

// function fibo(n) {
//   return n <= 1 ? n : fibo(n - 1) + fibo(n - 2);
// }
// fibo(5);
// fibo(6);
// fibo(7);

// 2. Implementing with reduce

//concat;

//filter;
// find;
// findIndex;
// includes;
// indexOf;
// map;
// reverse;
// some;

//3 compose fn.

compose = (fn1, fn2, fn3) => (value) => fn3(fn2(fn1(value)));
let multTwo = (n) => n * 2;
let multThree = (n) => n * 3;
let addTwo = (n) => n + 2;

let result = compose(multTwo, multThree, addTwo);
result(2);
