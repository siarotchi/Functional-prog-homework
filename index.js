// 1.Fibonacci

function fibo(n) {
  return n <= 1 ? n : fibo(n - 1) + fibo(n - 2);
}
fibo(5);
fibo(6);
fibo(7);

// 2. Implementing with reduce

//concat;
const arr = [1, 2];
const arr1 = [3, 4];
const arr2 = 5;

const concatFn = (array, ...params) =>
  params.reduce(
    (acc, newEl) =>
      Array.isArray(newEl) ? [...acc, ...newEl] : [...acc, newEl],
    array
  );

console.log(concatFn(arr, arr1));
console.log(concatFn(arr1, arr2));
console.log(`My new ${arr}`);

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

const filter = (newArr, fn) =>
  newArr.reduce((acc, person) => (fn(person) ? [...acc, person] : acc), []);

let fn1 = (obj) => {
  return obj.age > 18;
};

console.log(filter(friends, fn1));

// find;
let friends = [
  {
    name: "John",
    age: 15,
  },
  {
    name: "Lisa",
    age: 30,
  },
  {
    name: "Michael",
    age: 30,
  },
];
const findLisa = (newArr, fn) =>
  newArr.reduce(
    (acc, person) => (acc === null && fn(person) ? person : acc),
    null
  );

let fn1 = (obj) => {
  return obj.age === 30;
};

console.log(findLisa(friends, fn1));

// findIndex;
let arr = ["Stan", "Nick", "Costea", "Costea"];

const findIndex = (array, elem) =>
  array.reduce(
    (acc, curr, index) => (acc === null && curr === elem ? index : acc),
    null
  );

let name = "Costea";
console.log(findIndex(arr, name));

// includes;
let arr = [1, 3, 4, 5];

const includes = (array, elem) =>
  array.reduce((acc, curr) => (curr === elem ? true : acc), false);

console.log(includes(arr, 2));

// indexOf;
let arr = ["Stan", "Nick", "Costea", "Stan"];

const indexOf = (array, elem) =>
  array.reduce(
    (acc, curr, index) => (acc === null && curr === elem ? index : acc),
    null
  );

let name = "Stan";
console.log(indexOf(arr, name));

// reverse;
let arr = [1, 2, 3, 4];

let reverseArray = (arr) =>
  arr.reduce((acc, curr, i) => (i - 1 ? [curr, ...acc] : [curr, acc]));

console.log(reverseArray(arr));
console.log(arr);

// some;
let arr = [-1, -1, -2, -2, -3];

const some = (array, elem) =>
  array.reduce((acc, curr) => (elem(curr) ? true : acc), false);

let fn1 = (item) => item > 0;
console.log(some(arr, fn1));

//3. compose fn.

let compose = (...fns) => (arr) => fns.reduce((acc, curr) => curr(acc), arr);

let multTwo = (n) => n.map((elem) => elem * 2);
let multThree = (n) => n.map((elem) => elem * 3);
let addTwo = (n) => n.map((elem) => elem + 2);

console.log(compose(multTwo, multThree, addTwo)([1, 2, 3]));
