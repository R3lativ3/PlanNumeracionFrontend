import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Response } from '../app.models';
import { usuarioDestino } from './models';

@Injectable({
  providedIn: 'root'
})
export class UsuarioDestinoService {
  private url = environment.url

  constructor(private backEnd:HttpClient) { }

  getAll(){
    return this.backEnd.get<usuarioDestino[]>(this.url + "/api/usuariosDestinos")
  }

  getUsuarioByIdDestino(id: number){
    return this.backEnd.get<usuarioDestino>(this.url + "/api/usuariosDestinos/destino/"+id)
  }

  public updateUsuarioDestino(body: usuarioDestino){  
    return this.backEnd.put<Response>(`${this.url}/api/usuariosDestinos/destino${body.id}`, body)
  }
}
