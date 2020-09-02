import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    constructor(private auth: AuthService, private router: Router) { }

    ngOnInit(): void {
    }

    loginUser(event) {
        event.preventDefault();
        const target = event.target;
        const username = target.querySelector('#username').value;
        const password = target.querySelector('#password').value;

        this.auth.getUserDetails(username, password)
        .pipe(
            catchError((err) => of(err))
        )
        .subscribe((data : any) => {
            
            console.log("data from server ", data);
            console.log("success ", data.success, " message ", data.message);
            
            if(data.success) {
                // redirect to /admin page
                this.router.navigate(['dashboard']);
                this.auth.setLoggedIn(true);
            }
            else {
                window.alert("login error, try again check creds!");
                console.log("error ", data);
            }
        });
        console.log(username, password);
    }

}
