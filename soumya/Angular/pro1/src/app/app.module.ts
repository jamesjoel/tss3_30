import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HeaderComponent } from './shared/header/header.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { StudentComponent } from './pages/student/student.component';
import { DeleteComponent } from './shared/delete/delete.component';
import { ModalComponent } from './shared/modal/modal.component';
import { TeacherComponent } from './pages/teacher/teacher.component';
import { AddComponent } from './shared/add/add.component';

@NgModule({
  declarations: [
    AppComponent,
  
    HomeComponent, 
    AboutComponent,
    ContactComponent,
    HeaderComponent,
    LoginComponent,
    SignupComponent,
    StudentComponent,
    DeleteComponent,
    ModalComponent,
    TeacherComponent,
    AddComponent,
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
