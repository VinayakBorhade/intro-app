import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent implements OnInit {

    name = "name";
    i = 0;
    r = Math.random();
    

    constructor() {
    }

    someTask() {
        // console.log(`Called ${this.i++} times`);
    }

    ngOnInit(): void {
        // setInterval(() => {
        //     this.r = Math.random();
        // }, 50);
    }

}
