import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { CategoriaService } from '../categoria.service';
import { categoria } from '../model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id : number
  model: categoria
  base: categoria

  constructor( private route: ActivatedRoute, private backend: CategoriaService) { }
  
  ngOnInit(): void {

    this.route.params.subscribe(params => {
      console.log(params)
      this.id = +params['id']
      this.getServidorInfo(this.id)
    })

  }
  
  modifiedValues(base: categoria, model: categoria): string{
    let newValueColor = 'color:#82a951'
    let text = ''
    
    if(base.categoriaServidor !== model.categoriaServidor)  
      text += `${this.base.categoriaServidor} -> <strong style="${newValueColor}">${this.model.categoriaServidor}</strong> <br/>`
      
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
    this.backend.update(this.model).subscribe(x => {
      console.log(x)
      if( x.status === 0 ){
        Swal.fire({
          title: 'Servidor Actualizado!',
          icon: 'success',
          text: x.message
        })
      }
    })
  }

  getServidorInfo(id: number){
    this.backend.get(id).subscribe( data => {
      this.model = data
    })
  }


}
