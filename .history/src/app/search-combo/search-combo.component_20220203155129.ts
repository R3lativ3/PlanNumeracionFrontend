import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { environment } from 'src/environments/environment';

interface aplicacion{
  id: number
  aplicacion: string
  status: number
  idRolServidor: number
}

@Component({
  selector: 'app-search-combo',
  templateUrl: './search-combo.component.html',
  styleUrls: ['./search-combo.component.css']
})
export class SearchComboComponent implements OnInit {

  private url: string = environment.url;
  aplicaciones: aplicacion[]
  loading = true
  selectedItems: aplicacion[];
  dropdownSettings = {};
  closeDropdownSelection = false;
  @Output() event = new EventEmitter<aplicacion[]>()
  @Input() text: string
  @Input() asignadas: number[]

  constructor(private http: HttpClient) { }
  
  ngOnInit() : void{
    this.getAplicaciones()
    this.dropdownSettings = {
      singleSelection: false,
      enableCheckAll: false,
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 5,
      maxHeight: 100,
      allowSearchFilter:true,
      idField: 'id',
      textField: 'aplicacion'
    };
  }

  onItemSelect(item: aplicacion) {
    this.event.emit(this.selectedItems)
  }

  onItemDeSelect(item:aplicacion){
    this.event.emit(this.selectedItems)
  }
  getAplicaciones(){
    return this.http.get<aplicacion[]>(`${this.url}/api/catalogos/aplicaciones`).subscribe(
      (response) => {
      this.loading = false;
      this.aplicaciones = response;
      if(this.asignadas.length > 0){
        this.selectedItems = this.aplicaciones.filter( x => this.asignadas.includes(x.id))
      }
    })
  }
}
