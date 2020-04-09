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

const concatFn = (...array) =>
  array.reduce((array, newEl) =>
    array.constructor === Array ? [...array, ...newEl] : [...array, newEl]
  );

concatFn(arr, arr1);
concatFn(arr1, arr2);
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

const filter = (newArr, fn) => {
  return newArr.reduce(function (acc, person) {
    if (fn(person)) {
      return [...acc, person];
    }
    return acc;
  }, []);
};

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
    name: "Michael",
    age: 25,
  },
  {
    name: "Lisa",
    age: 30,
  },
];
const findLisa = (newArr, fn) => {
  return newArr.reduce(function (acc, person) {
    if (fn(person)) {
      return [...acc, person];
    }
    return acc;
  }, []);
};

let fn1 = (obj) => {
  return obj.age === 30;
};

console.log(findLisa(friends, fn1));

// findIndex;
let arr = ["Stan", "Nick", "Costea"];

const findIndex = (array, elem) => {
  return array.reduce((acc, curr, index) => {
    if (curr === elem) {
      return index;
    }
    return acc;
  }, null);
};
let name = "Costea";
console.log(findIndex(arr, name));

// includes;
let arr = [1, 3, 4, 5];

const includes = (array, elem) => {
  return array.reduce((acc, curr) => {
    if (curr === elem) {
      return true;
    }
    return acc;
  }, false);
};

console.log(includes(arr, 2));

// indexOf;
let arr = ["Stan", "Nick", "Costea"];

const indexOf = (array, elem) => {
  return array.reduce((acc, curr, index) => {
    if (curr === elem) {
      return index;
    }
    return acc;
  }, null);
};
let name = "Stan";
console.log(indexOf(arr, name));

// reverse;
let arr = [1, 2, 3, 4];
console.log(arr.reduce((a, b) => [b, ...a], []));

// some;
let arr = [-1, -1, -2, -2, -3];

const some = (array, elem) => {
  return array.reduce((acc, curr) => {
    if (elem(curr)) {
      return true;
    }
    return acc;
  }, false);
};

let fn1 = (item) => item > 0;
console.log(some(arr, fn1));

//3. compose fn.

compose = (fn1, fn2, fn3) => (value) => fn3(fn2(fn1(value)));
let multTwo = (n) => n * 2;
let multThree = (n) => n * 3;
let addTwo = (n) => n + 2;

let result = compose(multTwo, multThree, addTwo);
result(2);
