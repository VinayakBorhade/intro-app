import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import file_data from './file_data';

@Injectable({
    providedIn: 'root'
})
export class RecordsService {

    records = [];

    constructor(private http: HttpClient) {
        this.records = [
            {
                name: "abc",
                online: true
            },
            {
                name: "def",
                online: false
            },
            {
                name: "xyz",
                online: true
            },
            {
                name: "def",
                online: false
            },
            {
                name: "xyz",
                online: true
            },
            {
                name: "def",
                online: false
            },
            {
                name: "xyz",
                online: true
            }
        ];
    }

    getData() {

        console.log("getData called");

        return this.http.get<file_data>('/api/file.php');


        // return this.records;
    }

    updateData(key, val) {
        for (let d of this.records) {
            if (d.name === key) {
                if (val === "1") {
                    d.online = true;
                }
                else {
                    d.online = false;
                }
            }
        }
    }
}

