import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { busquedaEjecuciones, ejecucionActividad, paginatedActividad } from '../../actividades.model';
import { ActividadesService } from '../../actividades.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  ejecuciones: paginatedActividad
  busqueda: busquedaEjecuciones

  searchEnable: boolean
  page: number 
  loading: boolean = true

  constructor(private backend: ActividadesService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.get()
  }

  get(){
    return this.backend.allEjecucionActividades(this.page).subscribe(x => {
      this.ejecuciones = x
      this.loading = false
      console.log(x)
    })
  }

  openModal(content3: string){
		this.modalService.open(content3, { size: 'xl' });
  }

  receivePagination(){

  }

  receiveSearch($event: busquedaEjecuciones){
    this.busqueda = $event
    this.searchEnable = true
    console.log($event)
    this.modalService.dismissAll("advancedSearch")
    this.backend.advancedSearchDownloadFile(this.busqueda).subscribe(data => {
      console.log(data)
      const blob = new Blob([data], {
        type: 'application/zip'
      })
      const url = window.URL.createObjectURL(blob)
      window.open(url)
    })
  }

  download(){
    this.backend.advancedSearchDownloadFile(this.busqueda).subscribe(data => {
      console.log(data)
      const blob = new Blob([data], {
        type: 'application/zip'
      })
      const url = window.URL.createObjectURL(blob)
      window.open(url)
    })
  }
}
