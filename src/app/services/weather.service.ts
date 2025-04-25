import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Weather } from "../interfaces/weather.interface";

@Injectable({providedIn: 'root'})
export class WeatherService {
    http = inject(HttpClient)
    getWeather(){
        return this.http.get<Weather[]>("http://localhost:5047/WeatherForecast")
    }
}