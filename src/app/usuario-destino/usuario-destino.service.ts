import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { usuarioDestino } from './models';

@Injectable({
  providedIn: 'root'
})
export class UsuarioDestinoService {
  private urlApis = environment.url
  constructor(private backEnd:HttpClient) { }

  
  getAll(){
    return this.backEnd.get<usuarioDestino[]>(this.urlApis + "/api/usuariosDestinos")
  }
}
