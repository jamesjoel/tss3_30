import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path : "employee",
    component : EmployeeComponent
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
