'use strict';

// const box = document.querySelector('.box');

// const newHeight = 300;
// const newWidth = 400;

// function changeParams(elem, h, w) {
//     elem.style.height = `${h ?? 200}px`;
//     elem.style.width = `${w ?? 200}px`;
//     elem.innerHTML = (h ?? 200) * (w ?? 200);
// }

// changeParams(box, newHeight, newWidth);


// //! here is the nulish operator ??
// let userName;
// let userKey;
// console.log(userName ?? userKey ?? 'DefaultUser');


//! Optional chaining operator (?.)
// const box = document.querySelector('.box');
// const block = document.querySelector('.block');

// // console.log(block); // null
// // console.log(block.textContent); // here will be error
// // console.log(1 + 2); // it well not showup because of prevouse error

// //todo how to avoid it: we can put if condition
// // console.log(block); // null

// // if (block) {
// //     console.log(block.textContent); // here because of condition it will not work
// // }

// // console.log(1 + 2); // 3

// //todo but it is not comfortable so in this case we can use optional operator
// //!Optional chaining operator (?.)=> first asking left side is there any value or not
// console.log(block); // null

// console.log(block?.textContent); // undefined (but it works only for reading the element)

// console.log(1 + 2); // 3

// // block?.textContent = '123'; //ERROR => we can not write something on undefined

// const userData = {
//     name: 'John',
//     age: null,
//     say: function() {
//         console.log('Hello optional chaining operator!')
//     }
// }

// // console.log(userData.skils.js); // userData doesn't have such key

// // if (userData && userData.skills && userData.skills.js) {
// //     console.log(userData.skills.js); // here will not be ERROR but it is long
// // }

// //todo here is the use of Optional chaining operator (?.)
// console.log(userData.skills?.js); // undefined

// userData.say(); // Hello optional chaining operator!
// userData.hey?.(); //