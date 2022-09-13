import { Component, OnInit, ɵɵtextInterpolate2 } from '@angular/core';
import { ServidoresService } from '../servidores.service';
import { ambiente, rol, ubicacion, empresa, categoria, virtualizador, 
  modeloHW, ipDisplay, ipPost, tipoIp, versionSistemaOperativo, estatusServidor, aplicacion, servidor } from '../models'
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  // Form inputs
  serv: servidor = {
    hostname: '',
    idVersionSistemaOperativo: undefined,
    idModeloHW: undefined,
    idUbicacion: undefined,
    idEmpresa: undefined,
    idAmbiente: undefined,
    idVirtualizador: undefined,
    eos: new Date().toString(),
    eol: new Date().toString(),
    idEstatusServidor: undefined,
    idCategoria: undefined,
    rma: false,
    notas: '',
    roles: [],
    ips: [],
    aplicaciones: []
  }
  listaRoles: number[] = []

  // SelectList Info
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

  message = "lel"
  loading: boolean
  constructor(private backend: ServidoresService, private router: Router) { }

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
  
  addRol(id: number, evt: any){
    if(evt.target.checked){
      this.listaRoles.push(id)
      this.serv.roles = this.listaRoles
    }
    if(!evt.target.checked){
      this.listaRoles = this.listaRoles.filter(x => x !== id)
      this.serv.roles = this.listaRoles
    }
  }

  toArrayId(aplicacionx: aplicacion[]): number[] {
    let arr: number[] = []
    for(let n = 0; n < aplicacionx.length; n++){
      arr[n] = aplicacionx[n].id
    }
    return arr
  }

  receiveMessage($event: aplicacion[]){
    this.serv.aplicaciones = this.toArrayId($event)
  }

  receiveIps($event: ipPost[]){
    this.serv.ips = $event
  }

  getServidor(){
    return this.serv
  }

  create(){
     this.router.navigate(['servidores'])
     /*
    this.backend.postServidor(this.serv).subscribe(data => {
      console.log('lol', data)
     
    })*/
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
}
