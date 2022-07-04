"use strict";


const categoriesEl = document.querySelectorAll('.item');

console.log('Number of categories: ', categoriesEl.length);

categoriesEl.forEach((item) => {
const categoryTitleEl = item.querySelector('h2');
console.log('Category: ', categoryTitleEl.textContent);

const n = item.querySelectorAll('ul >li');
console.log('Elements: ', n.length)
})