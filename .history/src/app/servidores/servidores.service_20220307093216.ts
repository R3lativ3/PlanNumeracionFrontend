import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PaginatedServidor, servidor, Response, aplicacion, ambiente, rol, ubicacion, empresa, estatusServidor, 
  categoria, virtualizador, modeloHW, DetalleServidor, tipoIp, versionSistemaOperativo, Servidor, servidor2 } from './models'


@Injectable({
  providedIn: 'root'
})
export class ServidoresService {
  private url: string = environment.url;
  constructor(private http: HttpClient) { }

  public getElements(page: number){
    page = page === undefined ? 1 : page;
    return this.http.get<PaginatedServidor>(`${this.url}/api/servidores/servidor/all/${page}`)
  }

  public getServidor(id: number){
    return this.http.get<DetalleServidor>(`${this.url}/api/servidores/servidor/${id}`)
  }

  public searchServidor(hostname: string, page: number){
    return this.http.get<PaginatedServidor>(`${this.url}/api/servidores/servidor/property?hostname=${hostname}&page=${page}`) 
  }

  public advancedSearchServidor(servidor: servidor2, page?: number){
    if(page === undefined) page = 1
    let httpHeaders = new HttpHeaders({'Content-Type' : 'application/json'});
    const body=JSON.stringify(servidor)
    return this.http.post<PaginatedServidor>(`${this.url}/api/servidores/servidor/advanced-search/${page}`, body, { headers: httpHeaders }) 
  }

  public getAdvancedSearchServidorXLS(servidor: servidor2){
    const body=JSON.stringify(servidor)
    return this.http.post<Blob>(`${this.url}/api/servidores/servidor/advanced-search/xls`, body) 
  }

  public getServidorPostDto(id: number){
    return this.http.get<servidor>(`${this.url}/api/servidores/servidor/post-dto/${id}`)
  }

  public postServidor(data: servidor){
    let httpHeaders = new HttpHeaders({
      'Content-Type' : 'application/json'
    });
    const body=JSON.stringify(data)
    console.log(body)
    return this.http.post(`${this.url}/api/servidores/servidor`,body, { headers: httpHeaders })
  }

  public updateServidor(id: number, data: servidor){
    let httpHeaders = new HttpHeaders({
      'Content-Type' : 'application/json'
    });
    const body=JSON.stringify(data)
    console.log(body)
    return this.http.put<Response>(`${this.url}/api/servidores/servidor/${id}`, body, { headers: httpHeaders })
  }

  public getIpAvailability(ip: string){
    return this.http.get<Response>(`${this.url}/api/servidores/ip/available/${ip}`)
  }

  public getAmbientes(){
    return this.http.get<ambiente[]>(`${this.url}/api/catalogos/ambientes`)
  }

  public getRoles(){
    return this.http.get<rol[]>(`${this.url}/api/catalogos/roles`)
  }

  public getUbicacionesFisicas(){
    return this.http.get<ubicacion[]>(`${this.url}/api/catalogos/ubicaciones-fisicas`)
  }

  public getEmpresas(){
    return this.http.get<empresa[]>(`${this.url}/api/catalogos/empresas`)
  }

  public getCategorias(){
    return this.http.get<categoria[]>(`${this.url}/api/catalogos/categorias`)
  }

  public getVirtualizadores(){
    return this.http.get<virtualizador[]>(`${this.url}/api/catalogos/virtualizadores`)
  }

  public getModelosHW(){
    return this.http.get<modeloHW[]>(`${this.url}/api/catalogos/modelos-hw`)
  }

  public getTiposIp(){
    return this.http.get<tipoIp[]>(`${this.url}/api/catalogos/tipos-ip`)
  }

  public getVersionesSistemaOperativo(){
    return this.http.get<versionSistemaOperativo[]>(`${this.url}/api/catalogos/version-sistema-operativo`)
  }

  public getAplicaciones(){
    return this.http.get<aplicacion[]>(`${this.url}/api/catalogos/aplicaciones`)
  }

  public getEstatusServidor(){
    return this.http.get<estatusServidor[]>(`${this.url}/api/catalogos/estatus-servidor`)
  }
}
