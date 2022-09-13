import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { actividad, actividadPost, ejecucionActividad, ejecucionActividadPost } from './actividades.model';

@Injectable({
  providedIn: 'root'
})
export class ActividadesService {
  
  private url: string = environment.url;

  constructor(private http: HttpClient) { }

  public allActividades(){  
    return this.http.get<actividad[]>(`${this.url}/api/actividades/actividad`)
  }

  public getActividad(id: number){  
    return this.http.get<actividad>(`${this.url}/api/actividades/actividad/${id}`)
  }

  public createActividad(body: actividadPost){  
    return this.http.post<Response>(`${this.url}/api/actividades/actividad`, body)
  }

  public updateActividad(body: actividadPost, id: number){  
    return this.http.put<Response>(`${this.url}/api/actividades/actividad/${id}`, body)
  }

  public deleteActividad(id: number){  
    return this.http.delete<Response>(`${this.url}/api/actividades/actividad/${id}`)
  }


  public allEjecucionActividades(){  
    return this.http.get<ejecucionActividad[]>(`${this.url}/api/actividades/ejecuciones-actividad`)
  }

  public getEjcucionActividad(id: number){  
    return this.http.get<ejecucionActividad>(`${this.url}/api/actividades/ejecuciones-actividad/${id}`)
  }

  public createEjecucionActividad(body: ejecucionActividadPost){  
    const formData = new FormData();
    formData.append('FechaEjecucion', body.fechaEjecucion.toString())
    formData.append('Rfc', body.rfc)
    formData.append('Observaciones', body.observaciones)
    console.log(body.archivoEvidencia)
    formData.append('ArchivoEvidencia', body.archivoEvidencia!)
    formData.append('IdActividadServidor', body.idActividadServidor.toString())
    formData.append('IdServidor', body.idServidor.toString())
    formData.append('IdEstatusEjecucion', body.idEstatusEjecucion.toString())
    return this.http.post<Response>(`${this.url}/api/actividades/ejecuciones-actividad`, formData)
  }

  public updateEjecucionActividad(body: ejecucionActividadPost, id: number){  
    return this.http.put<Response>(`${this.url}/api/actividades/ejecuciones-actividad/${id}`, body)
  }

  public deleteEjecucionActividad(id: number){  
    return this.http.delete<Response>(`${this.url}/api/actividades/ejecuciones-actividad/${id}`)
  }
}
