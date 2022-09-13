 import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Response } from 'src/app/app.models';
import { versionSistemaOperativo, virtualizador } from '../model';

@Injectable({
  providedIn: 'root'
})

export class VirtualizadorService {

  private url: string = environment.url;

  constructor(private http: HttpClient) { }

  public all(){  
    return this.http.get<virtualizador[]>(`${this.url}/api/catalogos/version-sistema-operativo`)
  }

  public get(id: number){  
    return this.http.get<virtualizador>(`${this.url}/api/catalogos/version-sistema-operativo/${id}`)
  }

  public create(body: virtualizador){  
    return this.http.post<Response>(`${this.url}/api/catalogos/version-sistema-operativo`, body)
  }

  public update(body: virtualizador){  
    return this.http.put(`${this.url}/api/catalogos/version-sistema-operativo/${body.id}`, body)
  }

  public delete(id: number){  
    return this.http.delete(`${this.url}/api/catalogos/version-sistema-operativo/${id}`)
  }

}

