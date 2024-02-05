import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClientRoutingModule } from './client-routing.module';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    MatCardModule
  ],
  exports:[
    DashboardComponent
  ]
})
export class ClientModule { }
