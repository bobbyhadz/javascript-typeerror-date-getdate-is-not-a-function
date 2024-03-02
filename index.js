// TypeError: date.getDate is not a function in JavaScript

// EXAMPLE 1 - Only call the `getDate()` method on valid date objects

const d1 = new Date().getDate();
console.log(d1); // 👉️ 26

const d2 = new Date('Sept 24, 22 13:20:18').getDate();
console.log(d2); // 👉️ 24

// ------------------------------------------------------------------

// // EXAMPLE 2 - Check if the value is a `Date` object before calling `getDate()`

// const d1 = new Date();

// if (typeof d1 === 'object' && d1 !== null && 'getDate' in d1) {
//   const result = d1.getDate();
//   console.log(result); // 👉️ 16
// }
