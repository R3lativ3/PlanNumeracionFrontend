import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router'
import { ServidoresService } from '../servidores.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private modalService: NgbModal, private _ActivatedRoute: ActivatedRoute, private backend: ServidoresService) { }
  hola = this._ActivatedRoute.snapshot.paramMap.get("id");

  ngOnInit(): void {
    console.log(this.hola)
  }

  getServidor(id: number){
    this.backend.getServidor(id).subscribe(data => console.log(data))
  }
  
  openLg(content3: string) {
		this.modalService.open(content3, { size: 'lg' });
	}

}
