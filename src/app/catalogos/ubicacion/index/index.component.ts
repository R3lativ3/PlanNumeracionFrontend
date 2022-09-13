import { Component, OnInit } from '@angular/core';
import { ubicacionFisica } from '../../model';
import { UbicacionService } from '../ubicacion.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  ubicacionesFisicas: ubicacionFisica[]
  
  constructor(private backend: UbicacionService) { }

  ngOnInit(): void {
    this.getAll()
  }

  getAll(){
    this.backend.all().subscribe(x => this.ubicacionesFisicas = x)
  }

}
