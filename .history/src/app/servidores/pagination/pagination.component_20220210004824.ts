import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Input() totalPages: number
  currentPage: 1
  pages: number[]

  @Output() event = new EventEmitter<number>()

  constructor() { }

  ngOnInit(): void {
    this.generateList()
  }
  generateList(){
    if(this.currentPage+10 < this.totalPages){
      for(let i = this.currentPage; i < this.currentPage+10; i++){
        this.pages.push(i)
      }
    }
  
    if(this.currentPage+10 > this.totalPages){
      for(let i = this.currentPage; i < this.totalPages; i++){
        this.pages.push(i)
      }
    }
  }
}
