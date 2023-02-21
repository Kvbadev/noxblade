export default class ProgressBar {
    //circles and bar are both class names used for query selection
    constructor(circles, bar) {
        this.circles = document.querySelectorAll(circles);
        this.bar = document.querySelector(bar);
        this.position = 0;
        this.maxPosition = 4;
        this.circleWidth = 20;
    }

    NextPosition() {
        if(this.position >= this.maxPosition) return;
        this.position++;
        this.circles[this.position].classList.add('active');
        this.bar.style.width = this.circles[this.position].offsetLeft+'px';
    }
    PrevPosition() {
        if(this.position <= 0) return;
        this.circles[this.position].classList.remove('active');
        this.position--;
        this.bar.style.width = this.circles[this.position].offsetLeft+'px';
    }
}