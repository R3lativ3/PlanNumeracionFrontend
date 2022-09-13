import { Component, OnInit } from '@angular/core';
import { ServidoresService } from '../servidores.service';
import { PaginatedServidor, Servidor } from '../models'

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {
  
  servidores: PaginatedServidor
  page: number 
  loading: boolean = true
  constructor(private backend: ServidoresService) { }

  ngOnInit(): void {
    this.backend.getElements(this.page).subscribe(
      (response) => {
      this.loading = false;
      console.log('response received');
      console.log(response)
      this.servidores = response;
    },
    (error) => {
      this.loading = false;
      console.log(error)
    });
  }

  receiveSearch($event: PaginatedServidor){
    this.servidores = $event
  }

  receivePagination($event: number){
    this.anotherPage($event)
  }

  anotherPage(page: number){
    this.backend.getElements(page).subscribe(
      (response) => {
      this.loading = false;
      console.log('response received');
      console.log(response)
      this.servidores = response;
    },
    (error) => {
      this.loading = false;
      console.log(error)
    });
  }

}
