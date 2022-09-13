import { Component, OnInit } from '@angular/core';
import { virtualizador } from '../../model';
import { VirtualizadorService } from '../virtualizador.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  virtualizadores: virtualizador[]
  
  constructor(private backend: VirtualizadorService) { }

  ngOnInit(): void {
    this.getAll()
  }

  getAll(){
    this.backend.all().subscribe(x => this.virtualizadores = x)
  }
}
