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
import { BonusPipe } from './pipes/bonus.pipe';
import { TotalSalaryPipe } from './pipes/total-salary.pipe';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { SliderComponent } from './pages/slider/slider.component';
import { FileuploadComponent } from './pages/fileupload/fileupload.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddEditModalComponent,
    EmployeeComponent,
    NavigationBarComponent,
    DelModalComponent,
    BonusPipe,
    TotalSalaryPipe,
    SignupComponent,
    LoginComponent,
    ProfileComponent,
    SliderComponent,
    FileuploadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgImageSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
