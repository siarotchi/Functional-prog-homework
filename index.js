// 1.Fibonacci

function fibo(n) {
  return n <= 1 ? n : fibo(n - 1) + fibo(n - 2);
}
fibo(5);
fibo(6);
fibo(7);

// 2. Implementing with reduce

//concat;
let arr = [1, 2];
let arr1 = [3, 4];

const concatFn = (...array) => {
  return array.reduce((array, newEl) => [...array, ...newEl]);
};

concatFn(arr, arr1);

//filter and map;

let friends = [
  {
    name: "John",
    age: 15,
  },
  {
    name: "Michael",
    age: 25,
  },
  {
    name: "Lisa",
    age: 30,
  },
];

let adult = friends.reduce(function (newArr, person) {
  if (person.age > 18) {
    // newArr.push(person.name);
    return [...newArr, person.name];
  }
  return newArr;
}, []);
console.log(adult);

// find;
let friends = [
  {
    name: "John",
    age: 15,
  },
  {
    name: "Michael",
    age: 25,
  },
  {
    name: "Lisa",
    age: 30,
  },
];
let findLisa = friends.reduce((result, item) => {
  if (item.age === 30) {
    return item;
  }
  return result;
}, null);
console.log(findLisa);

// findIndex;
let arr = ["Stan", "Nick", "Costea"];

arr.reduce(function (acc, elem, index) {
  if (elem === "Costea") {
    return index;
  }
  return acc;
}, null);

// includes;
let arr = [1, 3, 4, 5];

let includesTwo = arr.reduce((result, item) => {
  if (item === 2) {
    return true;
  }
  return result;
}, false);
console.log(includesTwo);

// indexOf;
let arr = ["Stan", "Nick", "Costea"];

arr.reduce(function (acc, elem, index) {
  if (elem === "Nick") {
    return index;
  }
  return acc;
}, null);

// reverse;
let arr = [1, 2, 3, 4];
console.log(arr.reduce((a, b) => [b, ...a], []));

// some;
let arr = [-1, -1, 2, -2, -3];

let somePositive = arr.reduce((result, item) => {
  if (item > 0) {
    return true;
  }
  return result;
}, false);
console.log(somePositive);

//3. compose fn.

compose = (fn1, fn2, fn3) => (value) => fn3(fn2(fn1(value)));
let multTwo = (n) => n * 2;
let multThree = (n) => n * 3;
let addTwo = (n) => n + 2;

let result = compose(multTwo, multThree, addTwo);
result(2);
