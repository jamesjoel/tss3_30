import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AddEditModalComponent } from './shared/add-edit-modal/add-edit-modal.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { NavigationBarComponent } from './shared/navigation-bar/navigation-bar.component';
import { DelModalComponent } from './shared/del-modal/del-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddEditModalComponent,
    EmployeeComponent,
    NavigationBarComponent,
    DelModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
