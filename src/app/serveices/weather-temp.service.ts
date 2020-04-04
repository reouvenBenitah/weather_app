import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherTempService {

  constructor(private http:HttpClient) { }

//if not pass argument so the was location tel aviv 
  getWeather(location="tel%20aviv"){
    return this.http.get("http://api.weatherstack.com/current?access_key=KEY_API&query="+location);
  
  }


  // getWeatherWeek(locationKey=215854){

  //   return this.http.get('http://dataservice.accuweather.com/forecasts/v1/daily/5day/locationKey?apikey=KEY_API&language=en')
  // }
}


