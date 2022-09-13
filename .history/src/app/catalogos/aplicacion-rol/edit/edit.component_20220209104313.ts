import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AplicacionService } from '../aplicacion-rol.service';
import { aplicacion } from '../../model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id : number
  model: aplicacion
  base: aplicacion

  constructor( private route: ActivatedRoute, private backend: AplicacionService, private router: Router) { }
  
  ngOnInit(): void {

    this.route.params.subscribe(params => {
      console.log(params)
      this.id = +params['id']
      this.getModel(this.id)
    })

  }
  
  modifiedValues(base: aplicacion, model: aplicacion): string{
    let newValueColor = 'color:#82a951'
    let text = ''
    
    if(base.aplicacion !== model.aplicacion)  
      text += `${this.base.aplicacion} -> <strong style="${newValueColor}">${this.model.aplicacion}</strong> <br/>`
      
    text += '<br>'
    text += '¿Deseas continuar?'

    return text
  }

  update(){
    Swal.fire({
      title: 'Los siguientes valores van a cambiar:',
      html: this.modifiedValues(this.base, this.model),
      showDenyButton: true,
      showConfirmButton: true,
      focusConfirm: true,
    }).then((result) => {
      if(result.isConfirmed){
        this.create()
      }else if (result.isDenied){
        Swal.fire('Cancelado')
      }
    })
  }

  create(){
    this.model.idRolServidor = this.model.idRolServidor === 0 ? undefined : this.model.idRolServidor 
    this.backend.update(this.model).subscribe(x => {
      console.log(x)

      if( x.status === 0 ){
        Swal.fire({
          title: 'Servidor Actualizado!',
          icon: 'success',
          text: x.message
        }).then(() =>  this.router.navigate(['/catalogos/aplicaciones/']) )
      }

      if( x.status === 1 ){
        Swal.fire({
          title: 'Error!',
          icon: 'error',
          text: x.message
        })
      }
    }, err => console.log(err))
  }

  getModel(id: number){
    this.backend.get(id).subscribe( data => {
      this.model = data
      this.base = Object.assign({}, this.model)
    })
  }

  getBase(){
    return this.base
  }

  getModelInfo(){
    return this.model
  }

}
