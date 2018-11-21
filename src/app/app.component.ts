import { Component } from '@angular/core';

function Console(target,name,descriptor) {
  console.log("print in console :  " + target,name,descriptor );
  //console.log("print in console :  " + target+ "-- " + name + " -- " + descriptor);
  

  // store the original function (descriptor.value is a function)

  const original  = descriptor.value
  // do some manipulation with descriptor.value function

  original();  // console(hey there)

  descriptor.value = function(...args) {
    console.log("descriptor is hacked" )
    const result = original(...args)
    console.log("result is ", result)
    return result
  }
  // return the new descriptor
      return descriptor;
 
}

function log(message) {
  // access the "metadata" message
  console.log(message);
  // return a function closure, which
  // is passed the class as `target`
  return function(target) {
    console.log('Our decorated class', target);
  };
}

let myObj = {
  myPropOne: 1,
  myPropTwo: 2
};


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'introAngular from ghazouan';
  
   

  constructor() {
   // console.log("constructor from AppComponent : " + Object.getOwnPropertyDescriptor(myObj,myObj.myPropOne));
    console.log("result from constructor is ", this.asimplemethod(5,3));
  }

    @Console
    asimplemethod(a,b) {
      return a*b
    
  }
}
