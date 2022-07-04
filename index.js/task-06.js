'use strict';

const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', () => {
    if(inputEl.value.length === Number(inputEl.dataset.length)) {
        inputEl.classList.add('invalid');
        inputEl.classList.remove('valid');
    } else {
    inputEl.classList.remove('invalid');
    inputEl.classList.add('valid');
    }

});

console.log(inputEl)
