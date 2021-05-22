import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/services/data-service.service';
import { GlobalDataSummary } from 'src/app/models/global-data';
<<<<<<< HEAD

=======
import { DataServicesService } from 'src/app/services/data-service.service';
import { GoogleChartInterface } from 'ng2-google-charts';
//import { timeStamp } from 'console';
import { GoogleChartsDataTable } from 'ng2-google-charts/lib/google-charts-datatable';
>>>>>>> 894bb4131aab135bfaee74744dfdaf68f58a4b59
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
<<<<<<< HEAD

  totalConfirmed = 0;
  totalActive = 0;
  totalDeaths = 0;
  totalRecovered = 0;
  loading = true;
  globalData: GlobalDataSummary[];
  datatable = [];
  chart = {
    PieChart : "PieChart" ,
    ColumnChart : 'ColumnChart' ,
    LineChart : "LineChart", 
    height: 500, 
    options: {
      animation:{
        duration: 1000,
        easing: 'out',
      },
      is3D: true
    }  
  }
  
  
  constructor(private dataService: DataServiceService) { }


  
=======
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
>>>>>>> 894bb4131aab135bfaee74744dfdaf68f58a4b59
  ngOnInit(): void {

    
    this.dataService.getGlobalData()
<<<<<<< HEAD
      .subscribe(
        {
          next: (result) => {
            console.log(result);
            this.globalData = result;
            result.forEach(cs => {
              if (!Number.isNaN(cs.confirmed)) {
                this.totalActive += cs.active
                this.totalConfirmed += cs.confirmed
                this.totalDeaths += cs.deaths
                this.totalRecovered += cs.active
              }

            })

            this.initChart('c');
          }, 
          complete : ()=>{
            this.loading = false;
          }
=======
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
          
>>>>>>> 894bb4131aab135bfaee74744dfdaf68f58a4b59
        }
      )
  }



  updateChart(input: HTMLInputElement) {
    console.log(input.value);
    this.initChart(input.value)
  }

  initChart(caseType: string) {

    this.datatable = [];
    // this.datatable.push(["Country", "Cases"])
    
    this.globalData.forEach(cs => {
      let value :number ;
      if (caseType == 'c')
        if (cs.confirmed > 2000)
          value = cs.confirmed
          
      if (caseType == 'a')
        if (cs.active > 2000)
          value = cs.active
      if (caseType == 'd')
        if (cs.deaths > 1000)
          value = cs.deaths
          
      if (caseType == 'r')
        if (cs.recovered > 2000)
            value = cs.recovered
        

        this.datatable.push([
            cs.country, value
          ])
    })
    console.log(this.datatable);

  }
<<<<<<< HEAD
  
=======
  updateChart(input:HTMLInputElement){
    console.log(input.value);
    this.initChart(input.value);
  }
>>>>>>> 894bb4131aab135bfaee74744dfdaf68f58a4b59

}