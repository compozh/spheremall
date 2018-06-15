const modal = document.querySelector('.box');
const btn = document.querySelector('#call-modal');
const close = document.querySelector('.close');

btn.addEventListener('click', () => {
    modal.style.display = 'block';
});

close.addEventListener('click', () => {
    modal.style.display = 'none';
});