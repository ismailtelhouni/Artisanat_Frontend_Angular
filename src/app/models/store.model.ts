import { User } from "./auth.model";

export interface StoreData {

  storeId:number ,
  avatar:string,
  nom:string,
  adress:string,
  qteProduit:number,
  artisant:User

}
