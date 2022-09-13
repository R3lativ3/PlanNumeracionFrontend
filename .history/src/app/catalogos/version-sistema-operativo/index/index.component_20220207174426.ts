import { Component, OnInit } from '@angular/core';
import { versionSistemaOperativo } from '../../model';
import { VersionSistemaOperativoService } from '../version-sistema-operativo.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  versionesSO: versionSistemaOperativo[]
  
  constructor(private backend: VersionSistemaOperativoService) { }

  ngOnInit(): void {
    this.getAll()
  }
  
  getAll(){
    this.backend.all().subscribe(x => this.versionesSO = x)
  }

}
