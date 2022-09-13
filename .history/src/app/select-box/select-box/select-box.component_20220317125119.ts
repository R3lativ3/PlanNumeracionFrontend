import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-select-box',
  templateUrl: './select-box.component.html',
  styleUrls: ['./select-box.component.css']
})

export class SelectBoxComponent implements OnInit {

  models: model[]
  loading = true
  selectedItems: number[] = [];
  ready = false
  dropdownSettings = {};
  closeDropdownSelection = false;

  @Output() event = new EventEmitter<number[]>()
  @Input() modelInput: model[]

  constructor() { 
   
  }
  
  ngOnInit() : void{
    
    console.log(this.modelInput)
    this.ready = true
    console.log('elementos mostrados ')
    this.selectedItems = []
    this.models = this.modelInput
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
    this.event.emit(this.selectedItems)
  }

  onItemDeSelect(item:number){
    
    this.event.emit(this.selectedItems)
  }
  
}

interface model{
  id: number
  value: string
}