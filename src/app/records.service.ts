import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {
  getData(){
    return [
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
  } 
  
  constructor() { }
}
