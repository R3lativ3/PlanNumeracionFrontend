import { Component, OnInit } from '@angular/core';
import { CargasService } from '../cargas.service';
import { cargaDestino } from '../models';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  loading = true
  cargas: cargaDestino[] = []
  constructor(private backend: CargasService) { }

  ngOnInit(): void {
    this.getAll()
  }

  getAll(){
    this.backend.getAll().subscribe(x => {
      this.cargas = x
      this.loading = false
    })
  }
}
