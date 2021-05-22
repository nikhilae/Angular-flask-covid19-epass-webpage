import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-passes',
  templateUrl: './passes.component.html',
  styleUrls: ['./passes.component.css']
})
export class PassesComponent implements OnInit {
  name:string="";
  source:string="";
  destination:string="";
  res:any;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.mypass();
  }
  mypass(){

    this.http.get("http://127.0.0.1:5000/mypass").subscribe(data=>{
    this.res = data;
    },error=>{
      console.log(error);

    })
  }
}
