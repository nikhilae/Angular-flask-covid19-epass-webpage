import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm, Validators } from '@angular/forms';  
import { Router } from '@angular/router';
@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {


  email:string="";
  name:string="";
  phone:number;
  aadhar:string="";
  address:string="";
  destination:string="";
  source:string="";
  city:string="";
  zip:string="";
  
  constructor(private http:HttpClient, private route:Router) { }

  ngOnInit(): void {

  

  }
  
  myAlert(){
    alert("Success");
  }
  updateSource(source:string){
    this.source=source;
  }
  updateDestination(destination:string){
    this.destination =destination;        

  }
  bookpass(){

    let data = {
      email:this.email,
      name:this.name,
      phone:this.phone,
      aadhar:this.aadhar,
      address:this.address,
      source:this.source,
      destination:this.destination,
      city:this.city,
      zip:this.zip
    };

    this.http.post("http://127.0.0.1:5000/bookpass",data).subscribe(data=>{
      console.log(data);
      this.route.navigate(["/passes"]);
    },error=>{
      console.log(error);

    })

    

  }



}
 
  

