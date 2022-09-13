import { Component, OnInit } from '@angular/core';
import { ServidoresService } from '../servidores.service';
import { AdvancedSearchServidor, PaginatedServidor, servidor2 } from '../models'
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

  advancedSearchServidores :servidor2
  advancedSearchEnable = false
  advancedSearchTextValues: string

  constructor(private backend: ServidoresService, private modalService: NgbModal) { }

  ngOnInit(): void {
    console.log('renderizado')
    this.getServidoresInfo()
  }

  getServidoresInfo(){
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

  clearAdvancedSearch(){
    this.advancedSearchEnable = false
    this.getServidoresInfo()
  }

  getXLSByAdvancedSearch(){
  this.loading = true
  this.backend.getAdvancedSearchServidorXLS(this.advancedSearchServidores).subscribe(file => {
    let downloadLink = document.createElement('a');
    let b = new Blob([file], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' })
    downloadLink.href = window.URL.createObjectURL(b);
    downloadLink.setAttribute('download', "Busqueda.xlsx");
    document.body.appendChild(downloadLink);
    this.loading = false
    downloadLink.click();
    downloadLink.parentNode!.removeChild(downloadLink);

    }, (error) => {
      console.log('err')
      console.log(error)
    })
  }

  async receiveSearchAdvanced($event: AdvancedSearchServidor){
    this.advancedSearchServidores = $event.servidor
    this.advancedSearchTextValues = $event.busqueda
    this.loading = true
    this.advancedSearchEnable = true
    console.log($event)
    this.modalService.dismissAll("advancedSearch")
    this.backend.advancedSearchServidor(this.advancedSearchServidores, 1).subscribe(x => {
      this.loading = false
      console.log(x)
      this.servidores = x
    }, error => console.log(error))
  }

  receivePagination($event: number){
    this.anotherPage($event)
  }

  anotherPage(page: number){
    if(this.advancedSearchEnable){
      this.loading = true
      this.backend.advancedSearchServidor(this.advancedSearchServidores, page).subscribe(x => {
        this.loading = false
        console.log(x)
        this.servidores = x
      }, (error) => {
        this.loading = false;
        console.log(error)
      })
    }else{
      this.backend.getElements(page).subscribe(
        (response) => {
        this.loading = false;
        console.log(response)
        this.servidores = response;
      },
      (error) => {
        this.loading = false;
        console.log(error)
      });
    }

  }

  openModal(content3: string){
		this.modalService.open(content3, { size: 'xl' });
  }
}
