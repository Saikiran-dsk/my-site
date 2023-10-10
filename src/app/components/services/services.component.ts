import { Component, OnInit } from '@angular/core';
import { userData } from 'src/app/project-json/data';

@Component({
  selector: 'services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  data:any;
  constructor() { 
    this.data = userData.tech;
  }

  ngOnInit() {
  }
getWidth(lang){
  return 'width:'+lang.percentage+'%;'
}
}
