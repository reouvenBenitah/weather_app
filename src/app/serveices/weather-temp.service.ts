import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherTempService {

  constructor(private http:HttpClient) { }

//if not pass argument so the was location tel aviv 
  getWeather(location="tel%20aviv"){
    return this.http.get("http://api.weatherstack.com/current?access_key=6e642065ef77747a963102c86a912900&query="+location);
  
  }


  // getWeatherWeek(locationKey=215854){

  //   return this.http.get('http://dataservice.accuweather.com/forecasts/v1/daily/5day/locationKey?apikey=Gi3een1ldFiVGxImtGlGbHabpu1EJsuh&language=en')
  // }
}


