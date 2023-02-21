export default class Menu {
    constructor(container, menu, button) {
        this.container = document.querySelector(container);
        this.menu = document.querySelector(menu);
        this.button = button;
        this.status = false;
        
        this.menu.onclick = e => e.stopPropagation();
        this.container.onclick = e => this.toggle();

    }

    toggle() {
        document.body.style.overflow = this.status ? 'auto' : 'hidden';
        this.status = !this.status;

        [this.container,this.menu].forEach(x => x.classList.toggle('visible'));
        this.button.classList.toggle('is-active');
    }
}