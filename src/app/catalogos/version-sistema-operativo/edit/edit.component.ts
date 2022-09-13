import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { postVersionSistemaOperativo, versionSistemaOperativo } from '../../model';
import Swal from 'sweetalert2';
import { VersionSistemaOperativoService } from '../version-sistema-operativo.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  loading = true
  index = '/catalogos/sistemas-operativos/'
  id : number
  model2: versionSistemaOperativo
  base: versionSistemaOperativo

  constructor( private route: ActivatedRoute, private backend: VersionSistemaOperativoService, private router: Router) { }
  
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = +params['id']
      this.getModel(this.id)
    })
  }

  modifiedValues(base: postVersionSistemaOperativo, model: postVersionSistemaOperativo): string{
    let newValueColor = 'color:#82a951'
    let text = ''

    if(base.version !== model.version){
      text += `${this.base.version} -> <strong style="${newValueColor}">${this.model2.version}</strong> <br/>`
    }
    text += '<br>'
    text += '¿Deseas continuar?'

    return text
  }

  update(){
    let text = this.modifiedValues(this.base, this.model2)
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
    this.backend.update(this.model2, this.id).subscribe(x => {
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
      console.log(data)
      this.model2 = data
      this.base = Object.assign({}, this.model2)
      this.loading = false
    })
  }

  getBase(){
    return this.base
  }

  getModelInfo(){
    return this.model2
  }

}
