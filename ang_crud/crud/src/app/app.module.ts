import { BrowserModule, Title } from '@angular/platform-browser';
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

import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { AdminModule } from './admin/admin.module';
import { EditempComponent } from './pages/editemp/editemp.component';
import { ChomeComponent } from './shared/chome/chome.component';


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
    LoaderDirective,
    EditempComponent,
    ChomeComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgImageSliderModule,
    AdminModule,
    Ng2SearchPipeModule
  ],
  providers: [ Title ],
  bootstrap: [AppComponent]
})
export class AppModule { }
