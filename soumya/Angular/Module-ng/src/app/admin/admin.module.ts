import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { LoginComponent } from './pages/login/login.component';
import { DashComponent } from './pages/dash/dash.component';


@NgModule({
  declarations: [AdminComponent, LoginComponent, DashComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    // BrowserModule
    HttpClientModule
  ]
})
export class AdminModule { }
