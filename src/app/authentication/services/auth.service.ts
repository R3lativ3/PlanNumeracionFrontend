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
    .pipe(
      tap( resp => {
        if( resp.ok ){
          sessionStorage.setItem('token', resp.user.token!)
        }
      }),
      map( resp => {resp.ok, resp.message} ),
      catchError( err => of(err.message) )
    )
  }

  validarToken(): Observable<boolean>{
    const url = `${this.url}/api/authentication/validateToken`;
    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${sessionStorage.getItem('token') || 'lel'}`)

    console.log(headers)
    return this.http.get<Auth>(url, { headers })
      .pipe(
        map( resp => {
          console.log(resp)
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


