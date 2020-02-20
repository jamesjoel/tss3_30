import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SignupComponent} from '../app/pages/signup/signup.component';
import {AboutusComponent} from '../app/pages/aboutus/aboutus.component';
import {FeaturesComponent} from "./pages/features/features.component";
import {PackagesComponent} from "./pages/packages/packages.component";
import { SolutionComponent } from "./pages/solution/solution.component";
import {BlogComponent} from "./pages/blog/blog.component";
import {ContactusComponent} from "./pages/contactus/contactus.component";
import {HomeComponent} from "./pages/home/home.component";
import {LoginComponent} from "./pages/login/login.component";

const routes: Routes = 
[
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"aboutus",
    component: AboutusComponent
  },
  {
    path:"features",
    component: FeaturesComponent
  },
  {
    path:"packages",
    component: PackagesComponent
  },
  {
    path:"solution",
    component: SolutionComponent
  },
  {
    path:"Blog",
    component: BlogComponent
  },
  {
    path:"contactus",
    component: ContactusComponent
  },
  {
    path:"signup",
    component: SignupComponent
  },
  {
    path:"login",
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
