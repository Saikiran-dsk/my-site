import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  changeHeaderColor:boolean = false;
  collapseTheHeader:boolean = false;
  constructor() { }

  ngOnInit() {
  }
  collapseHeader(val){
    if(!this.collapseTheHeader && val == 'true'){
      this.collapseTheHeader = true;
    }else{
      this.collapseTheHeader = false;
    }
    
  }
  @HostListener('window:scroll', ['$event']) getScrollHeight(event) {
    this.collapseHeader('');
    if(window.pageYOffset > 5){
     this.changeHeaderColor = true;
    }else{
      this.changeHeaderColor  = false;
    }
  }
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.collapseHeader('');
    event.target.innerWidth;
  }
  
}
