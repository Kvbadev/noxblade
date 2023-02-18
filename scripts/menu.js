export default class Menu {
    constructor(container, menu, button) {
        this.container = container;
        this.menu = menu;
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