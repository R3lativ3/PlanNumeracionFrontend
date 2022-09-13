import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ActividadesService {
  
  private url: string = environment.url;

  constructor(private http: HttpClient) { }

  public allActividades(){  
    return this.http.get<ubicacionFisica[]>(`${this.url}/api/catalogos/ubicaciones-fisicas`)
  }

  public getActividad(id: number){  
    return this.http.get<ubicacionFisica>(`${this.url}/api/catalogos/ubicaciones-fisicas/${id}`)
  }

  public createActividad(body: ubicacionFisica){  
    return this.http.post<Response>(`${this.url}/api/catalogos/ubicaciones-fisicas`, body)
  }

  public updateActividad(body: ubicacionFisica){  
    return this.http.put<Response>(`${this.url}/api/catalogos/ubicaciones-fisicas/${body.id}`, body)
  }

  public deleteActividad(id: number){  
    return this.http.delete<Response>(`${this.url}/api/catalogos/ubicaciones-fisicas/${id}`)
  }


  public allEjecucionActividades(){  
    return this.http.get<ubicacionFisica[]>(`${this.url}/api/catalogos/ubicaciones-fisicas`)
  }

  public getEjcucionActividad(id: number){  
    return this.http.get<ubicacionFisica>(`${this.url}/api/catalogos/ubicaciones-fisicas/${id}`)
  }

  public createEjecucionActividad(body: ubicacionFisica){  
    return this.http.post<Response>(`${this.url}/api/catalogos/ubicaciones-fisicas`, body)
  }

  public updateEjecucionActividad(body: ubicacionFisica){  
    return this.http.put<Response>(`${this.url}/api/catalogos/ubicaciones-fisicas/${body.id}`, body)
  }

  public deleteEjecucionActividad(id: number){  
    return this.http.delete<Response>(`${this.url}/api/catalogos/ubicaciones-fisicas/${id}`)
  }
}
