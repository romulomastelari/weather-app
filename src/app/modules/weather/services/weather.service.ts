import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = 'b9aba62c86daae5a8e938c0427a7e986'

  constructor(private http: HttpClient) {
  }

  getWeatherDatas(cityName: string): Observable<any> {
  return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&mode=json&appid=${this.apiKey}`, {})
  }
}
