import { Component, OnInit } from '@angular/core';
import { ejecucionActividadPost } from '../../actividades.model';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  ejecucion: ejecucionActividadPost 
  constructor() { }

  ngOnInit(): void {
  }

  create(){

  }

  getModel(){
    
  }
}
