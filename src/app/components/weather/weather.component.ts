import { Component, OnInit } from '@angular/core';
import { WeatherServicesService } from 'src/app/weather-services.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  cityname: any;
  dataSet: any;
  data:any =[]
  spinn: boolean = false;
  constructor(private service: WeatherServicesService) { }

  ngOnInit(): void {
    
  }
  searchCity(){
    this.spinn = true
    this.service.getData(this.cityname).subscribe((response: Object)=>{
      console.log("res",response)
      this.dataSet = response
      this.data=this.dataSet.list
      let newarr: any=[]
      let dates=this.data.map((x: any)=> x['dt_txt'].split(' ')[0])
      let uniquedates=[...new Set(dates)]
      if(uniquedates.length>5)
      uniquedates.splice(0,1)
      uniquedates.forEach((x: any,i: any)=>{
        let count=0
        this.data.forEach((y: any)=>{
          if(y['dt_txt'].includes(x))
            count++
          if(count == 1){
            newarr.push(y.main)
            newarr[i]['date']=x
          }
        })
      })
      this.data=newarr
      this.spinn=false
    })
  }
}
