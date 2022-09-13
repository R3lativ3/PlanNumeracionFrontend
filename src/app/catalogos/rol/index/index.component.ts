import { Component, OnInit } from '@angular/core';
import { rol } from '../../model';
import { RolService } from '../rol.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  roles: rol[]
  
  constructor(private backend: RolService) { }

  ngOnInit(): void {
    this.getAll()
  }

  getAll(){
    return this.backend.all().subscribe(x => this.roles = x)
  }
}
