import { Component, OnInit } from '@angular/core';
import { DestinoService } from 'src/app/destino/destino.service';
import { destino } from 'src/app/destino/models';
import { SharedService } from 'src/app/shared.service';
import { CargasService } from '../cargas.service';
import { uploadFile } from '../models';

@Component({
  selector: 'app-realizar-carga',
  templateUrl: './realizar-carga.component.html',
  styleUrls: ['./realizar-carga.component.css']
})
export class RealizarCargaComponent implements OnInit {
  model: uploadFile = {
    destinos : []
  }
  destinos: destino[] = []
  selected: number[] = [5]

  constructor(private cargasService: CargasService, private sharedService: SharedService, private destinoService: DestinoService) { }

  ngOnInit(): void {
    this.getDestinos()
  }

  getDestinos(){
    this.destinoService.getAll().subscribe(x => {
      this.destinos = x
      this.destinos.forEach(x => x.nombre = `${x.nombre} - Puerto: ${x.ip}, Path: ${x.ruta}`)
      console.log(this.destinos)
    })    
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
    console.log(this.model)
    this.cargasService.sendFile(this.model).subscribe(x => {
      console.log(x)
    })
  }
}
