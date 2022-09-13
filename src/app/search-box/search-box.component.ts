import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ServidorBasicInfo } from '../app.models';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {

  private url: string = environment.url;
  servidores: ServidorBasicInfo[]
  loading = true
  selectedItems: ServidorBasicInfo;
  dropdownSettings = {};
  closeDropdownSelection = false;
  @Output() event = new EventEmitter<number>()

  constructor(private http: HttpClient) { }
  
  ngOnInit() : void{
    this.getInfo()
    this.dropdownSettings = {
      singleSelection: true,
      enableCheckAll: false,
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 10,
      maxHeight: 300,
      allowSearchFilter:true,
      idField: 'id',
      textField: 'info'
    };
  }

  onItemSelect(item: ServidorBasicInfo) {
    this.event.emit(item.id)
  }

  onItemDeSelect(item:ServidorBasicInfo){
    this.event.emit(undefined)
  }
  getInfo(){
    return this.http.get<ServidorBasicInfo[]>(`${this.url}/api/servidores/servidor/basic-info`).subscribe(
      (response) => {
        this.loading = false;
        this.servidores = response;
        console.log(this.servidores)
    })
  }
}
