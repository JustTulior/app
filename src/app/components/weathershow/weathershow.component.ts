import { Component, inject } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { Weather } from '../../interfaces/weather.interface';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-weathershow',
  imports: [JsonPipe],
  templateUrl: './weathershow.component.html',
  styleUrl: './weathershow.component.scss'
})
export class WeathershowComponent {
weatherService: WeatherService = inject(WeatherService)
weathers: Weather[] = []
title = 'weather'
constructor(){
  this.weatherService.getWeather().subscribe(val =>{
    this.weathers = val
  })
}
}
