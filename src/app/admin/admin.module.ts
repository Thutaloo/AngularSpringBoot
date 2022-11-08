import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AddUsersComponent } from './add-users/add-users.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AddUsersComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
