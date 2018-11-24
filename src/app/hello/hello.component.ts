import { Component, OnInit } from '@angular/core';
import {RecordsService} from '../records.service';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  records : any; // means this variable is of any datatype

  //dependency injection by angular
  constructor(private myService : RecordsService) {
    /*  
       constructor(private myService : RecordsService) {} == {
                  
        private myservice : RecordsService
        constructor(private myService : RecordsService) {} == {
         this.myService = myService;
      }
      
    */
    }
 
  ngOnInit() {
    this.records = this.myService.getData();

    console.log("ngOnInit is called on hello component")
  }

}
