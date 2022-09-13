import { Component, OnInit } from '@angular/core';
import { periodicidad } from '../../model';
import { PeriodicidadService } from '../periodicidad.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  periodicidades: periodicidad[]
  constructor(private backend: PeriodicidadService) { }

  ngOnInit(): void {
    this.getAll()
  }

  getAll(){
    this.backend.all().subscribe(x => this.periodicidades = x)
  }
}
