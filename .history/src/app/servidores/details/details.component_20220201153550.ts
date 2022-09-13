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

  constructor(private modalService: NgbModal, private _ActivatedRoute: ActivatedRoute, private backend: ServidoresService) { }
  hola : string = this._ActivatedRoute.snapshot.paramMap.get("id") == null ? 0 : parseInt(this._ActivatedRoute.snapshot.paramMap.get("id"))
  servidor: DetalleServidor
  id: string | null
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe(params => {
      console.log(params)
      this.id = params.get('id') as string 
      this.getServidor(parseInt(this.id))
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
