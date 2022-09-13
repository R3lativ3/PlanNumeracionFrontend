import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ipDisplay, ipPost, tipoIp } from '../../servidores/models'
@Component({
  selector: 'app-ip-assign',
  templateUrl: './ip-assign.component.html',
  styleUrls: ['./ip-assign.component.css']
})
export class IpAssignComponent implements OnInit {

  constructor() { }

  @Input() tiposIp: tipoIp[]
  @Output() event = new EventEmitter<ipPost[]>()

  // to handle forms
  ipDisplayList: ipDisplay[] = []
  ipPostList: ipPost[] = []
  
  // to handle model
  ip: ipDisplay = {
    numeroIp: '',
    tipoIp: 0,
    tipo: ''
  }

  ngOnInit(): void {
  }

  addIp(ip: ipDisplay){
    let v = ip.tipo.slice(0,1)

    this.ipDisplayList.push(ip = {
      numeroIp : ip.numeroIp,
      tipoIp : parseInt(v),
      tipo : ip.tipo.slice(1,)
    })

    this.ipPostList.push({
      ip : ip.numeroIp,
      tipoIp : parseInt(v)
    }) 

    this.event.emit(this.ipPostList)
  }


  deleteIp(ip: ipDisplay){
    this.ipDisplayList = this.ipDisplayList.filter(x => x !== ip)
    this.ipPostList = this.ipPostList.filter(x => x.ip !== ip.numeroIp)
    this.event.emit(this.ipPostList)
  }

}
