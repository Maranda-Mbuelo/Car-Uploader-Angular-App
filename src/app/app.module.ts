import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarsComponent } from './cars/cars.component';
import { CarComponent } from './cars/car/car.component';
import { UploadCarComponent } from './cars/upload-car/upload-car.component';
import { HeaderComponent } from './header/header.component';
import { CreateCarComponent } from './cars/create-car/create-car.component';

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    CarComponent,
    UploadCarComponent,
    HeaderComponent,
    CreateCarComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
