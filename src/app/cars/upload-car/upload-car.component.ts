import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/Services/main.service';
import { UploadCar } from 'src/app/types/UploadCar.model';

@Component({
  selector: 'app-upload-car',
  templateUrl: './upload-car.component.html',
  styleUrls: ['./upload-car.component.css']
})
export class UploadCarComponent implements OnInit {
  car: UploadCar = {} as UploadCar;

  // Create a variable to hold the selected image file
  selectedImage: File | null = null;
  error: string | null = null;

  constructor(private mainService: MainService) { }

  ngOnInit(): void {
  }

  uploadCar(): void {
    if (this.selectedImage) {
      const formData = new FormData();
      formData.append('carImage', this.selectedImage);
      formData.append('carName', this.car.carName);
      formData.append('carModel', this.car.carModel);
      formData.append('carType', this.car.carType);
      formData.append('yearName', this.car.yearName);
      formData.append('carYearMake', String(this.car.carYearMake));
      formData.append('carTransmission', this.car.carTransmission);
      formData.append('carEngineType', this.car.carEngineType);
      formData.append('carNoOfGears', String(this.car.carNoOfGears));
      formData.append('carHorsePower', String(this.car.carHorsePower));
      formData.append('carTorque', String(this.car.carTorque));
      formData.append('carKilowatts', String(this.car.carKilowatts));
      formData.append('carEngineSize', String(this.car.carEngineSize));
      formData.append('carNoOfSeats', String(this.car.carNoOfSeats));
      formData.append('carFuelConsuption', String(this.car.carFuelConsuption));
      formData.append('carFuelTankSize', String(this.car.carFuelTankSize));
      formData.append('carAcceleration', String(this.car.carAcceleration));
      formData.append('carPrice', String(this.car.carPrice));
      formData.append('carFeaturedImageUrl', this.car.carFeaturedImageUrl);
      formData.append('urlHandle', this.car.urlHandle);
      formData.append('author', this.car.author);
  
      // Call the service method to upload the car
      this.mainService.addCar(formData).subscribe(
        response => {
          console.log(response);
          alert(`Your ${this.car.carName} ${this.car.carModel} successfully uploaded!`);
          this.resetForm();
          
        },
        error => {
          console.log(error);
          if (error.status === 400 && error.error && error.error.errors) {
            // Display validation errors
            console.log('Validation errors:', error.error.errors);
          }
          this.error = error.error.message || 'An error occurred while uploading the car.';
          // Handle the error response
        }
      );
    } else {
      this.error = 'Please select an image.';
    }
  }
  
  
  onImageSelected(event: any): void {
    this.selectedImage = event.target.files[0] as File;
    this.error = null;
  }

  resetForm(): void {
    this.car = {
      carName: '',
      carModel: '',
      carType: '',
      yearName: '',
      carYearMake: 0,
      carTransmission: '',
      carEngineType: '',
      carNoOfGears: 0,
      carHorsePower: 0,
      carTorque: 0,
      carKilowatts: 0,
      carEngineSize: 0,
      carNoOfSeats: 0,
      carFuelConsuption: 0,
      carFuelTankSize: 0,
      carAcceleration: 0,
      carPrice: 0,
      carFeaturedImageUrl: '',
      urlHandle: '',
      author: ''
    };
    this.selectedImage = null;
    this.error = null;
  }
}
