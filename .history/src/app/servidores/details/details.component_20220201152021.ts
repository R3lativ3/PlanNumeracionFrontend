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
  hola = this._ActivatedRoute.snapshot.paramMap.get("id");
  servidor: DetalleServidor

  ngOnInit(): void {
    console.log(this.hola)
  }

  getServidor(id: number){
    this.backend.getServidor(id).subscribe(data =>{
      this.servidor = data
    })
  }
  
  openLg(content3: string) {
		this.modalService.open(content3, { size: 'lg' });
	}

}
