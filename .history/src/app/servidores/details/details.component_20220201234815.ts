import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router'
import { ServidoresService } from '../servidores.service';
import { DetalleServidor } from '../models';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private modalService: NgbModal, private route: ActivatedRoute, private backend: ServidoresService) { }
  servidor: DetalleServidor
  id: number
  loading = true

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log(params)
      this.id = +params['id']
      this.getServidor(this.id)
    })
  }

  getServidor(id: number){
    this.backend.getServidor(id).subscribe(data =>{
      this.servidor = data
    })
  }

  getServidora(){
    return this.servidor
  }
  
  openLg(content3: string) {
		this.modalService.open(content3, { size: 'lg' });
	}

}
