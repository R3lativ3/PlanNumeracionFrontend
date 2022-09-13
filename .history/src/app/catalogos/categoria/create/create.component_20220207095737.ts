import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { delay } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { CategoriaService } from '../categoria.service';
import { postCategoria } from '../model';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  categoria: postCategoria = {
    categoriaServidor : '',
    rma : 0,
    status : 1
  }
  constructor(private backend: CategoriaService, private router: Router) { }

  ngOnInit(): void {
  }

  create(){

    this.categoria.rma = this.categoria.rma ? 1 : 0
    this.categoria.status = this.categoria.status ? 1 : 0

    this.backend.create(this.categoria).subscribe((response) => {
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
    }, (error) => {
      console.log('este es')
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: error,
        showConfirmButton: false,
        timer:2000
      })
    })
  }

  l(){

  }

  getCategoria(){
    return this.categoria
  }
} 
