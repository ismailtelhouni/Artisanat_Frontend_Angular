import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ProductData, Qte } from 'src/app/models/product.model';
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

  qteProduit!:number;

  pageSize:number=8;

  page:number=1;

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

    this.productsService.getProductsByArtisan( this.pageSize , this.page ).subscribe(
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

    this.productsService.getQteProducts().subscribe(
      (data:any) => {
        console.log("daaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",data)
        const qte = data as Qte
        this.qteProduit = qte.qte;
      },(error:any) => {
        console.error('Error fetching data:', error)
      }
    )

  }

  handlePageEvent(e: PageEvent) {
    this.page = e.pageIndex+1;

    this.productsService.getProductsByArtisan( this.pageSize , this.page ).subscribe(
      (data : any[]) => {
        this.products = [];
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
