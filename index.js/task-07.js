
const rangeEl = document.querySelector('#font-size-control');
const txtEl = document.querySelector('#text');

rangeEl.addEventListener('input', raiseRange);

function raiseRange (event) {
    txtEl.style.fontSize = event.currentTarget.value + 'px';
}
