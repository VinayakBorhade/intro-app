import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

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

        this.auth.getUserDetails(username, password).subscribe((data : any) => {
            
            console.log("data from server ", data);
            
            if(data.res.success) {
                // redirect to /admin page
                this.router.navigate(['admin']);
                this.auth.setLoggedIn(true);
            }
            else {
                window.alert(data.res.message);
            }
        });
        console.log(username, password);
    }

}
