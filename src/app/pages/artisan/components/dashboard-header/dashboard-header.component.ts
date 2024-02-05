import { Component, OnInit } from '@angular/core';
import { User, UserData } from 'src/app/models/auth.model';
import { Qte } from 'src/app/models/product.model';
import { BackendConfigService } from 'src/app/services/apis/backend-config.service';
import { ProductsService } from 'src/app/services/apis/products.service';
import { UserDataService } from 'src/app/services/auth/user-data.service';
import { NavigationService } from 'src/app/services/utils/navigation';

@Component({
  selector: 'app-dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.css']
})
export class DashboardHeaderComponent implements OnInit {

  user! : User;

  qteProduit!:number;

  nbreStore!:number;

  backendHost = this.backendConfigService.getBackendHost();

  profile!:string;

  constructor(
    private navigation:NavigationService,
    private userData : UserDataService,
    private product:ProductsService,
    private backendConfigService: BackendConfigService,
  ){}

  ngOnInit(): void {
      this.loadData()
  }

  loadData(){

    this.product.getQteProducts().subscribe(
      (data:any) => {
        console.log("daaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",data)
        const qte = data as Qte
        this.qteProduit = qte.qte;
      },(error:any) => {
        console.error('Error fetching data:', error)
      }
    )

    this.product.getNombreStores().subscribe(
      (data:any) => {
        console.log("daaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",data)
        const qte = data as Qte
        this.nbreStore = qte.qte;
      },(error:any) => {
        console.error('Error fetching data:', error)
      }
    )

    this.userData.getUserCurrent().subscribe(
      (data:any) => {
        console.log("daaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa-user-aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",data)
        const user = data as User;

        this.profile = this.backendHost+'/'+user.profile;


        this.user = user;
      },(error:any) => {
        console.error('Error fetching data:', error)
      }
    )

  }

  toAddProduct(){
    this.navigation.navigateTo("artisan/addProduct")
  }

}
