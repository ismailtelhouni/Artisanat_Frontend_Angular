export interface CommandeDTO {
    dateCommande: string; // Use string or Date as per your requirement
    ligneCommandes: Array<LigneCommandeDTO>;
    clientId: number; // Assuming client ID is a number
  }
  
  export interface LigneCommandeDTO {
    product: number;
    name: string;
    prix: number;
    quantity: number;
  }