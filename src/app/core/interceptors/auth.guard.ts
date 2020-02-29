import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { StorageService } from '../services/storage.service';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(
        private router: Router,
        private storage: StorageService,
        private auth: AuthService
    ) { }

    async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        let localUser = this.storage.getLocalUser();

        if (localUser && localUser.email) {
            return await this.auth.refreshToken().toPromise()
                .then((response) => {
                    this.auth.successfulLogin(response.headers.get('Authorization'));
                    return true;
                }).catch((error) => {
                    this.router.navigateByUrl('/login');
                    return false;
                });
        } else {
            this.router.navigateByUrl('/login');
            return false;
        }
    }

}