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
  categoria: postCategoria
  constructor(private backend: CategoriaService, private router: Router) { }

  ngOnInit(): void {
  }

  create(){

      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        didOpen: function(){
          setTimeout(() => {
            Swal.close()
          }, 5000);
        }
      })


    /*this.backend.create(this.categoria).subscribe(x => {

    })*/
  }

}
