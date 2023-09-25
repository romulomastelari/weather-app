import { Component, Input } from '@angular/core';
import { WeatherDatas } from "../../../../models/interfaces/weatherDatas";
import { faDroplet, faTemperatureHigh, faTemperatureLow, faWind } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: []
})
export class WeatherCardComponent {
  @Input() weatherDatas!: WeatherDatas
  minTemperatureIcon = faTemperatureLow
  maxTemperatureIcon = faTemperatureHigh
  humidityIcon = faDroplet
  windIcon = faWind
}
