import Menu from "./menu.js";
import ProgressBar from "./progress_bar.js";

//MENU
const menu_button = document.querySelector('.hamburger');
const menu = new Menu('.hidden-menu', '.hidden-list', menu_button);

menu_button.addEventListener('click', e => {
    menu.toggle();
})

//PROGRESS BAR + FORM
const progressBar = new ProgressBar('.progress-bar .circle', '.progress-bar .line');
const form_next = document.querySelector('form .next-button');
const form_prev = document.querySelector('form .prev-button');
const spans = document.querySelectorAll('form > span');
const form = document.querySelector('form');

console.log(spans);

//TODO: form verification
const moveForm = () => {
    for(let [i,el] of spans.entries()) {
        el.style.left = (i*110)-(progressBar.position*110)+'%';
    }
}
const changePrevButton = isActive => {
    form_prev.disabled = isActive ? false : true; 
    isActive ? form_prev.classList.add('enabled-button') :
    form_prev.classList.remove('enabled-button');
}

form_prev.onclick = form_next.onclick = e => {
    e.preventDefault();
    progressBar.NextPosition();
    moveForm();
    changePrevButton(progressBar.position);
}
form_prev.onclick = e => {
    e.preventDefault();
    progressBar.PrevPosition();
    moveForm();
    changePrevButton(progressBar.position);
}