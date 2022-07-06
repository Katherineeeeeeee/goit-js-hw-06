
const counterValue = {
    value: 0,

    decrement () {
        // console.log(this); //'decrement -> this'
        this.value -= 1;
    },

    increment () {
        // console.log(this); //'increment -> this',
        this.value += 1;
    }
}

const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const valueEl = document.querySelector('#value');




decrementBtn.addEventListener('click', function () {

    counterValue.decrement();
    valueEl.textContent = counterValue.value;
});


incrementBtn.addEventListener('click', function () {

    counterValue.increment();
    valueEl.textContent = counterValue.value;
});