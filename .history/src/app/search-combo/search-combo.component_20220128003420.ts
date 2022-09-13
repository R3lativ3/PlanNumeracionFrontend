import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

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
  cities: string[] = [];
  selectedItems: string[] = [];
  singleselectedItems: string[] = [];
  aplicaciones: string[] = []
  dropdownSettings = {};
  singledropdownSettings = {};
  closeDropdownSelection = false;
  @Output() event = new EventEmitter<string[]>()
  @Input() text: string
  @Input() aplicacionesList: string []

  constructor(private http: HttpClient) { }
  
  ngOnInit() : void{
    this.cities = ['Mumbai', 'New Delhi', 'Bangaluru', 'Pune', 'Navsari', 'New Delhi', 'Bangaluru', 'Pune', 'Navsari', 'New Delhi', 'Bangaluru', 'Pune', 'Navsari', 'New Delhi', 'Bangaluru', 'Pune', 'Navsari'];
    this.selectedItems = ['Pune', 'Navsari'];

    this.dropdownSettings = {
      singleSelection: false,
      enableCheckAll: false,
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 5,
      maxHeight: 100,
      allowSearchFilter:true
    };
  }

  onItemSelect(item: any) {
    console.log(item);
  }

  public getAplicaciones(){
    return this.http.get<aplicacion[]>(`${this.url}/api/catalogos/aplicaciones`)
  }


  send(){
    this.event.emit(this.selectedItems)
  }

}
