import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Input() totalPages: number
  @Input() currentPage: number
  pages: number[]

  @Output() event = new EventEmitter<number>()

  constructor() {
    this.generateList()
   }

  ngOnInit(): void {
    this.generateList()
  }
  generateList(){
    console.log(this.totalPages)
    console.log(this.currentPage)
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
