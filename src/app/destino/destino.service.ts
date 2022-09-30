import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { destino } from './models';

@Injectable({
  providedIn: 'root'
})
export class DestinoService {
  private url = environment.url

  constructor(private httpClient: HttpClient) { }

  public getAll(){
    return this.httpClient.get<destino[]>(`${this.url}/api/destinos`)
  }
}
