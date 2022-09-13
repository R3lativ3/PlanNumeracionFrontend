
export interface Servidor{
    id : number
    hostname : string
    ip : string
    eos : string
    eol : string
    tipoHypervisor : string    
    tipoHW : string
    ambiente : string
    ubicacionServidor : string 
    versionSistemaOperativo : string
    sistemaOperativo : string
    nombreEmpresa : string
    fabricante : string
}

export interface PaginatedServidor{
    pages: number
    currentPage: number
    totalRows: number
    result: Servidor[]
}

export interface ServidorWindows{
    ipFisica : string  
    Puerto : string
    GlobalName : string  
    SID : string
    IdVersionSistemaOperativo : number
    IdFuncionServidor : number
    IdArquitecturaRolServidor : number
    IdVersionGestorBD : number
    servidor: Servidor
}

export interface received{
    Errors: string[]
    InsertedLines: number
    InvalidLines: number
    TotalLines: number
    ValidLines: number
}

export interface ambiente{
    id: number
    tipoAmbiente: string
    status: number
}

export interface rol{
    id: number
    rol: string
    status: number
}

export interface ubicacion{
    id: number
    ubicacionServidor: string
    status: number
}

export interface empresa{
    id: number
    nombreEmpresa: string
    status: number
}

export interface categoria{
    id: number
    categoriaServidor: string
    status: number
}

export interface virtualizador{
    id: number
    virtualizador: string
    status: number
}

export interface modeloHW{
    id: number
    modelo: string
    status: number
}

export interface tipoIp{
    id: number
    tipo: string
    status: number
}

export interface estatusServidor{
    id: number
    estatus: string
    status: number
}

export interface aplicacion{
    id: number
    aplicacion: string
    status: number
    idRolServidor: number
}

export interface versionSistemaOperativo{
    id: number
    version: string
    sistemaOperativo: string
    status: number
}

export interface ipDisplay{
    numeroIp: string
    tipoIp: number
    tipo: string
}

export interface ipPost{
    ip: string
    tipoIp: number
}

export class servidor{
    hostname?: string
    idVersionSistemaOperativo?: number
    idModeloHW?: number
    idUbicacion?: number
    idEmpresa?: number
    idAmbiente?: number
    idVirtualizador?: number
    eos: string
    eol: string
    idEstatusServidor?: number
    idCategoria?: number
    rma?: boolean
    notas?: string
    roles?: number[]
    ips?: ipPost[]
    aplicaciones?: number[]
}

export class servidor2{
    hostname?: string
    idVersionSistemaOperativo?: number
    idModeloHW?: number
    idUbicacion?: number
    idEmpresa?: number
    idAmbiente?: number
    idVirtualizador?: number
    eos?: string
    eol?: string
    idEstatusServidor?: number
    idCategoria?: number
    rma?: boolean
    notas?: string
    roles?: number[]
    ips?: ipPost[]
    aplicaciones?: number[]
}

export interface Response{
    status: number
    message: string
}

export interface IpAsignadaServidor{
    IdServidor : number
    Ip : string
    Hostname : string
    FechaAsignacion : Date
    FechaConsignacion : Date
    Tipo : string
    Status : number
}

export interface AplicacionAsignadaServidor{
    IdAplicacion: number
    Aplicacion: string
    FechaAsignacion : Date
    FechaFinalizacion : Date
    Status: number
}

export interface RolAsignadoServidor{
    IdRol : number
    Rol : string
    FechaAsignacion : Date 
    FechaFinalizacion : Date
    Status : number
}

export interface DetalleServidor{
    id: number
    hostname: string
    eos: Date
    eol: Date
    ambiente : string
    ubicacionServidor : string
    versionSistemaOperativo : string
    sistemaOperativo : string
    nombreEmpresa : string
    modeloHW : string
    virtualizador : string
    estatus : string
    categoria : string
    rma : number
    observaciones : string 

    ipsAsignadas : IpAsignadaServidor[] 
    aplicacionesAsignadas : AplicacionAsignadaServidor[]
    rolesAsignados : RolAsignadoServidor[]
}