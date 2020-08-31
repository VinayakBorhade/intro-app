import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private loggedInStatus = JSON.parse(localStorage.getItem('loggedIn') || 'false');

    constructor(private http: HttpClient) { }

    setLoggedIn(value: boolean) {
        this.loggedInStatus = value;
        localStorage.setItem('loggedIn', value.toString());
    }

    get isLoggedIn() {
        return JSON.parse(this.loggedInStatus || localStorage.getItem('loggedIn'));
    }

    getUserDetails(username, password) {
        // post these details to API server return user info if correct
        return this.http.post('/api/auth.php', {
            username,
            password
        });
    }
}
