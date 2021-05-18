import { Component, OnInit } from '@angular/core';
import { GlobalDataSummary } from 'src/app/models/global-data';
import { DataServicesService } from 'src/app/services/data-service.service';
import { GoogleChartInterface } from 'ng2-google-charts';
//import { timeStamp } from 'console';
import { GoogleChartsDataTable } from 'ng2-google-charts/lib/google-charts-datatable';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  totalConfirmed=0;
  totalActive=0;
  totalDeaths=0;
  totalRecovered=0;
  globalData:GlobalDataSummary[];
  pieChart : GoogleChartInterface ={
    chartType:'PieChart'
  }
  ColumnChart : GoogleChartInterface ={
    chartType: 'ColumnChart'
  }
  constructor(private dataService:DataServicesService) { }
  initChart(casetype:string){
    let datatable= [];
    datatable.push(["country","cases"])
    this.globalData.forEach(cs=>{
      let value:number;
      if(casetype =='c')
      if(cs.confirmed>8000)
      value=cs.confirmed
  
    if(casetype=='a')
      if(cs.active>8000)
     value=cs.active
    if(casetype=='r')
      if(cs.recovered>8000)
     value=cs.recovered
    if(casetype=='d')
      if(cs.deaths>8000)
    value =cs.deaths
    datatable.push([cs.country,value])
    })
     this.pieChart ={
      chartType: 'PieChart',
      dataTable:datatable,

      //firstRowIsData: true,
      options: {
        height:700
        },
    };
    this.ColumnChart ={
      chartType: 'ColumnChart',
      dataTable:datatable,

      //firstRowIsData: true,
      options: {
        height:700
        },
    };
  }
  ngOnInit(): void {
    
    this.dataService.getGlobalData()
    .subscribe(
      {
        next:(result)=>{
          console.log(result)
          this.globalData=result;
          result.forEach(cs=>{
            if(!Number.isNaN(cs.confirmed)){
            this.totalConfirmed+=cs.confirmed
            this.totalActive+=cs.active
            this.totalDeaths+=cs.deaths
            this.totalRecovered+=cs.recovered
            }
          })
          this.initChart('c');
          
        }
      }
    )
  }
  updateChart(input:HTMLInputElement){
    console.log(input.value);
    this.initChart(input.value);
  }

}
