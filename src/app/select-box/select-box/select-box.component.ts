import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-select-box',
  templateUrl: './select-box.component.html',
  styleUrls: ['./select-box.component.css']
})

export class SelectBoxComponent implements OnInit {

 
  models: model[] = []
  loading = true
  selectedItems: model[];
  selectedItemsOutput: number[] = [];
  ready = false
  dropdownSettings : any
  closeDropdownSelection = false;

  @Output() event = new EventEmitter<number[]>()
  @Input() modelInput: model[]
  @Input() selectedItemsInput:[] = []

  constructor() {}

  ngOnChanges() {
    if(this.models.length != this.modelInput.length){
      this.ready = false
      this.models = this.modelInput                                                                                     //  data in rows
      this.selectedItems = this.selectedItemsInput.length > 0 ? this.setSelectedItems(this.selectedItemsInput) : []     //  data selected
      this.selectedItemsOutput = this.selectedItemsInput.length > 0 ? this.selectedItemsInput : []
      this.ready = true
    }
        
  }
  
  ngOnInit() : void{
    this.ready = true
    this.models = this.modelInput                                                                                       //  data in rows
    this.selectedItems = this.selectedItemsInput.length > 0 ? this.setSelectedItems(this.selectedItemsInput) : []       //  data selected
    this.selectedItemsOutput = this.selectedItemsInput.length > 0 ? this.selectedItemsInput : [] 
    this.dropdownSettings = {
      singleSelection: false,
      enableCheckAll: true,
      selectAllText: 'Seleccionar Todos',
      unSelectAllText: 'Deseleccionar Todos',
      searchPlaceholderText: 'Buscar',
      itemsShowLimit: 10,
      maxHeight: 400,
      allowSearchFilter:true,
      idField: 'id',
      textField: 'value',
    };
  }


  setSelectedItems(selected: number[]): model[]{
    let model: model[]
    model = this.models.filter( i => selected.includes( i.id ) );
    return model
  }

  onItemSelect(item: model) {
    if(!this.selectedItemsOutput.find(x => x === item.id)){
      this.selectedItemsOutput.push(item.id) 
    }
    this.event.emit(this.selectedItemsOutput)
  }

  onItemDeSelect(item:model){
    this.selectedItemsOutput = this.selectedItemsOutput.filter(x => x !== item.id)
    this.event.emit(this.selectedItemsOutput)
  }

  onItemDeSelectAll(item:model){
    this.selectedItemsOutput = []
    this.event.emit(this.selectedItemsOutput)
  }

  onItemSelectAll(){
    this.selectedItemsOutput = this.modelInput.map(x => x.id)
    this.event.emit(this.selectedItemsOutput)
  }
}

interface model{
  id: number
  value: string
}