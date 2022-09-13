import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Response } from 'src/app/servidores/models';
import { modeloHW } from '../model';

@Injectable({
  providedIn: 'root'
})
export class ModeloHWService {

  private url: string = environment.url;

  constructor(private http: HttpClient) { }

  public all(){  
    return this.http.get<modeloHW[]>(`${this.url}/api/catalogos/modelos-hw`)
  }

  public get(id: number){  
    return this.http.get<modeloHW>(`${this.url}/api/catalogos/modelos-hw/${id}`)
  }

  public create(body: modeloHW){  
    return this.http.post<Response>(`${this.url}/api/catalogos/modelos-hw`, body)
  }

  public update(body: modeloHW){  
    return this.http.put<Response>(`${this.url}/api/catalogos/modelos-hw/${body.id}`, body)
  }

  public delete(id: number){  
    return this.http.delete<Response>(`${this.url}/api/catalogos/modelos-hw/${id}`)
  }

}
