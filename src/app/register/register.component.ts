import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

    constructor(private auth: AuthService, private router: Router) { }

    ngOnInit(): void {
    }

    registerUser(event) {
        event.preventDefault();
        const errors = [];
        const target = event.target;
        const username = target.querySelector('#username').value;
        const password = target.querySelector('#password').value;
        const cpassword = target.querySelector('#cpassword').value;

        if(password != cpassword) {
            errors.push("Passwords do not match");
        }

        // validation

        if(errors.length === 0) {
             this.auth.registerUser(username, password).subscribe((data: any) => {
                console.log(data);
                if(data.success) {
                    window.alert('User registered successfully!');
                    this.router.navigate(['dashboard']);
                }
                else {
                    window.alert('Error in Registeration, try again');
                    console.log("error message", data.error.message);
                }
            });
        }
        console.log(username, password);
    }
}
