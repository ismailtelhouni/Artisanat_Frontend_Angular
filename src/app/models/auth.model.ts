export interface Login {
    email:String,
    password:String
}

export interface UserData {
  userId:number ,
  token:string,
  role:string,
  message:string
}

export interface User {
  userId: number,
  nom: string,
  prenom: string,
  ville:string,
  numero:string,
  rue:string,
  telephone: string,
  email:string,
  token:string,
  profile:string
}

export interface Register {

  nom: string,
  prenom: string,
  ville:String,
  numero:String,
  rue:String,
  telephone: string,
  email:String,
  role:String,
  token:String,

}
