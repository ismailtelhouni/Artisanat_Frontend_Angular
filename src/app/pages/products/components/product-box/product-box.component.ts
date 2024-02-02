import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html',
  styleUrls: ['./product-box.component.css']
})
export class ProductBoxComponent {
  @Input() fullWidthMode = false;
  @Input() id = "";
  @Input() nom = "";
  @Input() description = "";
  @Input() prix = 0;
  @Input() store ={
      id: 1,
      nom: "",
      adress: "",
      telephone: "",
  };
  @Input() categories = [{
    id: 1,
    nom: "",
    description: ""
  }];
  @Input() images = [{
    id: 1,
    path: "",
  }];

  product: Product ={
    id: this.id,
    nom: this.nom,
    prix: this.prix,
    categories:this.categories,
    description:this.description,
    images:this.images,
    store: this.store
  };

  @Output() AddToCart = new EventEmitter();

  

  constructor(
    private router:Router
    ) {}

  navigateTo( productId: string ): void {
    // console.log("route: ", route);
    this.router.navigate(['/one-product'], { queryParams: { id: productId } });
  }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(){
    this.product.id= this.id;
    this.product.nom= this.nom;
    this.product.prix= this.prix;
    this.product.categories=this.categories;
    this.product.description=this.description;
    this.product.store=this.store;
    this.product.images=this.images;
    console.log('images: ',this.images);
  }

  onAddToCart():void{
    this.AddToCart.emit(this.product);
  }

  getImageSrc(image: { id: number; path: string } | undefined): string {
    // Check if the image is defined before accessing its properties
    return image ? `http://localhost:8080/Pf_Artis/${image.path}` : '';
  }
}
