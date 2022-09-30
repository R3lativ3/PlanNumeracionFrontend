import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { credencialesValidacionCarga } from './models';

@Injectable({
  providedIn: 'root'
})
export class CredencialesValidacionCargaService {

  private link = environment.url

  constructor(private api:HttpClient) { }

  getAll(){
    return this.api.get<credencialesValidacionCarga[]>(this.link+"/api/credencialesValidacionCarga")
  }
}