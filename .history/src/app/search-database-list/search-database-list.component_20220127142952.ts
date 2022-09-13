import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-database-list',
  templateUrl: './search-database-list.component.html',
  styleUrls: ['./search-database-list.component.css']
})
export class SearchDatabaseListComponent implements OnInit {
  cities: string[] = [];
  selectedItems: string[] = [];
  singleselectedItems: string[] = [];
  dropdownSettings = {};
  singledropdownSettings = {};
  closeDropdownSelection = false;

  constructor(){}
  ngOnInit() :void{
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
