import ProgressForm from "./progress_form.js";

//PROGRESS BAR + FORM
const progressForm = new ProgressForm('.progress-bar .circle', '.progress-bar .line', 'form > span');
const form_next = document.querySelector('form .next-button');
const form_prev = document.querySelector('form .prev-button');
const form = document.querySelector('form');
const position_buttons = document.querySelectorAll('form .btn-position');

const form_values = {};
let invalid_inputs = [];

const changePrevButton = isActive => {
    form_prev.disabled = isActive ? false : true; 
    isActive ? form_prev.classList.add('enabled-button') :
    form_prev.classList.remove('enabled-button');
}

const changeInputAppearance = inputs => {
    for(const i of inputs) {
        if(invalid_inputs.indexOf(i) !== -1) {
            i.classList.add('invalid');
        } else {
            i.classList.remove('invalid');
        }
    }
}

//return index of invalid input or -1 on success
const validateForm = inputs => {
    for(const [i, el] of inputs.entries()) {
        const index = invalid_inputs.indexOf(el);

        if(!el.value) {
            if(index === -1)
                invalid_inputs.push(el);
        }
        else {
            if(index !== -1)
                invalid_inputs.splice(index, 1);
        }
    }
    return invalid_inputs;
}

form_next.onclick = e => {
    e.preventDefault();

    const inputs = [...form
        .querySelectorAll(`span:nth-child(${progressForm.position+1}) input:not(.discount-code)`)];

    const isValid = validateForm(inputs);
    changeInputAppearance(inputs);

    if(!isValid.length) {
        form_values[progressForm.position] = inputs.map(x => [x.name,x.value]);

        progressForm.NextPosition();
        changePrevButton(progressForm.position);
    }

    if(progressForm.position === progressForm.maxPosition) {
        const paragraphs = form.querySelectorAll('.summary > div p');
        console.log(paragraphs);

        for(const t of paragraphs) {
            const elements = [...form.querySelectorAll(`.${t.dataset.source}`)];
            const values = elements.map(x => x.value);

            if(values.length)
                t.textContent = [...values];
        }
    }
}

form_prev.onclick = e => {
    e.preventDefault();
    progressForm.PrevPosition();
    changePrevButton(progressForm.position);
    invalid_inputs = [];
}

for(const i of position_buttons) {
    i.onclick = () => {
        while(progressForm.position != i.dataset.pos) progressForm.PrevPosition();
    }
}