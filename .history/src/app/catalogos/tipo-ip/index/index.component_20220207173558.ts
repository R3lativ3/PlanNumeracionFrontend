import { Component, OnInit } from '@angular/core';
import { tipoIp } from '../../model';
import { TipoIpService } from '../tipo-ip.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  tiposIp: tipoIp[]
  constructor(private backend: TipoIpService) { }

  ngOnInit(): void {
    this.getAll()
  }

  getAll(){
    this.backend.all().subscribe(x => this.tiposIp = x)
  }
}
