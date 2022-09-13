import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Response } from 'src/app/servidores/models';
import { periodicidad } from '../model';

@Injectable({
  providedIn: 'root'
})
export class PeriodicidadService {

  private url: string = environment.url;

  constructor(private http: HttpClient) { }

  public all(){  
    return this.http.get<periodicidad[]>(`${this.url}/api/catalogos/periodicidades`)
  }

  public get(id: number){  
    return this.http.get<periodicidad>(`${this.url}/api/catalogos/periodicidades/${id}`)
  }

  public create(body: periodicidad){  
    return this.http.post<Response>(`${this.url}/api/catalogos/periodicidades`, body)
  }

  public update(body: periodicidad){  
    return this.http.put<Response>(`${this.url}/api/catalogos/periodicidades/${body.id}`, body)
  }

  public delete(id: number){  
    return this.http.delete<Response>(`${this.url}/api/catalogos/periodicidades/${id}`)
  }

}
