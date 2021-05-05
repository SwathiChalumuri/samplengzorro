import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class WeatherServicesService {

  constructor(private http:HttpClient) { }
  getData(city: any){
    return this.http.get(`${environment.url}q=${city}&appid=${environment.appid}`)
  }
}
