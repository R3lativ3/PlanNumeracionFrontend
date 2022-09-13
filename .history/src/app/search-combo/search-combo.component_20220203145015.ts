import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { environment } from 'src/environments/environment';

interface aplicacion{
  id: number
  nombre: string
  status: number
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
  
  ngOnInit() : void{
    this.getAplicaciones()

    this.selectedItems = []
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

  getAplicaciones(){
    return this.http.get<aplicacion[]>(`${this.url}/api/catalogos/aplicaciones`)
      .subscribe(
        (response) => {
        this.loading = false;
        this.aplicaciones = response;
        this.aplicaciones2 = this.aplicaciones.filter( x => x.id == 1594)
        console.log(this.asignadas)
        console.log(this.aplicaciones2)
      },
      (error) => {
        this.loading = false;
        console.log(error)
      })
  }

}
