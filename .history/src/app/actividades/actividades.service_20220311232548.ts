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
    if (data === Object(data) || Array.isArray(data)) {
        for (var i in data) {
            console.log(data[i])
            this.createFormData(formData, key + '[' + i + ']', data[i]);
        }
    } else {
        formData.append(key, data);
    }
}

  public createEjecucionActividad(body: ejecucionActividadPost[]){  
    //let arr:FormData 
    const formData = new FormData()
    this.createFormData(formData, 'item', body)
    /*
    for(let i = 0; i< body.length; i++){
      const formData = new FormData();
      formData.append('FechaEjecucion', body[i].fechaEjecucion.toString())
      formData.append('Rfc', body[i].rfc)
      formData.append('Observaciones', body[i].observaciones)
      console.log(body[i].archivoEvidencia)
      formData.append('ArchivoEvidencia', body[i].archivoEvidencia!)
      formData.append('IdActividadServidor', body[i].idActividadServidor.toString())
      formData.append('IdServidor', body[i].idServidor.toString())
      formData.append('IdEstatusEjecucion', body[i].idEstatusEjecucion.toString())
    }*/

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
