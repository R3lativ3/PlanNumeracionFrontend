import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { cargaDestino } from './models';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CargaDestinoService {

private link = environment.url

  constructor(private api:HttpClient) { }

  getAll(){
    return this.api.get<cargaDestino[]>(this.link+"/api/cargaDestino")
  }
}
