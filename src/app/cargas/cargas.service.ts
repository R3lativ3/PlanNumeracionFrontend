import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SharedService } from '../shared.service';
import { environment } from 'src/environments/environment';
import { uploadFile } from './models';
@Injectable({
  providedIn: 'root'
})
export class CargasService {

  private url = environment.url

  constructor(private client: HttpClient ,private sharedService: SharedService) { }

  sendFile(model: uploadFile){
    const formData = new FormData();     
    this.sharedService.convertModelToFormData(model.destinos, formData, 'destinos')
    formData.append('archivo', model.archivo ? model.archivo : "")

    return this.client.post(`${this.url}/api/cargaDestino/send-file`, formData)
  }

}
