import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
 
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { BrowserAnimationsModule }  
    from "@angular/platform-browser/animations";  
import { DropdownModule } from "primeng/dropdown"; 
import { RouterOutlet } from '@angular/router';

import { AppComponent } from './app.component';
import { MyFormComponent } from './components/my-form/my-form.component';
import { AppRoutingModule } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    MyFormComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    CardModule, 
    InputTextModule, 
    FormsModule, 
    ReactiveFormsModule, 
    ButtonModule,
    BrowserAnimationsModule, 
    DropdownModule,
    RouterOutlet,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }