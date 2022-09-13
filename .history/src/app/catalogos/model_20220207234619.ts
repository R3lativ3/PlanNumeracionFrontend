export interface aplicacion {
    id?: number
    aplicacion: string  
    status: number  
    idRolServidor: number
}

export interface postAplicacion {
    aplicacion: string  
    status: number  
    idRolServidor: number
}

export interface empresa {
    id?: number
    nombreEmpresa: string
    status: number
}

export interface ambiente {
    id: number
    tipoAmbiente: string
    status: number
}

export interface rol {
    id: number
    rol: string
    status: number
}

export interface ubicacionFisica {
    id: number
    ubicacionServidor: string
    status: number
}

export interface virtualizador {
    id: number
    virtualizador: string
    _virtual: number
    status: number
}

export interface modeloHW{
    id?: number
    modelo: string
    status: number
}

export interface estatusEjecucion{
    id?: number
    estatus: string
    status: number
}

export interface periodicidad {
    id?: number
    periodo: string
    status: number
}

export interface tipoIp{
    id: number
    tipo: string
    status: number
}

export interface sistemaOperativo{
    id: number
    sistemaOperativo: string
    status: number
}

export interface postSistemaOperativo{
    sistemaOperativo: string
    status: number
}

export interface versionSistemaOperativo{
    id: number
    version: string
    sistemaOperativo: string
    status: number
}

export interface postVersionSistemaOperativo{
    version: string
    idSistemaOperativo: string
    status: number
}

export interface estatusServidor{
    id?: number
    estatus: string
    status: number
}