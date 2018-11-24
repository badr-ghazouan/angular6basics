import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  myvar = "app";
  othervar = "whatever";
  mydisabledvar = false;

  constructor() {  }
 
  ngOnInit() {
  
    console.log("ngOnInit is called on hello component")
  }

  records = [
    {
      name:"badr",
      option : "info"
    },
    {
      name : "omar",
      option : "data info"
    },
    {
      name : "abcd",
      option : "xye" 
    },
    {
      name:"badr",
      option : "info"
    },
    {
      name : "omar",
      option : "data info"
    },
    {
      name : "abcd",
      option : "xye" 
    }
  ]
  
  months = ["January", "February", "March", "April",
  "May", "June", "July", "August", "September",
  "October", "November", "December"];
isavailable = false;   //variable is set to true
}
