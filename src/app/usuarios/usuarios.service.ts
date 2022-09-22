import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { postUser, users, rolUsuario } from './model';
import { Response } from '../app.models';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class UsuariosService {

  private url: string = environment.url;

  constructor(private http: HttpClient) { }

  public all(){  
    return this.http.get<users[]>(`${this.url}/api/usuarios`)
  }

  public getRoles(){
    return this.http.get<rolUsuario[]>(`${this.url}/api/roles`)
  }

  public get(id: number){  
    return this.http.get<users>(`${this.url}/api/usuarios/${id}`)
  }

  public create(categoria: postUser){  
    return this.http.post<Response>(`${this.url}/api/usuarios`, categoria)
  }

  public update(categoria: postUser, id: number){  
    return this.http.put<Response>(`${this.url}/api/usuarios/${id}`, categoria)
  }

  public delete(id: number){  
    return this.http.delete(`${this.url}/api/usuarios/${id}`)
  }

}
