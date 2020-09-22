import { Component, OnInit } from '@angular/core';
import  *  as  data  from  '../data.json';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  paint: any = (data as any).default;
  constructor() { }
 

  ngOnInit(): void {
    console.log(data);
  }
  

}
