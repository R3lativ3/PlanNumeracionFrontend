import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Input() totalPages: number
  
  @Output() event = new EventEmitter<number>()

  constructor() { }

  ngOnInit(): void {
  
  }

}
