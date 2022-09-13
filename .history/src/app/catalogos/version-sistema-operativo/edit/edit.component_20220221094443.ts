import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { postSistemaOperativo, postVersionSistemaOperativo, versionSistemaOperativo } from '../../model';
import Swal from 'sweetalert2';
import { VersionSistemaOperativoService } from '../version-sistema-operativo.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  index = '/catalogos/sistemas-operativos/'
  id : number
  model: versionSistemaOperativo
  model2: postVersionSistemaOperativo
  base: versionSistemaOperativo

  constructor( private route: ActivatedRoute, private backend: VersionSistemaOperativoService, private router: Router) { }
  
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = +params['id']
      this.getModel(this.id)
    })
  }

  modifiedValues(base: postSistemaOperativo, model: postSistemaOperativo): string{
    let newValueColor = 'color:#82a951'
    let text = ''

    if(base.sistemaOperativo !== model.sistemaOperativo){
      text += `${this.base.sistemaOperativo} -> <strong style="${newValueColor}">${this.model.sistemaOperativo}</strong> <br/>`
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
      this.model2.idSistemaOperativo = data.idSistemaOperativo
      this.model2.version = data.version
      this.model2.status = data.status
      this.base = Object.assign({}, this.model2)
    })
  }

  getBase(){
    return this.base
  }

  getModelInfo(){
    return this.model
  }

}
