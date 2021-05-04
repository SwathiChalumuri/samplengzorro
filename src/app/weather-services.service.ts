import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class WeatherServicesService {

  constructor(private http:HttpClient) { }
  getData(city: any){
    return this.http.get(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=1635890035cbba097fd5c26c8ea672a1`)
  }
}
