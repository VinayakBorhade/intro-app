import { Component, OnInit } from '@angular/core';
import { RecordsService } from '../records.service';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent implements OnInit {

    name = "name";
    i = 0;
    r = Math.random();
    
    records = [];

    constructor(private service: RecordsService) {
    }

    someTask() {
        // console.log(`Called ${this.i++} times`);
    }

    clickFunction() {
        console.log("updating service data");
        this.service.updateData("def", "1");
    }

    ngOnInit() {
        // setInterval(() => {
        //     this.r = Math.random();
        // }, 50);

        // this.records = this.service.getData();
    }



}
