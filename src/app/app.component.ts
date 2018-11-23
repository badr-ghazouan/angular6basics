import { Component } from '@angular/core';
import {HelloComponent} from "./hello/hello.component";
import { Compiler } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'introAngular from ghazouan';
 
}
