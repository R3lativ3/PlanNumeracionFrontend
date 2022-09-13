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

  searchEnable: boolean = false
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
    this.backend.advancedSearch(this.busqueda, 1).subscribe(data => {
      console.log(data)
      this.ejecuciones = data
    })
  }

  downloadEvidenceZip(){
    this.backend.DownloadAdvancedSearchZipFile(this.busqueda).subscribe(data => {
      console.log(data)
      const blob = new Blob([data], {
        type: 'application/zip'
      })
      const url = window.URL.createObjectURL(blob)
      window.open(url)
    })
  }

  downloadSearchXls(){


    this.backend.DownloadAdvancedSearchExcelFile(this.busqueda).subscribe(file => {
        let downloadLink = document.createElement('a');
        let b = new Blob([file], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' })
        downloadLink.href = window.URL.createObjectURL(b);
        downloadLink.setAttribute('download', "EjecucionActividad.xlsx");
        document.body.appendChild(downloadLink);
        this.loading = false
        downloadLink.click();
        downloadLink.parentNode!.removeChild(downloadLink);
      }, (error) => {
        console.log('err')
        console.log(error)
      })
  }
}
