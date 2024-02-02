import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CategoryData } from 'src/app/models/category.model';
import { StoreData } from 'src/app/models/store.model';
import { CategoryDataService } from 'src/app/services/apis/category-data.service';
import { ProductsService } from 'src/app/services/apis/products.service';
import { StoresService } from 'src/app/services/apis/stores.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { UserDataService } from 'src/app/services/auth/user-data.service';
import { NavigationService } from 'src/app/services/utils/navigation';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

  registerForm!:FormGroup;

  validation_messages = {
    'nom': [
      { type: 'required', message: 'le nom du produit est obligatoire.' }
    ],
    'description': [
      { type: 'required', message: 'la description du produit est obligatoire.' }
    ],
    'stock': [
      { type: 'required', message: 'la quantité du produit est obligatoire.' }
    ],
    'prix': [
      { type: 'required', message: 'le prix du produit est obligatoire.' }
    ],
    'poids': [
      { type: 'required', message: 'le poids du produit est obligatoire.' }
    ],
    'image': [
      { type: 'required', message: 'les image du produit sont obligatoires.' }
    ],
    'category': [
      { type: 'required', message: 'profile is required.' }
    ],
    'store': [
      { type: 'required', message: 'profile is required.' }
    ],
    'dateFabrication': [
      { type: 'required', message: 'La date de fabrication de produit est obligatoire.' }
    ],
    'datePeremption': [
      { type: 'required', message: 'La date de peremption de produit est obligatoire.' }
    ]

  };

  selectedFile: File[] = [];

  categories : CategoryData[]=[];

  stores :StoreData[] = [];

  toppings = new FormControl('');
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

  constructor(
    private fb : FormBuilder ,
    private service : AuthService ,
    private userData : UserDataService,
    private toaster:ToastrService,
    private navigation:NavigationService,
    private categoryDataService: CategoryDataService,
    private storeService:StoresService,
    private produitService:ProductsService,
  ){}

  ngOnInit(): void {
    this.createForm()
    if( !this.userData.authCheck() || this.userData.getUserData() == null ){
      console.log("teeeeeeeeeeeeeeeeeeeeeeest")
      this.navigation.navigateTo('/home');
    }else{
      if(this.userData.getUserData()?.role == "ROLE_CLIENT"){
        console.log("teeeeeeeeeeeeeeeeeeeeeeest")
        this.navigation.navigateTo('/home');
      }else{
        this.loadData();
      }
    }
    console.log("rooooooooole : ",this.userData.getUserData()?.role == "ROLE_CLIENT")
  }

  loadData(){

    this.categoryDataService.getAllCategories().subscribe(
      (data) => {
        this.categories = data;
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );

    this.storeService.getStoreByArtisan().subscribe(
      (data : any[]) => {
        for (const item of data) {
          // Accéder à la propriété 'name' de chaque objet
          const storeData = item as StoreData
          storeData.avatar = "assets/img/"+storeData.avatar
          this.stores.push(storeData)
        }
      },
      (error:any) => {
        console.error('Error fetching data:', error);
      }
    )
  }

  createForm(){
    this.registerForm = this.fb.group({
      nom       : [ '' , [ Validators.required ] ],
      description    : [ '' , [ Validators.required ] ],
      stock     : [ '' , [ Validators.required ] ],
      prix       : [ '' , [ Validators.required ] ],
      poids    : [ '' , [ Validators.required ] ],
      image      : [ '' , [ Validators.required ] ],
      category      : [ [] , [ Validators.required ] ],
      store      : [ '' , [ Validators.required ] ],
      datePeremption      : [ '' , [ Validators.required ] ],
      dateFabrication      : [ '' , [ Validators.required ] ],
    })
  }

  onFileSelected(event: any) {

    this.selectedFile = event.target.files as File[];

    console.log(this.selectedFile)
  }

  addNewProduct(){
    console.log(this.registerForm.value)
    console.log(this.registerForm.get('datePeremption')?.value)

    if(
        this.registerForm.get('nom')?.valid &&
        this.registerForm.get('description')?.valid &&
        this.registerForm.get('stock')?.valid &&
        this.registerForm.get('prix')?.valid &&
        this.registerForm.get('poids')?.valid &&
        this.registerForm.get('store')?.valid &&
        this.registerForm.get('datePeremption')?.valid &&
        this.registerForm.get('dateFabrication')?.valid
      ){
        console.log(this.registerForm.value)
        const formData = new FormData();

        if ( Array.isArray(this.selectedFile) ) {
          console.log(this.selectedFile )
          this.selectedFile.map((file)=>{
            formData.append('profile', file, file.name);
          })
          formData.append('nom', this.registerForm.value.nom );
          formData.append('description', this.registerForm.value.description );
          formData.append('stock', this.registerForm.value.stock );
          formData.append('prix', this.registerForm.value.prix );
          formData.append('poids', this.registerForm.value.poids );
          formData.append('category', this.registerForm.value.category );
          formData.append('store', this.registerForm.value.store );
          formData.append('datePeremption', this.registerForm.value.datePeremption );
          formData.append('dateFabrication', this.registerForm.value.dateFabrication );



        }else{

        }

      }else{
        this.registerForm.invalid
      }
  }
}
