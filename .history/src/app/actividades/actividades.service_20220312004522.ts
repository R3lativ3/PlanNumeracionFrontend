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

    formData.append('item[0][FechaEjecucion]', body.fechaEjecucion.toString())
    formData.append('item[0][Rfc]', body.rfc)
    formData.append('item[0][Observaciones]', body.observaciones)
    formData.append('item[0][ArchivoEvidencia]', body.archivoEvidencia!, body.archivoEvidencia!.name)
    console.log('item[0][ArchivoEvidencia]', body.archivoEvidencia)
    formData.append('item[0][IdActividadServidor]', body.idActividadServidor.toString())
    formData.append('item[0][IdServidor]', body.idServidor.toString())
    formData.set('item[0][IdEstatusEjecucion]', body.idEstatusEjecucion.toString())
    formData.forEach(x => console.log(x))

    return this.http.post<Response>(`${this.url}/api/actividades/ejecuciones-actividad`, formData)
  }

  public updateEjecucionActividad(body: ejecucionActividadPost, id: number){  
    return this.http.put<Response>(`${this.url}/api/actividades/ejecuciones-actividad/${id}`, body)
  }

  public deleteEjecucionActividad(id: number){  
    return this.http.delete<Response>(`${this.url}/api/actividades/ejecuciones-actividad/${id}`)
  }
}
