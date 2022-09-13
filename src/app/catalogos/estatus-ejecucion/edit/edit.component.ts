import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { estatusEjecucion } from '../../model';
import { EstatusEjecucionService } from '../estatus-ejecucion.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  index = '/catalogos/estatus-ejecucion/'
  id : number
  model: estatusEjecucion
  base: estatusEjecucion

  constructor( private route: ActivatedRoute, private backend: EstatusEjecucionService, private router: Router) { }
  
  ngOnInit(): void {

    this.route.params.subscribe(params => {
      console.log(params)
      this.id = +params['id']
      this.getModel(this.id)
    })

  }

  modifiedValues(base: estatusEjecucion, model: estatusEjecucion): string{
    let newValueColor = 'color:#82a951'
    let text = ''

    if(base.estatus !== model.estatus){
      text += `${this.base.estatus} -> <strong style="${newValueColor}">${this.model.estatus}</strong> <br/>`
    }
    text += '<br>'
    text += '¿Deseas continuar?'

    return text
  }


  update(){
    let text = this.modifiedValues(this.base, this.model)
    console.log(text.charAt(0))
    if(text.charAt(0) !== '<'){
      Swal.fire({
        title: 'Los siguientes valores van a cambiar:',
        html: text,
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
    }else{
      Swal.fire({
        title: 'Ningun valor ha cambiado',
        text: "Debes modificar un valor",
        icon: 'warning',
      })
    }
  
  }

  create(){
    this.backend.update(this.model).subscribe(x => {
      console.log(x)

      if( x.status === 0 ){
        Swal.fire({
          title: 'Servidor Actualizado!',
          icon: 'success',
          text: x.message
        }).then(() =>  this.router.navigate([this.index]) )
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

  cancel(){
    return this.router.navigate([this.index])
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
