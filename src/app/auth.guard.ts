import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthService } from './auth.service';
import { UserService } from './user.service';
import { map, catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(private auth: AuthService, private router: Router, private user: UserService) {
    }


    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        // if(!this.auth.isLoggedIn) {
        //     this.router.navigate(['login']);
        // }
        // return this.auth.isLoggedIn;
        if (this.auth.isLoggedIn) {
            return true;
        }

        console.log("inside auth guard, before calling isloggedin");
        // user might be still logged in
        return this.user.isLoggedIn()
            .pipe(
                catchError((err) => of(err))
            )
            .pipe(map((res: any) => {

                console.log('res for isloggedin from server', res);

                if (res.success) {
                    this.auth.setLoggedIn(true);
                    return true;
                }
                else {

                    console.log('navigating to login');

                    this.router.navigate(['login']);
                    return false;
                }
            }));
        // .pipe(map((res: any) => {
        //     if(res.status) {
        //         this.auth.setLoggedIn(true);
        //         return true;
        //     }
        //     else {
        //         this.router.navigate(['login']);
        //         return false;
        //     }
        // }));
    }

}
