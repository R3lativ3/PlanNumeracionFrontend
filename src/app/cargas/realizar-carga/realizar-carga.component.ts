import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { CargasService } from '../cargas.service';
import { uploadFile } from '../models';

@Component({
  selector: 'app-realizar-carga',
  templateUrl: './realizar-carga.component.html',
  styleUrls: ['./realizar-carga.component.css']
})
export class RealizarCargaComponent implements OnInit {
  model: uploadFile

  selected: number[] = [5]

  destinos=[
    {
      id: 5,
      destino: "destino b"
    },
  ]
  constructor(private cargasService: CargasService, private sharedService: SharedService) { }

  ngOnInit(): void {
  }

  onFileSelected(event: any) {
    const file:File = event.target.files[0];
    if(file){
      this.model.archivo = file;
    }
  }
  setModel(model: any[]){
    return this.sharedService.setModel(model)
  }

  send(){
    this.cargasService.sendFile(this.model).subscribe(x => {

    })
  }
}
