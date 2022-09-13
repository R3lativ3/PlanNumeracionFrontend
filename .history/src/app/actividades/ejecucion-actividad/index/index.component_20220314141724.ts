import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ejecucionActividad } from '../../actividades.model';
import { ActividadesService } from '../../actividades.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  ejecuciones: ejecucionActividad[]
  loading: boolean = true

  constructor(private backend: ActividadesService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.get()
  }

  get(){
    return this.backend.allEjecucionActividades().subscribe(x => {
      this.ejecuciones = x
      this.loading = false
    })
  }

  openModal(content3: string){
		this.modalService.open(content3, { size: 'xl' });
  }

  receivePagination(){

  }

  receiveSearch(){
    
  }
}
