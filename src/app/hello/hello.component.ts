import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  i=0;
  myvar = "passed from ts file <==> this is called interpolation '{{}}'  ";
  bitwiser = 4 | 9; // 0 and 1 =1 , 1 and 0 =1, 1 and 1 =0 , 0 and  0 =0
  othervar =Math.random();
  constructor() { }

 
  ngOnInit() {
  /*  setInterval(()=>{
      this.othervar  = Math.random(); 
    },500)
    // if we uncomment this the doSomeHeavyTask() would be called infinively,
    // because of interpolation call in html{{doSomeHeavyTask}}
    // uncomment it to see the difference in console
    */
    console.log("ngOnInit is called on hello component")
  }
  doSomeHeavyTask() {
    console.log("do someHeavyTask is called" + this.i);
    // if we print (this.i++) the i value change, so the method will be called by interpolation extra times
  }

  
}
