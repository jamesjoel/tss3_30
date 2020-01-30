import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {AboutComponent} from './pages/about/about.component';
import {ContactComponent} from './pages/contact/contact.component';
import {LoginComponent} from './pages/login/login.component';
import {SignupComponent} from './pages/signup/signup.component';
import {StudentComponent} from './pages/student/student.component';
import { TeacherComponent} from './pages/teacher/teacher.component';
import { DashComponent} from './pages/dash/dash.component';
import { LoginAuthGuard} from './guards/login-auth.guard';
const routes: Routes = [
  {
    path : "",
    component : HomeComponent
  },
  
  {
    path: "about",
    component : AboutComponent
  },
  {
    path: "contact",
    component : ContactComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "signup",
    component: SignupComponent
  },
  
  {
    path: "student",
    component: StudentComponent,
    canActivate: [LoginAuthGuard]
  },
  {
    path: "teacher",
    component: TeacherComponent,
    canActivate: [LoginAuthGuard]
  },
  {
    path : "dash",
    component : DashComponent,
    canActivate: [LoginAuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
