import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { catchError, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Auth, User } from '../models/auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url: string = environment.url;
  private _user!: User;

  get usuario(){
    return { ...this._user}
  }

  constructor( private http: HttpClient ) { }

  login( username: string, password: string){
    const url = `${this.url}/api/authentication/login`
    const body = {username, password}
    return this.http.post<Auth>(url, body)
  }

  validarToken(): Observable<boolean>{
    const url = `${this.url}/api/authentication/validateToken`;
    const token = sessionStorage.getItem('token')
    if(token === null) return of(false)

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`)
    return this.http.get<Auth>(url, { headers })
      .pipe(
        map( resp => {
          sessionStorage.setItem('token', resp.user.token!)
            this._user = {
              userName : resp.user.userName!,
              name : resp.user.name!,
              token : resp.user.token!,
            }
            return resp.ok
          }),
          catchError( err => of(false))
      )
  }

  logout(){
    sessionStorage.clear();
  }

}


