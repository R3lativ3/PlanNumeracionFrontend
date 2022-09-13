import { HttpClient, HttpHeaders } from '@angular/common/http';
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
  
  createFormData(formData:any, key:any, data:any) {
    if (data === Object(data) || Array.isArray(data) && !(data instanceof File)) {
        for (var i in data) {
            this.createFormData(formData, key + '[' + i + ']', data[i]);
        }
    } else {
        console.log("recorrido en else append",key, data)
        formData.append(key, data);
    }
}

  public createEjecucionActividad(body: ejecucionActividadPost){  
    const formData = new FormData();    

    formData.append('FechaEjecucion[0]', body.fechaEjecucion.toString())
    formData.append('Rfc[0]', body.rfc)
    formData.append('Observaciones[0]', body.observaciones)
    formData.append('ArchivoEvidencia[0]', body.archivoEvidencia!)
    console.log('ArchivoEvidencia[0]', body.archivoEvidencia)
    formData.append('IdActividadServidor[0]', body.idActividadServidor.toString())
    formData.append('IdServidor[0]', body.idServidor.toString())
    formData.set('IdEstatusEjecucion[0]', body.idEstatusEjecucion.toString())
    console.log(formData)
    return this.http.post<Response>(`${this.url}/api/actividades/ejecuciones-actividad`, formData)
  }

  public updateEjecucionActividad(body: ejecucionActividadPost, id: number){  
    return this.http.put<Response>(`${this.url}/api/actividades/ejecuciones-actividad/${id}`, body)
  }

  public deleteEjecucionActividad(id: number){  
    return this.http.delete<Response>(`${this.url}/api/actividades/ejecuciones-actividad/${id}`)
  }
}
