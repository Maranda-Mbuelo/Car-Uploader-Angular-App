import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarsComponent } from './cars/cars.component';
import { CarComponent } from './cars/car/car.component';
import { UploadCarComponent } from './cars/upload-car/upload-car.component';
import { CreateCarComponent } from './cars/create-car/create-car.component';

const routes: Routes = [
  { path: '', redirectTo: '/cars', pathMatch: 'full' },
  { path: 'cars', component: CarsComponent },
  { path: 'car/:id', component: CarComponent },
  { path: 'upload', component: UploadCarComponent },
  { path: 'Upload-new-car', component: CreateCarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
