import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { AboutComponent } from './pages/about/about.component';
import { BoxComponent } from './shared/box/box.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    BoxComponent
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
