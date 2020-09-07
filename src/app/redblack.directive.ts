import { Directive, ElementRef } from '@angular/core';

@Directive({
    selector: '[appRedblack]'
})
export class RedblackDirective {

    element: ElementRef;

    constructor(private el: ElementRef) {
        el.nativeElement.style.color = "white";
        el.nativeElement.style.background = "black";
        debugger;
        this.element = el;
    }

    ngOnInit() {
        this.element.nativeElement.innerText += " - rendered by custom directive";
    }

}
