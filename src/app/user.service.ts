import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private http: HttpClient) { }

    getSomeData() {
        return this.http.get('/api/data');
    }

    isLoggedIn() {
        // console.log("inside isLoggedIn()");
        return this.http.get('/api/isloggedin');
    }

    logout() {
        return this.http.post('/api/logout', {});
    }
    
}
