import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private http: HttpClient) { }

    getSomeData() {
        return this.http.get('/api/database.php');
    }

    isLoggedIn() {
        // console.log("inside isLoggedIn()");
        return this.http.get('/api/isloggedin.php');
    }

    logout() {
        return this.http.get('/api/logout.php');
    }
    
}
