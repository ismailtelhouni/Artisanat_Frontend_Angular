import { StoreData } from "./store.model";

export interface Product {
    id: number;
    title: string;
    price: number;
    category:string;
    description:string;
    image:string;
}

export interface ProductData {

  produitId: number;
  nom: string;
  prix: number;
  description:string;
  images:ImageData[];
  stock:number;
  store:StoreData;
}

export interface ImageData {
  path:string
}
