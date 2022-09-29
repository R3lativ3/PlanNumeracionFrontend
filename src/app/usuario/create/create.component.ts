import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { usuarioPost } from '../models';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  model: usuarioPost ={
    nombres: '',
    apellidoPaterno: '',
    apellidoMaterno: '',
    attuid: '',
    psw: ''

  }

  constructor(private usuarioService: UsuarioService, private router: Router) { }

  ngOnInit(): void {
  }

  create(){
    this.usuarioService.create(this.model).subscribe(response=>{
      Swal.fire({
        icon: 'success',
        showConfirmButton: false,
        timer: 2000,
        position:'center'
      })
    }
        ,error=> {
        console.log(error)
        Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: error.error.title,
        showConfirmButton: false,
        timer:2000
        })
      }
      )
  }

}
