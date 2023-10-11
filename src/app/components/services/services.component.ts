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

getClass(){
  if(window.innerWidth < 992 && 772 < window.innerWidth){
    return 'col-sm-4 col-4 pt-10px'
  }else if(window.innerWidth < 772 && 600 < window.innerWidth){
    return 'col-sm-3 col-3'
  }else if(window.innerWidth < 600 && 420 < window.innerWidth){
    return 'col-sm-4 col-4'
  }if(window.innerWidth < 420){
    return 'col-sm-6 col-6'
  }
     return 'col-md-1'
}
}
