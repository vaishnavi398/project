import { Component, OnInit } from '@angular/core';
import  *  as  data  from  '../data.json';


@Component({
  selector: 'app-painting',
  templateUrl: './painting.component.html',
  styleUrls: ['./painting.component.css']
})
export class PaintingComponent implements OnInit {
  public searchText : string;

  paint: any = (data as any).default;
  constructor() { }

  ngOnInit() {
    console.log(data);
  }

}
