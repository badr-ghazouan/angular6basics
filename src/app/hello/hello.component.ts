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

  constructor() { 
    setInterval(()=>{
      //this.myvar  = Math.random().toString();   
      //console.log("myvar  = " +  this.myvar);
      /*    documentation
        myvar is one way binded variable, it's value from component.ts(javascript) to html(view), not vice versa
        mydisabledvar is also one way binded, but from view (html) to component.ts(javscript)
      */
    },1000)
  }
  /*
    to use two way data binding, we add  [(ngModel)]  in html input, 
    add FormsModule from '@angular/forms' to import array in app.module.ts
  */

  ngOnInit() {
  
    console.log("ngOnInit is called on hello component")
  }
  callMyFunction() {
    this.mydisabledvar = !this.mydisabledvar;
    console.log("function called");
  }

  updateInput(e) {
    console.log(e.target.value);
    this.othervar = e.target.value;
  }
  
}
