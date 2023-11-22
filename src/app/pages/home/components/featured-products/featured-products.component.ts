import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-featured-products',
  templateUrl: './featured-products.component.html',
  styleUrls: ['./featured-products.component.css']
})
export class FeaturedProductsComponent implements OnInit{

  products : any
  limit: number = 10;
  showAllProducts: boolean = false;

  constructor(private apiService : ApiService){
    console.log(this.products)
  }

  ngOnInit(): void {
      this.apiService.getProducts().subscribe((data)=>{
        this.products = data
      })
  }

  toggleShowAllProducts() {
    this.showAllProducts = !this.showAllProducts;
  }

}
