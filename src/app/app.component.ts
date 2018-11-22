import { Component } from '@angular/core';


function logging(className) {
  console.log(className)

  return (...args) =>{
    console.log("arguments passed : ", args)
    return new className(...args)
  }
}

@logging
 class ExampleClass {

  constructor(...args) {
    console.log("constructor fired");
     }
}

const myclass = new ExampleClass(4,5);



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'introAngular from ghazouan';
  
 
}
