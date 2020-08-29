import { Injectable } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';

@Injectable({
    providedIn: 'root'
})
export class RecordsService {

    records = [];

    constructor() {
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

        return this.records;
    }

    updateData(key, val) {
        for(let d of this.records) {
            if(d.name === key) {
                if(val === "1") {
                    d.online = true;
                }
                else {
                    d.online = false;
                }
            }
        }
    }
}
