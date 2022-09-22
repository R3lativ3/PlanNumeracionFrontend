import { Component, OnInit } from '@angular/core';
import { PruebaService } from '../prueba.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(private backend: PruebaService) { }

  ngOnInit(){
    this.backend.getUsuarios().subscribe(x => console.log(x))
  }

}
