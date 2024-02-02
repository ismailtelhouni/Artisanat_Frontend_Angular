import { Component, OnInit } from '@angular/core';
import { ProductData } from 'src/app/models/product.model';
import { StoreData } from 'src/app/models/store.model';
import { ProductsService } from 'src/app/services/apis/products.service';

@Component({
  selector: 'app-products-filter',
  templateUrl: './products-filter.component.html',
  styleUrls: ['./products-filter.component.css']
})
export class ProductsFilterComponent implements OnInit {

  category:string|undefined;
  products:ProductData[]=[];

  onShowCategory(category: string):void{
    this.category = category;
  }

  constructor(
    private productsService : ProductsService
  ){}

  ngOnInit(): void {
    this.loadData();
  }

  loadData(){

    this.productsService.getProductsByArtisan().subscribe(
      (data : any[]) => {
        for (const item of data) {
          // Accéder à la propriété 'name' de chaque objet
          const product = item as ProductData
          product.store.avatar = "assets/img/"+product.store.avatar
          this.products.push(product)
        }
        console.log(this.products)
      },
      (error:any) => {
        console.error('Error fetching data:', error);
      }
    )

  }

}
