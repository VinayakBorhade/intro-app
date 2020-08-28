import { Component } from '@angular/core';

function log(target, name, descriptor) {
    console.log("target " , target);
    console.log("name", name);
    console.log("descriptor ", descriptor);

    const original = descriptor.value;

    descriptor.value = function(...args) {
        // console.log("hacked!!!");
        console.log("Args ", args, " were passed to this function");
        const result = original.apply(this, args);
        console.log("result ", result);
        return result;
    }

    return descriptor;
}

function log2(className) {
    console.log("log2 className ", className);
}

// function log3(className) {
    
//     return (...args) => {
//         console.log("Arguments passed to this class's constructor are ", args);
//         return new className(...args);
//     };
// }

// @log3
// class c1 {
//     constructor(arg1, arg2) {
//         console.log("constructor fired!!");
//     }
// }

// const obj = new c1(5, 10);


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
// @log2
export class AppComponent {
    title = 'intro-app';
    myvar = "app";
    myDisabled = false;

    constructor() {
        // console.log("simple method called!");
        // console.log("constructor called ", this.simpleMethod(5));
        
        this.myvar = "app";
        this.myDisabled = false;

        // setInterval(() => {
        //     this.myvar = Math.random().toString();
        //     this.myDisabled = Math.random() > 0.5
        // }, 500);

    }

    clickFunction() {
        this.myDisabled = !this.myDisabled;
        console.log("function called!");
    }

    @log
    simpleMethod(a) {
        return a * a;
    }
}
