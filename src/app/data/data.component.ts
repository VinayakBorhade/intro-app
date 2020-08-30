import { Component, OnInit } from '@angular/core';
import { RecordsService } from '../records.service';
import file_data from '../file_data';

@Component({
    selector: 'app-data',
    templateUrl: './data.component.html',
    styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {

    constructor(private service: RecordsService) { }

    records = []

    ngOnInit() {
        this.service.getData()
        .subscribe(data => {
            console.log("in app component, Requested data ", data.obj);
        this.records = data.obj;
        });

        // console.log("records: ", this.records);
    }

}
