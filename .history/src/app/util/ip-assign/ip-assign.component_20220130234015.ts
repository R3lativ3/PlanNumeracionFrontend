import { Component, OnInit } from '@angular/core';
import { ipDisplay, ipPost, tipoIp } from '../../servidores/models'
@Component({
  selector: 'app-ip-assign',
  templateUrl: './ip-assign.component.html',
  styleUrls: ['./ip-assign.component.css']
})
export class IpAssignComponent implements OnInit {

  constructor() { }

  // to handle list
  tiposIp: tipoIp[]

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
  }


  deleteIp(ip: ipDisplay){
    this.ipDisplayList = this.ipDisplayList.filter(x => x !== ip)
    this.ipPostList = this.ipPostList.filter(x => x.ip !== ip.numeroIp)
  }

}
