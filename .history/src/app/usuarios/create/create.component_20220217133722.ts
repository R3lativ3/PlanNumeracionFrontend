import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { postUser } from '../model';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  model: postUser 
  constructor(private backend: UsuariosService, private router: Router) { }

  ngOnInit(): void {
    this.create()
    this.getRoles()
  }


  getRoles(){
    this.backend.getRoles().subscribe(
      (response) => {
      this.loading = false;
      this.ambientes = response;
    },
    (error) => {
      this.loading = false;
      console.log(error)
    });
  }


  create(){
    this.model.status = this.model.status ? 1 : 0

    this.backend.create(this.model).subscribe(response => {
      console.log(this.model)
      if(response.status == 1){
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: 'Your work has not been saved',
          showConfirmButton: false,
          timer:2000
        })  
      }
      this.router.navigate(['/catalogos/categorias/'])
    }, error => {
      console.log(error)
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: error.error.title,
        showConfirmButton: false,
        timer:2000
      })
    })
  }

  getCategoria(){
    return this.model
  }
} 

