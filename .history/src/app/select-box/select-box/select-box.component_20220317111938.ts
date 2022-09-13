import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-select-box',
  templateUrl: './select-box.component.html',
  styleUrls: ['./select-box.component.css']
})
export class SelectBoxComponent implements OnInit {

  private url: string = environment.url;
  aplicaciones: number[]
  loading = true
  selectedItems: number[];
  dropdownSettings = {};
  closeDropdownSelection = false;
  @Output() event = new EventEmitter<number[]>()
  @Input() text: string
  @Input() asignadas: number[]

  constructor(private http: HttpClient) { }
  
  ngOnInit() : void{
    //this.getAplicaciones()
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

  onItemSelect(item: number) {
    this.event.emit(this.selectedItems)
  }

  onItemDeSelect(item:number){
    this.event.emit(this.selectedItems)
  }

  /*
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
*/
}
