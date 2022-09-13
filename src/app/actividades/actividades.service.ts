import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { actividad, actividadPost, busquedaEjecuciones, ejecucionActividad, ejecucionActividadPost, paginatedActividad, responsablesActividad, tiposActividad } from './actividades.model';
import { Response } from '../servidores/models';

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

  public allEjecucionActividades(page: number){  
    page = page === undefined ? 1 : page;
    return this.http.get<paginatedActividad>(`${this.url}/api/actividades/ejecuciones-actividad/all/${page}`)
  }

  public getEjcucionActividad(id: number){  
    return this.http.get<ejecucionActividad>(`${this.url}/api/actividades/ejecuciones-actividad/${id}`)
  }
  
  public createEjecucionActividad(body: ejecucionActividadPost){  
    const formData = new FormData();    

    formData.append('FechaEjecucion', body.fechaEjecucion.toString())
    formData.append('Rfc', body.rfc)
    formData.append('Observaciones', body.observaciones)
    formData.append('ArchivoEvidencia', body.archivoEvidencia!)
    formData.append('IdActividadServidor', body.idActividadServidor.toString())
    formData.append('IdServidor', body.idServidor.toString())
    formData.set('IdEstatusEjecucion', body.idEstatusEjecucion.toString())


    return this.http.post<Response>(`${this.url}/api/actividades/ejecuciones-actividad`, formData)
  }

  public updateEjecucionActividad(body: ejecucionActividadPost, id: number){  
    return this.http.put<Response>(`${this.url}/api/actividades/ejecuciones-actividad/${id}`, body)
  }

  public deleteEjecucionActividad(id: number){  
    return this.http.delete<Response>(`${this.url}/api/actividades/ejecuciones-actividad/${id}`)
  }

  public DownloadAdvancedSearchExcelFile(search: busquedaEjecuciones){  
    return this.http.post(`${this.url}/api/actividades/ejecuciones-actividad/advanced-search/evidence/xls`, search, {
      responseType: 'arraybuffer'
    })
  }

  public DownloadAdvancedSearchZipFile(search: busquedaEjecuciones){  
    return this.http.post(`${this.url}/api/actividades/ejecuciones-actividad/advanced-search/evidence/zip`, search, {
      responseType: 'arraybuffer'
    })
  }

  public advancedSearch(search: busquedaEjecuciones, page: number){  
    return this.http.post<paginatedActividad>(`${this.url}/api/actividades/ejecuciones-actividad/advanced-search/${page}`, search)
  }
  // Responsable actividad
  public getResponsableActividad(){  
    return this.http.get<responsablesActividad[]>(`${this.url}/api/catalogos/responsables-actividad`)
  }

  // Tipo de actividad
  public getTipoActividad(){  
    return this.http.get<tiposActividad[]>(`${this.url}/api/catalogos/tipos-actividad`)
  }
}
