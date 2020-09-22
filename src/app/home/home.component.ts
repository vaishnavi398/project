import { Component, OnInit } from '@angular/core';
import  *  as  data  from  './data.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  paint: any = (data as any).default;
  constructor() { }

  ngOnInit() {

    console.log(data);
  }

}
