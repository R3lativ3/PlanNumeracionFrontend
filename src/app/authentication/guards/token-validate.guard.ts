import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenValidateGuard implements CanActivate, CanLoad {

  constructor( private authService: AuthService,
              private router: Router){}

  canActivate(): Observable<boolean> | boolean {
    console.log('canacti00')
    return this.authService.validarToken()
    .pipe(
      tap( valid => {
        if (!valid){
          sessionStorage.removeItem('token')
          sessionStorage.removeItem('user')
          sessionStorage.removeItem('userName')
          sessionStorage.clear();
          this.router.navigateByUrl('authentication/login')
          return false
        }
        return true
      })
    )
  }
  canLoad(): Observable<boolean> | boolean {
    console.log('canload')
    return this.authService.validarToken()
    .pipe(
      tap( valid => {
        if (!valid){
          sessionStorage.removeItem('token')
          sessionStorage.removeItem('user')
          sessionStorage.removeItem('userName')
          sessionStorage.clear();
          this.router.navigateByUrl('authentication/login')
          return false
        }
        return true
      })
    )
  }
}
