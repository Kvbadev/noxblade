import Menu from "./menu.js";

const menu_button = document.querySelector('.hamburger');
const hidden_container = document.querySelector('.hidden-menu');
const hidden_list = document.querySelector('.hidden-list');

const menu = new Menu(hidden_container, hidden_list, menu_button);

menu_button.addEventListener('click', e => {
    menu.toggle();
})