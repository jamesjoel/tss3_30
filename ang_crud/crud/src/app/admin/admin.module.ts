import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { AdminComponent } from './admin.component';
import { DashComponent } from './dash/dash.component';


@NgModule({
  declarations: [LoginComponent, AdminComponent, DashComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  bootstrap: [AdminComponent]
})
export class AdminModule { }
