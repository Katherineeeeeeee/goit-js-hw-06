'use strict';

const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");


inputEl.addEventListener("input", (event) => {

const isEmptyStr = event.currentTarget.value.length === 0;

outputEl.textContent = isEmptyStr ? "Anonymous" : event.currentTarget.value;

});


//? також робочий варіант
//     if (event.currentTarget.value.length === 0) {
//        return outputEl.textContent = "Anonymous";}

//  outputEl.textContent = event.currentTarget.value;