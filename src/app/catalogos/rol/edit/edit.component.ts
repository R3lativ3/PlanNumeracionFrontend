import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { rol } from '../../model';
import Swal from 'sweetalert2';
import { RolService } from '../rol.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  index = '/catalogos/roles/'
  id : number
  model: rol
  base: rol

  constructor( private route: ActivatedRoute, private backend: RolService, private router: Router) { }
  
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = +params['id']
      this.getModel(this.id)
    })
  }

  modifiedValues(base: rol, model: rol): string{
    let newValueColor = 'color:#82a951'
    let text = ''

    if(base.rol !== model.rol){
      text += `${this.base.rol} -> <strong style="${newValueColor}">${this.model.rol}</strong> <br/>`
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
