import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private modalService: NgbModal, private _ActivatedRoute: ActivatedRoute) { }
  hola = this._ActivatedRoute.snapshot.paramMap.get("id");

  ngOnInit(): void {
    console.log(this.hola)
  }
  
  openLg(content3: string) {
		this.modalService.open(content3, { size: 'lg' });
	}

}
