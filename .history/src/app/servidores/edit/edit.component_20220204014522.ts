import { Component, OnInit } from '@angular/core';
import { toJSDate } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-calendar';
import Swal from 'sweetalert2';
import { servidor, ambiente, rol, ubicacion, empresa, categoria, modeloHW, tipoIp, versionSistemaOperativo, virtualizador, estatusServidor, aplicacion, ipPost } from '../models';
import { ServidoresService } from '../servidores.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  listaRoles: number[] = []
  serv: servidor //interfaz para modelo 
  public servFijo: servidor // interfaz para comparar que cambio  
  hola: number
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

  loading: boolean

  constructor(private backend: ServidoresService) { }

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

    this.backend.getServidorPostDto(1796).subscribe( data => {
      this.serv = data
      this.serv.eos = this.serv.eos.toString().split('T')[0]
      this.serv.eol = this.serv.eol.toString().split('T')[0]
      this.servFijo = Object.assign({}, this.serv)
    })
  }

  toArrayId(aplicacionx: aplicacion[]): number[] {
    let arr: number[] = []
    for(let n = 0; n < aplicacionx.length; n++){
      arr[n] = aplicacionx[n].id
    }
    return arr
  }

  modifiedValues(base: servidor, model: servidor): string{
    let newValueColor = 'color:#82a951'
    let text = ''
    if(base.eos !== model.eos) 
      text += `${base.eos} - <strong>${model.eos}</strong> <br/>` 
    if(base.eol !== model.eol) 
      text += `${base.eol} - <strong>${model.eol}</strong> <br/>`
    if(base.idVersionSistemaOperativo !== model.idVersionSistemaOperativo){
      text += `${ this.versionesSistemaOperativo.filter(x => x.id == base.idVersionSistemaOperativo).map(z => z.version) } -> 
        <strong style="${newValueColor}">${ this.versionesSistemaOperativo.filter(x => x.id == model.idVersionSistemaOperativo).map(z => z.version) }</strong> <br/>`
    }
    
    if(base.idModeloHW !== model.idModeloHW)                              
      text += `${this.modelosHW.filter(x => x.id == base.idModeloHW).map(z => z.modelo)} -> <strong style="${newValueColor}">${this.modelosHW.filter(x => x.id == model.idModeloHW).map(z => z.modelo)}</strong> <br/>`

    if(base.idUbicacion !== model.idUbicacion)                                
      text += `${this.ubicaciones.filter(x => x.id == base.idUbicacion).map(z => z.ubicacionServidor)} -> <strong style="${newValueColor}">${this.ubicaciones.filter(x => x.id == model.idUbicacion).map(z => z.ubicacionServidor)}</strong> <br/>`
    
    if(base.idEmpresa !== model.idEmpresa) 
      text += `${this.empresas.filter(x => x.id == base.idEmpresa).map(z => z.nombreEmpresa)} -> <strong style="${newValueColor}">${this.empresas.filter(x => x.id == model.idEmpresa).map(z => z.nombreEmpresa)}</strong> <br/>`
    
    if(base.idAmbiente !== model.idAmbiente) 
      text += `${this.ambientes.filter(x => x.id == base.idAmbiente).map(z => z.tipoAmbiente)} -> <strong style="${newValueColor}">${this.ambientes.filter(x => x.id == model.idAmbiente).map(z => z.tipoAmbiente)}</strong> <br/>`
    
    if(base.idVirtualizador !== model.idVirtualizador) 
      text += `${this.virtualizadores.filter(x => x.id == base.idVirtualizador).map(z => z.virtualizador)} -> <strong style="${newValueColor}">${this.virtualizadores.filter(x => x.id == model.idVirtualizador).map(z => z.virtualizador)}</strong> <br/>`

    if(base.idEstatusServidor !== model.idEstatusServidor) 
      text += `${this.estatusServidores.filter(x => x.id == base.idEstatusServidor).map(z => z.estatus)} -> <strong style="${newValueColor}">${this.estatusServidores.filter(x => x.id == model.idEstatusServidor).map(z => z.estatus)}</strong> <br/>`
    
    if(base.idCategoria !== model.idCategoria) 
      text += `${this.categorias.filter(x => x.id == base.idCategoria).map(z => z.categoriaServidor)} -> <strong style="${newValueColor}">${this.categorias.filter(x => x.id == model.idCategoria).map(z => z.categoriaServidor)}</strong> <br/>`
    
    if(base.rma !== model.rma) 
      text += `${base.rma} - <strong style="${newValueColor}">${model.rma}</strong> <br/>`
      
    text += '<br>'
    text += '??Deseas continuar?'

    return text
  }

  update(){
    Swal.fire({
      title: 'Los siguientes valores van a cambiar:',
      html: this.modifiedValues(this.servFijo, this.serv),
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
    this.backend.updateServidor(1796, this.serv).subscribe(x => {
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

  receiveMessage($event: aplicacion[]){
    this.serv.aplicaciones = this.toArrayId($event)
  }

  receiveIps($event: ipPost[]){
    this.serv.ips = $event
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

  getServidor(){
    return this.serv
  }

  getBase(){
    return this.servFijo
  }

}
