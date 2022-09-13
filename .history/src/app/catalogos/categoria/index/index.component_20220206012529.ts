import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../categoria.service';
import { categoria } from '../model';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  categorias: categoria[]
  constructor(private backend: CategoriaService) { }

  ngOnInit(): void {
    this.getAll()
  }

  getAll(){
    this.backend.all().subscribe( x => {
      console.log(x)
      this.categorias = x
    })
  }

}
