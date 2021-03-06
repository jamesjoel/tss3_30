import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from "./guards/auth.guard";
import { ProfileComponent } from './pages/profile/profile.component';
import { SliderComponent } from './pages/slider/slider.component';
import { FileuploadComponent } from './pages/fileupload/fileupload.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "profile",
    component: ProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "slider",
    component: SliderComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "fileupload",
    component: FileuploadComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "employee",
    component: EmployeeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "signup",
    component: SignupComponent
  },
  {
    path: "login",
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
