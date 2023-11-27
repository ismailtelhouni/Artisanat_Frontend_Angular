import { Component, OnInit } from '@angular/core';
const ROWS_HEIGHT: {[id:number]:number} = { 1: 400, 3: 335, 4:350 };

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  category:string|undefined;

  cols=3;

  rowHeight=ROWS_HEIGHT[this.cols];

  constructor() {}


  onColumnsCountChange(colsNum: number):void{
    this.cols = colsNum;
  }

  onShowCategory(category: string):void{
    this.category = category;
  }
}
