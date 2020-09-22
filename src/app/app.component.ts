import { Component } from '@angular/core';
//import  *  as  data  from  './data.json';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  heading = 'Vaishnavi Art Gallery';

 // paint: any = (data as any).default;

  constructor(){}
  ngOnInit(){
 //   console.log(data);
  
  }
}
