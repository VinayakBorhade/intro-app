import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import res_login from './res_login';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private http: HttpClient) { }

    getUserDetails(username, password) {
        // post these details to API server return user info if correct
        return this.http.post<res_login>('/api/auth.php', {
            username,
            password
        });
    }
}
