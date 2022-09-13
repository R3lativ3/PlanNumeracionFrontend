import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ipDisplay, ipPost, tipoIp } from '../models'
import { ServidoresService } from '../servidores.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ip-assign',
  templateUrl: './ip-assign.component.html',
  styleUrls: ['./ip-assign.component.css']
})
export class IpAssignComponent implements OnInit {

  constructor(private backend: ServidoresService) { }

  @Input() tiposIp: tipoIp[]
  @Output() event = new EventEmitter<ipPost[]>()

  // to handle forms
  ipDisplayList: ipDisplay[] = []
  ipPostList: ipPost[] = []
  
  ipValid = false
  // to handle model
  ip: ipDisplay = {
    numeroIp: '',
    tipoIp: 0,
    tipo: ''
  }

  ngOnInit(): void {
  }

  async addIp(ip: ipDisplay){
    let v = ip.tipo.slice(0,1)

    let res = await this.isIpAvailable(ip.numeroIp)
    if(res === 1) return
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

  async isIpAvailable(ip: string): Promise<number>{
    let m = await this.backend.getIpAvailability(ip).toPromise()
    if( m.status === 1){
      Swal.fire({
        title: 'Ip Ocupada',
        icon: 'error',
        text: m.message
      })
    }
    return m.status
  }

  ipv4Validation(){
    const regex = /^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/;
    if(regex.test(this.ip.numeroIp)){
      this.ipValid = true
    }else{
      this.ipValid = false
    }
  }
}
