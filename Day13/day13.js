const info = document.querySelector('.info');
const fondo = document.querySelector('.fondo')
const buttonElements = document.querySelectorAll('.mas');
const close = document.querySelector('.close')


buttonElements.forEach((button) => {
    button.addEventListener('click', () => {
        info.classList.add('active');
        fondo.classList.add('active');
        close.classList.add('active');
    });
});


close.addEventListener('click', () => {
    fondo.classList.remove('active');
    close.classList.remove('active');
    info.classList.remove('active')
})