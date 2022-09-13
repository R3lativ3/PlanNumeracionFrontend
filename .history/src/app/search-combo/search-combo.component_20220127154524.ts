import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-combo',
  templateUrl: './search-combo.component.html',
  styleUrls: ['./search-combo.component.css']
})
export class SearchComboComponent implements OnInit {
  cities: string[] = [];
  selectedItems: string[] = [];
  singleselectedItems: string[] = [];
  dropdownSettings = {};
  singledropdownSettings = {};
  closeDropdownSelection = false;

  @Input() message: string

  constructor() { }

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

}
