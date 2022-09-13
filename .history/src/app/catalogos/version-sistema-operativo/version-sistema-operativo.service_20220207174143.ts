import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Response } from 'src/app/app.models';
import { ubicacionFisica, versionSistemaOperativo } from '../model';

@Injectable({
  providedIn: 'root'
})

export class VersionSistemaOperativoService {

  private url: string = environment.url;

  constructor(private http: HttpClient) { }

  public all(){  
    return this.http.get<versionSistemaOperativo[]>(`${this.url}/api/catalogos/ubicaciones-fisicas`)
  }

  public get(id: number){  
    return this.http.get<versionSistemaOperativo>(`${this.url}/api/catalogos/ubicaciones-fisicas/${id}`)
  }

  public create(body: versionSistemaOperativo){  
    return this.http.post<Response>(`${this.url}/api/catalogos/ubicaciones-fisicas`, body)
  }

  public update(body: versionSistemaOperativo){  
    return this.http.put(`${this.url}/api/catalogos/ubicaciones-fisicas/${body.id}`, body)
  }

  public delete(id: number){  
    return this.http.delete(`${this.url}/api/catalogos/ubicaciones-fisicas/${id}`)
  }

}

