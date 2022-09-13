import { Component, OnInit } from '@angular/core';
import { user } from '../model';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  usuarios: user[]

  constructor(private backend: UsuariosService) { }

  ngOnInit(): void {
    this.getAll()
  }

  getAll(){
    this.backend.all().subscribe( x => {
      this.usuarios = x
      console.log(this.usuarios)
    })
  }


}

