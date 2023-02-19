export default class ProgressBar {
    constructor(circles, bar) {
        this.circles = circles;
        this.bar = bar;
        this.position = 1;
        this.maxPosition = 4;
        this.circleWidth = 20;
    }

    NextPosition() {
        if(this.position >= this.maxPosition) return;
        this.circles[this.position].classList.add('active');
        this.bar.style.width = `calc(${this.position*this.circleWidth}px + ${26*this.position}%)`;
        this.position++;
    }
    PrevPosition() {
        if(this.position <= 0) return;
        this.position--;
        this.circles[this.position].classList.remove('active');
        this.bar.style.width = `calc(${(this.position-1)*this.circleWidth}px + ${26*(this.position-1)}%)`;
    }
}