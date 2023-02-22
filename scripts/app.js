import Menu from "./menu.js";
import ProgressForm from "./progress_form.js";

//MENU
const menu_button = document.querySelector('.hamburger');
const menu = new Menu('.hidden-menu', '.hidden-list', menu_button);

menu_button.addEventListener('click', e => {
    menu.toggle();
})

//PROGRESS BAR + FORM
const progressForm = new ProgressForm('.progress-bar .circle', '.progress-bar .line', 'form > span');
const form_next = document.querySelector('form .next-button');
const form_prev = document.querySelector('form .prev-button');
const form = document.querySelector('form');
const position_buttons = document.querySelectorAll('form .btn-position');

const form_values = {};

//TODO: form verification
const changePrevButton = isActive => {
    form_prev.disabled = isActive ? false : true; 
    isActive ? form_prev.classList.add('enabled-button') :
    form_prev.classList.remove('enabled-button');
}

//return index of invalid input or -1 on success
const validateForm = inputs => {
    for(const [i, el] of inputs.entries()) {
        if(!el.value) return i;
    }
    return -1;
}

form_next.onclick = e => {
    e.preventDefault();

    const inputs = [...form
        .querySelectorAll(`span:nth-child(${progressForm.position+1}) input`)];
    const isValid = validateForm(inputs);

    if(isValid === -1) {
        form_values[progressForm.position] = inputs.map(x => [x.name,x.value]);

        progressForm.NextPosition();
        changePrevButton(progressForm.position);
    } else {
        console.log('Incorrect values: ',isValid);
    }
}

form_prev.onclick = e => {
    e.preventDefault();
    progressForm.PrevPosition();
    changePrevButton(progressForm.position);
}

for(const i of position_buttons) {
    i.onclick = () => {
        while(progressForm.position != i.dataset.pos) progressForm.PrevPosition();
    }
}