import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Response } from 'src/app/servidores/models';
import { periodicidad } from '../model';

@Injectable({
  providedIn: 'root'
})
export class ModeloHWService {

  private url: string = environment.url;

  constructor(private http: HttpClient) { }

  public all(){  
    return this.http.get<periodicidad[]>(`${this.url}/api/catalogos/modelos-hw`)
  }

  public get(id: number){  
    return this.http.get<periodicidad>(`${this.url}/api/catalogos/modelos-hw/${id}`)
  }

  public create(body: periodicidad){  
    return this.http.post<Response>(`${this.url}/api/catalogos/modelos-hw`, body)
  }

  public update(body: periodicidad){  
    return this.http.put(`${this.url}/api/catalogos/modelos-hw/${body.id}`, body)
  }

  public delete(id: number){  
    return this.http.delete(`${this.url}/api/catalogos/modelos-hw/${id}`)
  }

}
