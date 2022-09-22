import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { usuario } from './models';

@Injectable({
  providedIn: 'root'
})
export class PruebaService {
  
  private url: string = environment.url;

  constructor(private api: HttpClient) { }

  getUsuarios(){
    let resultado = this.api.get<usuario[]>(this.url+"/usuarios")
    return resultado
  }
}
