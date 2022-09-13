import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Response } from 'src/app/servidores/models';
import { empresa } from '../model';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  private url: string = environment.url;

  constructor(private http: HttpClient) { }

  public all(){  
    return this.http.get<empresa[]>(`${this.url}/api/catalogos/empresas`)
  }

  public get(id: number){  
    return this.http.get<empresa>(`${this.url}/api/catalogos/empresas/${id}`)
  }

  public create(aplicacion: postAplicacion){  
    return this.http.post<Response>(`${this.url}/api/catalogos/empresas`, aplicacion)
  }

  public update(aplicacion: aplicacion){  
    return this.http.put(`${this.url}/api/catalogos/empresas/${aplicacion.id}`, aplicacion)
  }

  public delete(id: number){  
    return this.http.delete(`${this.url}/api/catalogos/empresas/${id}`)
  }

}
