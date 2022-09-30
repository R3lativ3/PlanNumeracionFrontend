import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Response } from '../models';
import { usuario, usuarioPost } from './models';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private urlApis = environment.url
  constructor(private backEnd:HttpClient) { }

  getAll(){
    return this.backEnd.get<usuario[]>(this.urlApis + "/api/usuarios")
  }

  create(body: usuarioPost){
    return this.backEnd.post<Response>(`${this.urlApis}/api/usuarios`, body)
  }

  get(id: number){
    return this.backEnd.get<usuario>(`${this.urlApis}/api/usuarios/${id}`)
  }

  update(id: number, model: usuarioPost){
    return this.backEnd.put<Response>(`${this.urlApis}/api/usuarios/${id}`, model)
  }

  delete(id: number){
    return this.backEnd.delete<Response>(`${this.urlApis}/api/usuarios/${id}`)
  }
}
