import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AplicacionService } from '../aplicacion-rol.service';
import { aplicacion, postAplicacion } from '../../model';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  
  model: postAplicacion = {
    aplicacion : '',
    status : 1,
    idRolServidor: 1,
  }

  constructor(private backend: AplicacionService, private router: Router) { }

  ngOnInit(): void {
  }

  create(){
    this.model.status = this.model.status ? 1 : 0

    this.backend.create(this.model).subscribe(response => {
      if(response.status == 1){
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: 'Your work has not been saved',
          showConfirmButton: false,
          timer:2000
        })  
      }
      this.router.navigate(['/catalogos/aplicaciones/'])
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
