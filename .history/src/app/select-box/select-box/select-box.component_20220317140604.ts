import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-select-box',
  templateUrl: './select-box.component.html',
  styleUrls: ['./select-box.component.css']
})

export class SelectBoxComponent implements OnInit {

  models: model[] = []
  loading = true
  selectedItems: number[];
  ready = false
  dropdownSettings = {};
  closeDropdownSelection = false;

  @Output() event = new EventEmitter<number[]>()
  @Input() modelInput: model[]

  constructor() { }
  
  ngOnInit() : void{
    this.ready = true
    this.models = this.modelInput
    this.selectedItems = []
    
    this.dropdownSettings = {
      singleSelection: false,
      enableCheckAll: false,
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 5,
      maxHeight: 100,
      allowSearchFilter:true,
      idField: 'id',
      textField: 'value'
    };
  }

  onItemSelect(item: number) {
    this.selectedItems.push(item)
    this.event.emit(this.selectedItems)
  }

  onItemDeSelect(item:number){
    const index = this.selectedItems.indexOf(item)
    if(index > -1){
      this.selectedItems.splice(index, 1)
    }
    this.event.emit(this.selectedItems)
  }
  
}

interface model{
  id: number
  value: string
}