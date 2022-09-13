import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { postVersionSistemaOperativo } from '../../model';
import { VersionSistemaOperativoService } from '../version-sistema-operativo.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})

export class CreateComponent implements OnInit {
  model: postVersionSistemaOperativo = {
    version : '',
    idSistemaOperativo : 1,
    status : 1
  }
  constructor(private backend: VersionSistemaOperativoService, private router: Router) { }

  ngOnInit(): void {
  }

  create(){
    this.categoria.status = this.categoria.status ? 1 : 0

    this.backend.create(this.categoria).subscribe(response => {
      console.log(this.categoria)
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
    return this.categoria
  }
} 
