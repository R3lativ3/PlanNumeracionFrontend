import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Response } from 'src/app/app.models';
import { rol, sistemaOperativo } from '../model';

@Injectable({
  providedIn: 'root'
})
export class SistemaOperativoService {

  private url: string = environment.url;

  constructor(private http: HttpClient) { }

  public all(){  
    return this.http.get<sistemaOperativo[]>(`${this.url}/api/catalogos/sistema-operativo`)
  }

  public get(id: number){  
    return this.http.get<sistemaOperativo>(`${this.url}/api/catalogos/sistema-operativo/${id}`)
  }

  public create(body: sistemaOperativo){  
    return this.http.post<Response>(`${this.url}/api/catalogos/sistema-operativo`, body)
  }

  public update(body: sistemaOperativo){  
    return this.http.put<Response>(`${this.url}/api/catalogos/sistema-operativo/${body.id}`, body)
  }

  public delete(id: number){  
    return this.http.delete<Response>(`${this.url}/api/catalogos/sistema-operativo/${id}`)
  }

}
