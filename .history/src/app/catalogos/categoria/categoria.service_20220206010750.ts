import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private url: string = environment.url;

  constructor(private http: HttpClient) { }

  public all(){  
    return this.http.get(`${this.url}/api/catalogos/categorias`)
  }

  public get(id: number){  
    return this.http.get(`${this.url}/api/catalogos/categorias/${id}`)
  }

  public create(){  
    return this.http.get(`${this.url}/api/catalogos/categorias`)
  }

  public update(){  
    return this.http.get(`${this.url}/api/catalogos/categorias`)
  }

}
