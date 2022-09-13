export interface actividad
{
    id: number
    nombreActividad: string 
    descripcion: string 
    estatus: number 
    rma: number 
    al?: string 
    fechaInicio: Date 
    fechaFin: Date 
    periodo: string 
    responsable: string
    tipoActividad: string
}

export interface actividadPost
{
    nombreActividad: string 
    descripcion: string 
    estatus: number 
    rma: number 
    al?: string 
    fechaInicio?: Date 
    fechaFin?: Date 
    idPeriodicidad: number 
    idResponsableActividad: number 
    idTipoActividad: number 
}


export interface ejecucionActividad
{
    id: number 
    fechaEjecucion: Date 
    fechaCarga: Date
    rfc: string 
    observaciones: string 
    evidencia: string
    actividad: string
    servidor: string
    estatus: string
}

export interface ejecucionActividadPost
{
    fechaEjecucion: Date 
    fechaCarga?: Date
    rfc: string 
    observaciones: string 
    archivoEvidencia?: File
    idActividadServidor: number 
    idServidor: number
    idEstatusEjecucion: number 
}

export interface tiposActividad{
    id: number
    nombreActividad: string
}

export interface responsablesActividad{
    id: number
    responsable: string
}