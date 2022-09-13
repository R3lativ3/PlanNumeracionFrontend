import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { postUser, user } from './model';
import { Response } from 'src/app/servidores/models';

@Injectable({
  providedIn: 'root'
})

export class UsuariosService {

  private url: string = environment.url;

  constructor(private http: HttpClient) { }

  public all(){  
    return this.http.get<categoria[]>(`${this.url}/api/catalogos/categorias`)
  }

  public get(id: number){  
    return this.http.get<categoria>(`${this.url}/api/catalogos/categorias/${id}`)
  }

  public create(categoria: postCategoria){  
    return this.http.post<Response>(`${this.url}/api/catalogos/categorias`, categoria)
  }

  public update(categoria: categoria){  
    return this.http.put<Response>(`${this.url}/api/catalogos/categorias/${categoria.id}`, categoria)
  }

  public delete(id: number){  
    return this.http.delete(`${this.url}/api/catalogos/categorias/${id}`)
  }

}
