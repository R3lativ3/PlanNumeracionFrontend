import { Component, OnInit } from '@angular/core';
import { empresa } from '../../model';
import { EmpresaService } from '../empresa.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  empresas: empresa[]
  constructor(private backend: EmpresaService) { }

  ngOnInit(): void {
    getAll()
  }

  getAll(){
    this.backend.all().subscribe(resp => this.empresas = resp)
  }
}
