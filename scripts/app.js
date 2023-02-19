import Menu from "./menu.js";
import ProgressBar from "./progress_bar.js";

const menu_button = document.querySelector('.hamburger');
const hidden_container = document.querySelector('.hidden-menu');
const hidden_list = document.querySelector('.hidden-list');
const bar = document.querySelector('.progress-bar');

const menu = new Menu(hidden_container, hidden_list, menu_button);
const progressBar = new ProgressBar(bar.querySelectorAll('.circle'),
                                    bar.querySelector('.line'));

menu_button.addEventListener('click', e => {
    menu.toggle();
})
function test() {
    let i = 0;
    return function() {
        i++;
        i <= 4 ? 
            progressBar.NextPosition():
            progressBar.PrevPosition();
        if(i==7) i=0;
    }
}

setInterval(test(), 2000);