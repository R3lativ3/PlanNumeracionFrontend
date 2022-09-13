import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ambiente, rol, ubicacion, empresa, categoria, virtualizador, modeloHW, tipoIp, versionSistemaOperativo, estatusServidor, aplicacion, servidor2 } from '../models';
import { ServidoresService } from '../servidores.service';

@Component({
  selector: 'app-advanced-search',
  templateUrl: './advanced-search.component.html',
  styleUrls: ['./advanced-search.component.css']
})
export class AdvancedSearchComponent implements OnInit {

  loading = true
  serv: servidor2
  
  ambientes: ambiente[]
  roles: rol[]
  ubicaciones: ubicacion[]
  empresas: empresa[]
  categorias: categoria[]
  virtualizadores: virtualizador[]
  modelosHW: modeloHW[]
  tiposIp: tipoIp[]
  versionesSistemaOperativo: versionSistemaOperativo[]
  estatusServidores: estatusServidor[]
  aplicaciones: aplicacion[]
  
  constructor(private backend: ServidoresService) { }

  @Output() event = new EventEmitter<servidor2>()

  sendServidorSearch(){
    this.event.emit(this.serv)
  }

  ngOnInit(): void {
    this.getAmbiente()
    this.getRol()
    this.getUbicacion()
    this.getEmpresa()
    this.getCategoria()
    this.getVirtualizador()
    this.getModeloHW()
    this.getTipoIp()
    this.getVersionesSistemaOperativo()
    this.getEstatusServidor()
  }
  
  getAmbiente(){
    this.backend.getAmbientes().subscribe(
      (response) => {
      this.loading = false;
      this.ambientes = response;
    },
    (error) => {
      this.loading = false;
      console.log(error)
    });
  }

  getRol(){
    this.backend.getRoles().subscribe(
      (response) => {
      this.loading = false;
      this.roles = response;
    },
    (error) => {
      this.loading = false;
      console.log(error)
    });
  }

  getUbicacion(){
    this.backend.getUbicacionesFisicas().subscribe(
      (response) => {
      this.loading = false;
      this.ubicaciones = response;
    },
    (error) => {
      this.loading = false;
      console.log(error)
    })
  }

  getEmpresa(){
    this.backend.getEmpresas().subscribe(
      (response) => {
      this.loading = false;
      this.empresas = response;
    },
    (error) => {
      this.loading = false;
      console.log(error)
    })
  }

  getCategoria(){
    this.backend.getCategorias().subscribe(
      (response) => {
      this.loading = false;
      this.categorias = response;
    },
    (error) => {
      this.loading = false;
      console.log(error)
    })
  }

  getVirtualizador(){
    this.backend.getVirtualizadores().subscribe(
      (response) => {
      this.loading = false;
      this.virtualizadores = response;
    },
    (error) => {
      this.loading = false;
      console.log(error)
    })
  }

  getModeloHW(){
    this.backend.getModelosHW().subscribe(
      (response) => {
      this.loading = false;
      this.modelosHW = response;
    },
    (error) => {
      this.loading = false;
      console.log(error)
    })
  }

  getTipoIp(){
    this.backend.getTiposIp().subscribe(
      (response) => {
      this.loading = false;
      this.tiposIp = response;
    },
    (error) => {
      this.loading = false;
      console.log(error)
    })
  }

  getVersionesSistemaOperativo(){
    this.backend.getVersionesSistemaOperativo().subscribe(
      (response) => {
      this.loading = false;
      this.versionesSistemaOperativo = response;
    },
    (error) => {
      this.loading = false;
      console.log(error)
    })
  }

  getEstatusServidor(){
    this.backend.getEstatusServidor().subscribe(
      (response) => {
      this.loading = false;
      this.estatusServidores = response;
    },
    (error) => {
      this.loading = false;
      console.log(error)
    })
  }

  getAplicacion(){
    this.backend.getAplicaciones().subscribe(
      (response) => {
      this.loading = false;
      this.aplicaciones = response;
    },
    (error) => {
      this.loading = false;
      console.log(error)
    })
  }


  getData(){
    return this.serv
  }
}
