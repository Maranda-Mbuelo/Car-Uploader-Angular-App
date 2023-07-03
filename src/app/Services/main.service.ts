import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/Environment/Environment';
import { Observable } from 'rxjs';
import { Car } from '../types/car.model';
import { UploadCar } from '../types/UploadCar.model';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http: HttpClient) { }

  apiBaseUrl: string = environment.apiUrl;

  getAllCars(): Observable<Car[]> {
    return this.http.get<Car[]>(this.apiBaseUrl + '/api/Cars');
  }

  getCarById(id: string): Observable<Car> {
    return this.http.get<Car>(this.apiBaseUrl + '/api/Cars/' + id);
  }

  addCar(car: FormData): Observable<UploadCar> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');                                            // Set the content type to allow file upload

    return this.http.post<Car>(this.apiBaseUrl + '/api/Cars', car, { headers });
  }

  updateCar(id: string, car: Car): Observable<Car> {
    return this.http.put<Car>(this.apiBaseUrl + '/api/Cars/' + id, car);
  }

  deleteCar(id: string): Observable<Car> {
    return this.http.delete<Car>(this.apiBaseUrl + '/api/Cars/' + id);
  }
}
