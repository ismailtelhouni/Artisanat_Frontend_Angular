import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductDataService } from 'src/app/services/apis/product-data.service';
import { CartService } from 'src/app/services/utils/cart.service';

@Component({
  selector: 'app-one-product',
  templateUrl: './one-product.component.html',
  styleUrls: ['./one-product.component.css']
})
export class OneProductComponent {
  productId:string='-1';
  productData:Product = {
    id: '2',
    nom: 'product nom',
    prix: 240,
    categories: [
      {
        id:2,
        nom:'test',
        description:"test desc"
      }
    ],
    description: 'descriptiom',
    images: [
      {
        id:2,
        path:'assets/images/61905043-4f36-460b-b203-a0127e6f2654.jpg',
      }
    ],
    store: {
      id:2,
      nom:'storefirst',
      telephone:'sa',
      adress:'ds'
    }
  };

  productQuantity:number=1;
  removeCart=false;
  cartData:Product|undefined;
  constructor(
    private activeRoute:ActivatedRoute, 
    private productDataService:ProductDataService,
    private cartService:CartService,
    private router:Router
    ) { }

    navigateTo( productId: string ): void {
      // console.log("route: ", route);
      this.router.navigate(['/one-product'], { queryParams: { id: productId } });
    }

  ngOnInit(): void {

    this.activeRoute.queryParams.subscribe(params => {
      this.productId = params['id'];
      this.loadProductDetails();
    });

    //   let user = localStorage.getItem('user');
    //   if(user){
    //     let userId= user && JSON.parse(user).id;
    //     this.product.getCartList(userId);

    //     this.product.cartData.subscribe((result)=>{
    //       let item = result.filter((item:product)=>productId?.toString()===item.productId?.toString())
    //    if(item.length){
    //     this.cartData=item[0];
    //     this.removeCart=true;
    //    }
    //     })
    //   }
      
    // })
    
  }

  private loadProductDetails(): void {
    this.productDataService.getProductById(this.productId)
      .subscribe((product) => {
        this.productData = product;
        console.log("product details: ",product);
      });
    console.log("productid: ",this.productId);
  }


  handleQuantity(val:string){
    if(this.productQuantity<20 && val==='plus'){
      this.productQuantity+=1;
    }else if(this.productQuantity>1 && val==='min'){
      this.productQuantity-=1;
    }
  }

  // addToCart(){
  //   if(this.productData){
  //     this.productData.quantity = this.productQuantity;
  //     if(!localStorage.getItem('user')){
  //       this.product.localAddToCart(this.productData);
  //       this.removeCart=true
  //     }else{
  //       let user = localStorage.getItem('user');
  //       let userId= user && JSON.parse(user).id;
  //       let cartData:cart={
  //         ...this.productData,
  //         productId:this.productData.id,
  //         userId
  //       }
  //       delete cartData.id;
  //       this.product.addToCart(cartData).subscribe((result)=>{
  //         if(result){
  //          this.product.getCartList(userId);
  //          this.removeCart=true
  //         }
  //       })        
  //     }
      
  //   } 
  // }
//   removeToCart(productId:number){
//     if(!localStorage.getItem('user')){
// this.product.removeItemFromCart(productId)
//     }else{
//       console.warn("cartData", this.cartData);
      
//       this.cartData && this.product.removeToCart(this.cartData.id)
//       .subscribe((result)=>{
//         let user = localStorage.getItem('user');
//         let userId= user && JSON.parse(user).id;
//         this.product.getCartList(userId)
//       })
//     }
//     this.removeCart=false
//   }


getImageSrc(image: any| { id: number; path: string } | undefined): string {
  // Check if the image is defined before accessing its properties
  return image ? `http://localhost:8080/Pf_Artis/${image.path}` : '';
}

onAddToCart(product: Product){

  let imagePath:any = '';
    if (product && product.images && product.images.length > 0) {
      imagePath = product.images[0].path;
      // Now you can safely use imagePath
    }

  this.cartService.addToCart({
    product:imagePath,
    name:product.nom,
    prix: product.prix,
    quantity: this.productQuantity,
    id: product.id
  });
}

}
