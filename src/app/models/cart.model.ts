export interface Cart {
    items: Array<CartItem>;
}

export interface CartItem {
    product?: string;
    name: string;
    prix: number;
    quantity: number;
    id: string;
}