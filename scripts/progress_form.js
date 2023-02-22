export default class ProgressForm {

    //circles, bar and spans are all class names used for query selection
    constructor(circles, bar, spans) {
        this.circles = document.querySelectorAll(circles);
        this.bar = document.querySelector(bar);
        this.position = 0;
        this.maxPosition = 3;
        this.circleWidth = 20;
        this.spans = document.querySelectorAll(spans);
    }

    NextPosition() {
        if(this.position >= this.maxPosition) return;
        this.position++;
        this.circles[this.position].classList.add('active');
        this.bar.style.width = this.circles[this.position].offsetLeft+'px';
        this.MoveForm();
    }
    PrevPosition() {
        if(this.position <= 0) return;
        this.circles[this.position].classList.remove('active');
        this.position--;
        this.bar.style.width = this.circles[this.position].offsetLeft+'px';
        this.MoveForm();
    }
    MoveForm() {
        for(let [i,el] of this.spans.entries()) {
            el.style.left = (i*110)-(this.position*110)+'%';
        }
    }
}