import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './pages/about/about.component';
import { Box1Component } from './shared/box1/box1.component';
import { ContactComponent } from './pages/contact/contact.component';
import { Box2Component } from './shared/box2/box2.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    Box1Component,
    ContactComponent,
    Box2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
