import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private modalService: NgbModal) { }


  ngOnInit(): void {
  }
  
  
  openLg(content3: string) {
		this.modalService.open(content3, { size: 'lg' });
	}

}
