import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { DestinoService } from '../destino.service';
import { destino } from '../models';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  id: number 
  model: destino = {
    id: 5,
    nombre: '',
    ruta: '',
    ip: '',
    puerto: ''
    
  }
  constructor(private route: ActivatedRoute, private destinoService: DestinoService, private router: Router){}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = +params['id']
      this.get(this.id)
      console.log(this.id)
    })
  }

  get(id:number){
    this.destinoService.get(id).subscribe(x => {
      console.log(x)
      this.model = x
    })
  }

  getDestinoById(){
    this.destinoService.get(this.id).subscribe({
      next: (res:any)=>{
        Swal.fire({
          title: res.message ,
          icon: 'success',
          showConfirmButton: false,
          timer: 2000,
          position:'center'
        })
        this.get(this.id);
      },
      error:(err)=>{
        Swal.fire({
        title: err.error.message,
        icon: 'error',
        timer: 4000,
        position:'center'
        }) 
      }  
    })
  }

  updateDestino(){
    console.log(this.model)
    this.destinoService.update(this.id, this.model).subscribe(x => {
      console.log(x)

      if( x.status === 0 ){
        Swal.fire({
          title: 'Destino Actualizado!',
          icon: 'success',
        }).then(() =>  this.router.navigate(['../../']) )
      }

      if( x.status === 1 ){
        Swal.fire({
          title: 'Error!',
          icon: 'error',
        })
      }
    }, err => console.log(err))
  }

}
