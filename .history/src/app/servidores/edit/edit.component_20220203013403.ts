import { Component, OnInit } from '@angular/core';
import { servidor } from '../models';
import { ServidoresService } from '../servidores.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  private serv: servidor
  constructor(private backend: ServidoresService) { }

  ngOnInit(): void {
    this.backend.getServidorPostDto(1796).subscribe( data => {
      this.serv = data
      console.log(data)
    })
  }

  getServidor(){
    return this.serv
  }

}
