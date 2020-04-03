import { Component, OnInit} from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { WeatherTempService } from "../../serveices/weather-temp.service";

@Component({
  selector: "app-box-weather",
  templateUrl: "./box-weather.component.html",
  styleUrls: ["./box-weather.component.css"]
})
export class BoxWeatherComponent implements OnInit {
  public weatherSearchForm: FormGroup;
  public data: {};
  public locationSearch: any;
  public locationKey:any; 

  constructor(

    private formBuilder: FormBuilder,
    private weatherData: WeatherTempService
  ) {}

  ngOnInit(): void {
    this.weatherSearchForm = this.formBuilder.group({
      location: [" "]
    });
   this.locationKey='';
  }
// get location from form and send api
  sendToApi(formvalue) {
   
    this.locationSearch =formvalue;
    this.weatherData.getWeather(formvalue.location).subscribe(data => {
      this.data = data
      // console.log(this.data);
      // this.locationKey = this.data.current.wind_degreekey;
      // this.weatherData.getWeatherWeek(this.locationKey).subscribe(res=>{})
    });
   
  }
}
