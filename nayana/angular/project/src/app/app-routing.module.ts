import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';



const routes: Routes = [
  {
    path : "about", // localhost:4200/about
    component : AboutComponent
  },
  
  {
    path : "", // localhost:4200
    component : HomeComponent
  },
  {
    path : "contact",
    component : ContactComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
