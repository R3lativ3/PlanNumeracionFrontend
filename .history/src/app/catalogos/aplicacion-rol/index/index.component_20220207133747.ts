import { Component, OnInit } from '@angular/core';
import { aplicacion } from '../../model';
import { AplicacionService } from '../aplicacion-rol.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
 
  aplicaciones: aplicacion[]
  
  constructor(private backend: AplicacionService) { }

  ngOnInit(): void {
    this.getAll()
  }

  getAll(){
    this.backend.all().subscribe(x => this.aplicaciones = x)
  }
  


  getAplicaciones(){
    return this.aplicaciones
  }
}
