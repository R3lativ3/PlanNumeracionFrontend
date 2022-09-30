export interface uploadFile{
    archivo?: File
    destinos: number[]
}

export interface cargaDestino{
    id: number
    fechaCarga: Date
    nombreArchivo: string
    nombreDestino: string
    pathDestino: string
    ipDestino: string
    nombreUsuario: string
    apellidoUsuario: string
    attuid: string
}
