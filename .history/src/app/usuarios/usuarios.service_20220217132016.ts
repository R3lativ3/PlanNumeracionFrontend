import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { postUser, users } from './model';
import { Response } from 'src/app/servidores/models';
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

  public get(id: number){  
    return this.http.get<users>(`${this.url}/api/usuarios/${id}`)
  }

  public create(categoria: postUser){  
    return this.http.post<Response>(`${this.url}/api/usuarios`, categoria)
  }

  public update(categoria: user){  
    return this.http.put<Response>(`${this.url}/api/usuarios/${categoria.id}`, categoria)
  }

  public delete(id: number){  
    return this.http.delete(`${this.url}/api/usuarios/${id}`)
  }

}
