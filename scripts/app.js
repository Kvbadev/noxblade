import Menu from "./menu.js";

//MENU
const menu_button = document.querySelector('.hamburger');
const menu = new Menu('.hidden-menu', '.hidden-list', menu_button);

menu_button.addEventListener('click', e => {
    menu.toggle();
})

