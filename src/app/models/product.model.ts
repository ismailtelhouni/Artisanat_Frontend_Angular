import { StoreData } from "./store.model";

export interface Product {
    id: string;
    nom: string;
    store?: {
        id: number;
        nom: string;
        adress: string|"";
        telephone: string|"";
    };
    prix: number;
    categories: Array<{
        id: number;
        nom: string;
        description:string|"";
    }>;
    description:string;
    images: Array<{
        id: number;
        path: string;
    }>;
    quantity?: number|0;
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

export interface Qte {
  qte:number
}

export interface Commande {
  commandeId:number,
  date_commande:string,
  nomProduit:string
}
