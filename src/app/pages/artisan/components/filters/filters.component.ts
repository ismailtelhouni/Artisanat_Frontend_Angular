import { Component, EventEmitter, Output } from '@angular/core';
import { CategoryDataService } from 'src/app/services/apis/category-data.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent {

  @Output() showCategory  = new EventEmitter<string>();

  constructor(private categoryDataService: CategoryDataService){}

  categories: any[] = [];

  currentCategory:string="";

  ngOnInit(): void {
    this.loadData();
  }


  onShowCategory(category: string): void{
    this.showCategory.emit(category);
    this.currentCategory= category;
  }

  loadData() {
    this.categoryDataService.getAllCategories().subscribe(
      (data) => {
        this.categories = data;
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }

}
