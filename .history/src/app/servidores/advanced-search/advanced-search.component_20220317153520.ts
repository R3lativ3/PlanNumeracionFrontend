import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ambiente, rol, ubicacion, empresa, categoria, virtualizador, modeloHW, tipoIp, versionSistemaOperativo, estatusServidor, aplicacion, servidor2, AdvancedSearchServidor } from '../models';
import { ServidoresService } from '../servidores.service';

@Component({
  selector: 'app-advanced-search',
  templateUrl: './advanced-search.component.html',
  styleUrls: ['./advanced-search.component.css']
})
export class AdvancedSearchComponent implements OnInit {

  loading = true
  serv: servidor2 = {}
  
  moe: model[]
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

  @Output() event = new EventEmitter<AdvancedSearchServidor>()

  setModel(lel: any[]): model[]{
    let n : model[] = []
    for(let i = 0; i < lel.length; i++){
      const [id, value ] = Object.values(lel[i])
      n.push({id, value})
    }
    return n
  }

  sendServidorSearch(){
    let response: AdvancedSearchServidor = {
      servidor : this.serv,
      busqueda: "" /*this.textSearch(this.serv)*/
    }
    this.event.emit(response)
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

  
  textSearch(model: servidor2): string{
    let text = ''
    if( model.eos ) text += `EOS: ${model.eos}, ` 
    if( model.eol ) text += `EOL ${model.eol}, `
    if( model. idVersionSistemaOperativo) text += `Version de Sistema Operativo: ${ this.versionesSistemaOperativo.filter(x => model.idVersionSistemaOperativo?.includes(x.id)).map(z => z.version)}, `
    if( model.idAmbiente ) text += `Ambientes: { ${this.ambientes.filter(x => model.idAmbiente?.includes(x.id)).map(z => z.tipoAmbiente)}, }`
    if( model.idModeloHW ) text += `Modelo de Hardware: ${this.modelosHW.filter(x => model.idModeloHW?.includes(x.id)).map(z => z.modelo)}, `
    if( model.idUbicacion ) text += `Ubicacion: ${this.ubicaciones.filter(x => model.idUbicacion?.includes(x.id)).map(z => z.ubicacionServidor)}, `
    if( model.idEmpresa ) text += `Empresa: ${this.empresas.filter(x => model.idEmpresa?.includes(x.id)).map(z => z.nombreEmpresa)}, `
    if( model.idVirtualizador ) text += `Virtualizador: ${this.virtualizadores.filter(x => model.idVirtualizador?.includes(x.id)).map(z => z.virtualizador)}, `
    if( model.idEstatusServidor ) text += `Estatus de Servidor: ${this.estatusServidores.filter(x => model.idEstatusServidor?.includes(x.id)).map(z => z.estatus)}, `
    if( model.idCategoria ) text += `Categoria: ${this.categorias.filter(x => model.idCategoria?.includes(x.id)).map(z => z.categoriaServidor)}`

    return text
  }

  receiveSelectBox(selectList: number[], property: string){
    console.log(selectList, property)
    if(property === "idAmbiente") this.serv.idAmbiente = selectList
    if(property === "idVersionSistemaOperativo") this.serv.idVersionSistemaOperativo = selectList
    if(property === "idModeloHW") this.serv.idModeloHW = selectList 
    if(property === "idUbicacionFisica") this.serv.idUbicacion = selectList 
    if(property === "idEmpresa") this.serv.idEmpresa = selectList 
    if(property === "idVirtualizador") this.serv.idVirtualizador = selectList 
    if(property === "idCategoria") this.serv.idCategoria = selectList  
  }
  
  getAmbiente(){
    this.backend.getAmbientes().subscribe(
      (response) => {
      this.loading = false;
      this.ambientes = response;
      this.moe = this.setModel(this.ambientes)
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

interface model{
  id: number
  value: string
}