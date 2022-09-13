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
  loading = true
  selectedItems: string[] = [];
  dropdownSettings = {};
  closeDropdownSelection = false;
  @Output() event = new EventEmitter<string[]>()
  @Input() text: string

  constructor(private http: HttpClient) { }
  
  ngOnInit() : void{
    this.getAplicaciones()
    this.selectedItems =  []

    this.dropdownSettings = {
      singleSelection: false,
      enableCheckAll: false,
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 5,
      maxHeight: 100,
      allowSearchFilter:true,
      idField: 'id',
      textField: 'nombre'
    };
  }

  onItemSelect(item: any) {
    this.event.emit(this.selectedItems)
  }

  getAplicaciones(){
    return this.http.get<aplicacion[]>(`${this.url}/api/catalogos/aplicaciones`)
      .subscribe(
        (response) => {
        this.loading = false;
        this.aplicaciones = response;
      },
      (error) => {
        this.loading = false;
        console.log(error)
      })
  }

}
