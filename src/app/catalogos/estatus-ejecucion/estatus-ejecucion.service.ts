import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Response } from 'src/app/servidores/models';
import { estatusEjecucion } from '../model';

@Injectable({
  providedIn: 'root'
})
export class EstatusEjecucionService {

  private url: string = environment.url;

  constructor(private http: HttpClient) { }

  public all(){  
    return this.http.get<estatusEjecucion[]>(`${this.url}/api/catalogos/estatus-ejecucion`)
  }

  public get(id: number){  
    return this.http.get<estatusEjecucion>(`${this.url}/api/catalogos/estatus-ejecucion/${id}`)
  }

  public create(body: estatusEjecucion){  
    return this.http.post<Response>(`${this.url}/api/catalogos/estatus-ejecucion`, body)
  }

  public update(body: estatusEjecucion){  
    return this.http.put<Response>(`${this.url}/api/catalogos/estatus-ejecucion/${body.id}`, body)
  }

  public delete(id: number){  
    return this.http.delete(`${this.url}/api/catalogos/estatus-ejecucion/${id}`)
  }

}
