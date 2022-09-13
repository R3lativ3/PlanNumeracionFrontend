import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { postVersionSistemaOperativo, sistemaOperativo } from '../../model';
import { VersionSistemaOperativoService } from '../version-sistema-operativo.service';
import Swal from 'sweetalert2';
import { SistemaOperativoService } from '../../sistema-operativo/sistema-operativo.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})

export class CreateComponent implements OnInit {

  sistemasOperativos: sistemaOperativo[]

  model: postVersionSistemaOperativo = {
    version : '',
    idSistemaOperativo : 1,
    status : 1
  }
  constructor(private backend: VersionSistemaOperativoService, private so: SistemaOperativoService, private router: Router) { }

  ngOnInit(): void {
    this.getSistemasOperativo()
  }

  getSistemasOperativo(){
     this.so.all().subscribe(x => this.sistemasOperativos = x)
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
      this.router.navigate(['/catalogos/versiones-sistemas-operativos/'])
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
