import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Response } from 'src/app/app.models';
import { tipoIp } from '../model';

@Injectable({
  providedIn: 'root'
})
export class TipoIpService {

  private url: string = environment.url;

  constructor(private http: HttpClient) { }

  public all(){  
    return this.http.get<tipoIp[]>(`${this.url}/api/catalogos/tipos-ip`)
  }

  public get(id: number){  
    return this.http.get<tipoIp>(`${this.url}/api/catalogos/tipos-ip/${id}`)
  }

  public create(body: tipoIp){  
    return this.http.post<Response>(`${this.url}/api/catalogos/tipos-ip`, body)
  }

  public update(body: tipoIp){  
    return this.http.put<Response>(`${this.url}/api/catalogos/tipos-ip/${body.id}`, body)
  }

  public delete(id: number){  
    return this.http.delete<Response>(`${this.url}/api/catalogos/tipos-ip/${id}`)
  }

}

