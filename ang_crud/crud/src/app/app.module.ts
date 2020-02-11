import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { DeleteComponent } from './shared/delete/delete.component';
import { AddEditComponent } from './shared/add-edit/add-edit.component';
import { BoxComponent } from './shared/box/box.component';
import { BonusPipe } from './pipes/bonus.pipe';
import { DemoPipe } from './pipes/demo.pipe';
import { FileuploadComponent } from './pages/fileupload/fileupload.component';
import { SliderComponent } from './pages/slider/slider.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { HelloDirective } from './directives/hello.directive';
import { LoaderDirective } from './directives/loader.directive';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmployeeComponent,
    DeleteComponent,
    AddEditComponent,
    BoxComponent,
    BonusPipe,
    DemoPipe,
    FileuploadComponent,
    SliderComponent,
    HelloDirective,
    LoaderDirective

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
