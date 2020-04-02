// 1.Fibonacci

function fibo(n) {
  return n <= 1 ? n : fibo(n - 1) + fibo(n - 2);
}
fibo(5);
fibo(6);
fibo(7);
