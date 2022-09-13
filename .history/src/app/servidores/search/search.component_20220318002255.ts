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
  option = 1
  @Output() event = new EventEmitter<PaginatedServidor>()
  
  constructor(private backend: ServidoresService) { }

  ngOnInit(): void {
  }

  search(){
    if(this.text.length > 2){
      this.backend.searchServidor(this.text, this.page, this.option).subscribe(response => {
        console.log(response)
        this.event.emit(response)
      })
    }
  }
}
