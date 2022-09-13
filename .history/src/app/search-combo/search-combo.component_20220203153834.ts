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
  aplicaciones2: aplicacion[]
  loading = true
  selectedItems: string[] = [];
  dropdownSettings = {};
  closeDropdownSelection = false;
  @Output() event = new EventEmitter<string[]>()
  @Input() text: string
  @Input() asignadas: number[]

  constructor(private http: HttpClient) { }
  
  async ngOnInit() : Promise<void>{
    this.aplicaciones = await this.getAplicaciones()
    this.aplicaciones2 = this.aplicaciones
    this.selectedItems = this.aplicaciones2.filter( x => this.asignadas.includes(x.id)).map(x => x.aplicacion)

    //this.selectedItems = this.aplicaciones2.map(x => x.nombre)
    /*this.aplicaciones.includes(
      x => {
      if(x.id in this.asignadas){
        return x.nombre
      }
    })*/

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

  async getAplicaciones(): Promise<aplicacion[]>{
    let m = await this.http.get<aplicacion[]>(`${this.url}/api/catalogos/aplicaciones`).toPromise()
    console.log(m)
    if( m === null){
      return []
    }
    return m
  }
/*
  return this.http.get<aplicacion[]>(`${this.url}/api/catalogos/aplicaciones`)
  .subscribe(
    (response) => {
    this.loading = false;
    this.aplicaciones = response;
    this.aplicaciones2 = this.aplicaciones.filter( x => this.asignadas.includes(x.id))
    console.log(this.asignadas)
    console.log(this.aplicaciones2)
  },
  (error) => {
    this.loading = false;
    console.log(error)
  })
*/
}
