import { Product } from "./product.model";

export interface Client {
    id: number | undefined;
    nom: string;
    prenom: string;
    profile: string;
    commandes: Array<{
        commandeId: number;
        date_commande?: string;
        ligneCommandes: Array<{
            id:number,
            produit:Product,
            quantite:number
        }>
    }>;
}