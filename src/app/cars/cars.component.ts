import { Component, OnInit } from '@angular/core';
import { MainService } from '../Services/main.service';
import { Router } from '@angular/router';
import { Car } from '../types/car.model';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  carsArray: Car[] = [];

  constructor(private mainService: MainService, private router: Router) {
    
  }

  ngOnInit(): void {
    this.mainService.getAllCars().subscribe(
      response => {
        this.carsArray = response;
        console.log(this.carsArray);
      }
    );
  }

  viewCar(carId: string): void {
    this.router.navigate(['car', carId]);
  }
}
