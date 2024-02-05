import { Component, Input, OnInit } from '@angular/core';
import { ProductData } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html',
  styleUrls: ['./product-box.component.css']
})
export class ProductBoxComponent implements OnInit {

  @Input() produit :ProductData|undefined;

  ngOnInit(): void {
      console.log("produit .......... : ",this.produit)
  }

}
