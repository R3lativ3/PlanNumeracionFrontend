import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { validacionCarga } from './models';

@Injectable({
  providedIn: 'root'
})
export class ValidacionCargaService {
  private urlApis = environment.url
  constructor(private backEnd:HttpClient) { }

  getAll(){
    return this.backEnd.get<validacionCarga[]>(this.urlApis + "/api/validacionCarga")
  }
}
