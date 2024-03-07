const info = document.querySelector('.info');
const fondo = document.querySelector('.fondo')
const buttonElements = document.querySelectorAll('.mas');
const close = document.querySelector('.close')
const perfil = document.querySelector('.perfil');


buttonElements.forEach((button) => {
    button.addEventListener('click', () => {
        info.style.animation="subir 0.7s ease-in-out forwards"
        fondo.style.animation="bajar 0.7s ease-in-out forwards"
        close.style.animation="bajar 1.3s ease-in-out forwards"
        perfil.style.animation="img 1.2s ease-in-out forwards"
    });
});


close.addEventListener('click', () => { 
    info.style.animation="subir2 0.7s ease-in-out forwards"
    fondo.style.animation="bajar2 1s ease-in-out forwards"
    close.style.animation="bajar2 0.6s ease-in-out forwards"
    perfil.style.animation="img2 0.6s ease-in-out forwards"
})