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

  ngOnChanges() {
    this.generateList()
  }

  changePage(page: number){
    this.event.emit(page)
  }
  
  backPage(){
    if(this.currentPage > 1){
        this.event.emit(this.currentPage-1)
    }
  }

  nextPage(){
    if(this.currentPage < this.totalPages){
        this.event.emit(this.currentPage+1)
    }
  }
  
  generateListLessThanTenResults(pages: number[]){
    for(let i = 1; i <= this.totalPages; i++){
      pages.push(i)
    }
    return pages
  }

  generateListMoreThanTenResults(pages: number[]){
    if(this.currentPage+10 < this.totalPages){
      for(let i = this.currentPage; i < this.currentPage+10; i++){
        pages.push(i)
      }
    }
  
    if(this.currentPage+10 >= this.totalPages){
      for(let i = this.totalPages-10; i <= this.totalPages; i++){
        pages.push(i)
      }
    }
    return pages
  }


  generateList(){
    if(this.totalPages < 10) this.generateListLessThanTenResults(this.pages)
    if(this.totalPages >= 10) this.generateListMoreThanTenResults(this.pages)
  }
}
