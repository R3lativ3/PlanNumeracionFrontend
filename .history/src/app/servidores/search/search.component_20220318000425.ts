import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PaginatedServidor } from '../models';
import { ServidoresService } from '../servidores.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  text: ''
  page = 1
  option:number
  @Output() event = new EventEmitter<PaginatedServidor>()
  
  constructor(private backend: ServidoresService) { }

  ngOnInit(): void {
  }

  search(){
    console.log(this.option)
    /*
    this.backend.searchServidor(this.text, this.page).subscribe(response => {
      console.log(response)
      this.event.emit(response)
    })*/

  }
}
