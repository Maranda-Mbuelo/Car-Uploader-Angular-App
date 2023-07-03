import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MainService } from '../../Services/main.service';
import { Car } from '../../types/car.model';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  car: Car | undefined;
  carImageUrl: string | undefined;

  constructor(private route: ActivatedRoute, private mainService: MainService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const carId = params.get('id');
      if (carId) {
        this.mainService.getCarById(carId).subscribe((response: Car) => {
          this.car = response;
          this.convertByteArrayToImageUrl(this.car.carFeaturedImage);
          console.log(response);
        });
      }
    });
  }

  convertByteArrayToImageUrl(byteArray: number[]): void {
    const base64String = btoa(
      new Uint8Array(byteArray).reduce(
        (data, byte) => data + String.fromCharCode(byte),
        ''
      )
    );
    this.carImageUrl = `data:image/jpeg;base64,${base64String}`;
  }
}
