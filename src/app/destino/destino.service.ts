import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Response } from '../models';
import { destino, destinoPost } from './models';

@Injectable({
  providedIn: 'root'
})
export class DestinoService {
  private url = environment.url

  constructor(private httpClient: HttpClient) { }

  public getAll(){
    return this.httpClient.get<destino[]>(`${this.url}/api/destinos`)
  }

  public get(id: number){
    return this.httpClient.get<destino>(`${this.url}/api/destinos/${id}`)
  }

  public create(model: destinoPost){
    return this.httpClient.post<Response>(`${this.url}/api/destinos`, model)
  }

  public update(id: number, model: destinoPost){
    return this.httpClient.put<Response>(`${this.url}/api/destinos/${id}`, model)
  }

  public delete(id: number){
    return this.httpClient.delete<Response>(`${this.url}/api/destinos/${id}`)
  }
}
