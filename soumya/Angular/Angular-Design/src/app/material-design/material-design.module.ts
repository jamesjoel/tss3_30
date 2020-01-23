import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatSlideToggleModule,
  MatSliderModule
} from '@angular/material';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    // NoopAnimationsModule, // For Disable Animation
    MatCheckboxModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatSliderModule
  ],
  exports: [
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatSliderModule 
  ]
})
export class MaterialDesignModule { }
