import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Response } from 'src/app/app.models';
import { ubicacionFisica } from '../model';

@Injectable({
  providedIn: 'root'
})

export class UbicacionService {

  private url: string = environment.url;

  constructor(private http: HttpClient) { }

  public all(){  
    return this.http.get<ubicacionFisica[]>(`${this.url}/api/catalogos/ubicaciones-fisicas`)
  }

  public get(id: number){  
    return this.http.get<ubicacionFisica>(`${this.url}/api/catalogos/ubicaciones-fisicas/${id}`)
  }

  public create(body: ubicacionFisica){  
    return this.http.post<Response>(`${this.url}/api/catalogos/ubicaciones-fisicas`, body)
  }

  public update(body: ubicacionFisica){  
    return this.http.put<Response>(`${this.url}/api/catalogos/ubicaciones-fisicas/${body.id}`, body)
  }

  public delete(id: number){  
    return this.http.delete<Response>(`${this.url}/api/catalogos/ubicaciones-fisicas/${id}`)
  }

}
