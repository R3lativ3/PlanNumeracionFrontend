import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-select-box',
  templateUrl: './select-box.component.html',
  styleUrls: ['./select-box.component.css']
})

export class SelectBoxComponent implements OnInit {

  models: model[]
  loading = true
  selectedItems: number[];
  
  dropdownSettings = {};
  closeDropdownSelection = false;

  @Output() event = new EventEmitter<number[]>()
  @Input() modelInput: any

  constructor() { 
    console.log(this.modelInput)
    console.log('elementos mostrados ')
   
  }
  
  ngOnInit() : void{
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
    this.selectedItems.push(item)
    this.event.emit(this.selectedItems)
  }

  onItemDeSelect(item:number){
    let inde = this.selectedItems.indexOf(item)
    if(inde > -1 ){
      this.selectedItems.splice(inde, 1)
    }
    console.log(this.selectedItems)
    this.event.emit(this.selectedItems)
  }
  
}

interface model{
  id: number
  value: string
}