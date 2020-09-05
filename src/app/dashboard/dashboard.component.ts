import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

    message = "Loading...";

    constructor(private user: UserService) { }

    ngOnInit(): void {
        this.user.getSomeData().subscribe((data: any) => {
            this.message = "password is " + data.password;
        });
    }

}
