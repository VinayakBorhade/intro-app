import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    constructor(private auth: AuthService) { }

    ngOnInit(): void {
    }

    loginUser(event) {
        event.preventDefault();
        const target = event.target;
        const username = target.querySelector('#username').value;
        const password = target.querySelector('#password').value;

        this.auth.getUserDetails(username, password).subscribe(data => {
            
            console.log("data from server ", data);

            if(data.res.success) {
                // redirect the person to /admin
            }
            else {
                window.alert(data.res.message);
            }
        });
        console.log(username, password);
    }

}
