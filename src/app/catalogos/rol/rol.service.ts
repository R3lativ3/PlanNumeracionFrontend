import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Response } from 'src/app/app.models';
import { rol } from '../model';

@Injectable({
  providedIn: 'root'
})
export class RolService {

  private url: string = environment.url;

  constructor(private http: HttpClient) { }

  public all(){  
    return this.http.get<rol[]>(`${this.url}/api/catalogos/roles`)
  }

  public get(id: number){  
    return this.http.get<rol>(`${this.url}/api/catalogos/roles/${id}`)
  }

  public create(body: rol){  
    return this.http.post<Response>(`${this.url}/api/catalogos/roles`, body)
  }

  public update(body: rol){  
    return this.http.put<Response>(`${this.url}/api/catalogos/roles/${body.id}`, body)
  }

  public delete(id: number){  
    return this.http.delete<Response>(`${this.url}/api/catalogos/roles/${id}`)
  }

}