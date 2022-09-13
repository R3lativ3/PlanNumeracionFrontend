import { Component, OnInit } from '@angular/core';
import { sistemaOperativo } from '../../model';
import { SistemaOperativoService } from '../sistema-operativo.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  sistemasOpearativos: sistemaOperativo[]
  constructor(private backend: SistemaOperativoService) { }

  ngOnInit(): void {
  }

  getAll(){
    this.backend.all().subscribe(x => this.sistemasOpearativos = x)
  }

}
