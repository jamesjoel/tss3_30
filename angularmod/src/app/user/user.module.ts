import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { FileuploadComponent } from './pages/fileupload/fileupload.component';


@NgModule({
  declarations: [UserComponent, HomeComponent, AboutComponent, FileuploadComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
