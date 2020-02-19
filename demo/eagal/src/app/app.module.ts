import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { FeaturesComponent } from './pages/features/features.component';
import { PackagesComponent } from './pages/packages/packages.component';
import { SolutionComponent } from './pages/solution/solution.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { BlogComponent } from './pages/blog/blog.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    AboutusComponent,
    FeaturesComponent,
    PackagesComponent,
    SolutionComponent,
    ContactusComponent,
    BlogComponent,
    HomeComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
