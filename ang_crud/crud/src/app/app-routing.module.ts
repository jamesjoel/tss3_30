import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { FileuploadComponent } from './pages/fileupload/fileupload.component';
import { SliderComponent } from './pages/slider/slider.component';


const routes: Routes = [
  {
    path : "fileupload",
    component : FileuploadComponent
  },
  {
    path : "slider",
    component : SliderComponent
  },
  {
    path : "",
    component : HomeComponent
  },
  {
    path : "employee",
    component : EmployeeComponent
  },
  {
    path : "admin",
    loadChildren: './admin/admin.module#AdminModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
