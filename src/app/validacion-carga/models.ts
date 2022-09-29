export interface validacionCarga{
    id:number,
    fechaValidacion: Date,
    estatus: string,
    comentario: string,
    idPNNCredencialesValidacionCarga: number,
    idPNNDestino: number
}

export interface validacionCargaPost{
    fechaValidacion: Date,
    estatus: string,
    comentario: string,
    idPNNCredencialesValidacionCarga: number,
    idPNNDestino: number
}