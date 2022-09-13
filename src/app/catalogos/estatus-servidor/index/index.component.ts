import { Component, OnInit } from '@angular/core';
import { estatusServidor } from '../../model';
import { EstatusServidorService } from '../estatus-servidor.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  estatusServidor: estatusServidor[]
  
  constructor(private backend: EstatusServidorService) { }

  ngOnInit(): void {
    this.getAll()
  }

  getAll(){
    this.backend.all().subscribe(x => this.estatusServidor = x)
  }
}
