import { Component, OnInit } from '@angular/core';
import { ServidoresService } from '../servidores.service';
import { PaginatedServidor, servidor2 } from '../models'
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {
  
  servidores: PaginatedServidor
  page: number 
  loading: boolean = true
  constructor(private backend: ServidoresService, private modalService: NgbModal) { }

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
    this.modalService.dismissAll("advancedSearch")
  }

  receiveSearchAdvanced($event: servidor2){
    console.log($event)
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

  openModal(content3: string){
		this.modalService.open(content3, { size: 'xl' });
  }
}
