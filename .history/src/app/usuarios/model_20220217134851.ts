export interface users {
    id: number 
    nombres: string 
    apellidoPaterno: string 
    apellidoMaterno: string 
    attuid: string 
    password :string 
    fechaUltimoLogin: string 
    rol: string    
}

export interface userLogin {
    id: number 
    nombres: string 
    attuid: string 
    password :string 
    fechaUltimoLogin: string 
    rol: string 
}

export interface postUser  
{
    nombres: string 
    apellidoPaterno: string
    apellidoMaterno: string
    attuid: string 
    password?: string 
    status: number
    idRol: number
}

export interface rolUsuario
{
    id: number
    rol: string
}