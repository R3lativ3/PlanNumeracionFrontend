import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnChanges {

  @Input() totalPages: number
  @Input() currentPage: number
  pages: number[] = []

  @Output() event = new EventEmitter<number>()

  constructor() {
    this.generateList()
   }

  ngOnChanges(changes: SimpleChanges) {
    this.generateList()
  }

  changePage(page: number){
    this.event.emit(page)
  }
  
  generateList(){
    console.log(this.totalPages)
    console.log(this.currentPage)
    this.pages = []
    if(this.currentPage+10 < this.totalPages){
      console.log('a')
      for(let i = this.currentPage; i < this.currentPage+10; i++){
        console.log(i)
        this.pages.push(i)
      }
    }
  
    if(this.currentPage+10 > this.totalPages){
      console.log('a')
      for(let i = this.currentPage; i < this.totalPages; i++){
        console.log(i)
        this.pages.push(i)
      }
    }
  }
}
