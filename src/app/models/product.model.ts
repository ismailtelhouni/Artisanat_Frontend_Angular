export interface Product {
    id: string;
    nom: string;
    store: {
        id: number;
        nom: string;
        adress: string|"";
        telephone: string|"";
    };
    prix: number;
    categories: Array<{
        id: number;
        nom: string;
        description:string;
    }>;
    description:string;
    images: Array<{
        id: number;
        path: string;
    }>;
    quantity?: number|0;
}