import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Response } from 'src/app/servidores/models';
import { aplicacion, postAplicacion,  } from '../model';

@Injectable({
  providedIn: 'root'
})
export class AplicacionService {

  private url: string = environment.url;

  constructor(private http: HttpClient) { }

  public all(){  
    return this.http.get<aplicacion[]>(`${this.url}/api/catalogos/aplicaciones`)
  }

  public get(id: number){  
    return this.http.get<aplicacion>(`${this.url}/api/catalogos/aplicaciones/${id}`)
  }

  public create(aplicacion: postAplicacion){  
    return this.http.post<Response>(`${this.url}/api/catalogos/aplicaciones`, aplicacion)
  }

  public update(aplicacion: aplicacion){  
    if(aplicacion.idRolServidor === 0){
      console.log('shi')
      const body = {
        aplicacion: aplicacion.aplicacion,
        status: aplicacion.status 
      }
      return this.http.put<Response>(`${this.url}/api/catalogos/aplicaciones/${aplicacion.id}`, body)
    }
    return this.http.put<Response>(`${this.url}/api/catalogos/aplicaciones/${aplicacion.id}`, aplicacion)
  }

  public delete(id: number){  
    return this.http.delete(`${this.url}/api/catalogos/aplicaciones/${id}`)
  }

}
