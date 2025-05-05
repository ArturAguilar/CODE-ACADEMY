const menu = document.querySelector('.menu');
const NavMenu = document.querySelector('.nav-menu');

menu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
    NavMenu.classList.toggle('ativo');
});

function fecharMenu() {
    document.querySelector(".nav-menu").classList.remove("ativo");
    document.querySelector(".menu").classList.remove("ativo");

    menu.addEventListener('click' , () => {
        menu.classList.toggle('desativar');
        NavMenu.classList.toggle('desativar');
        });
}