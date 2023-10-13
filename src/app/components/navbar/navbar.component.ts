import { Component, HostListener, OnInit } from '@angular/core';
import { userData } from 'src/app/project-json/data';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  changeHeaderColor: boolean = false;
  collapseTheHeader: boolean = false;
  data= userData;
  constructor() { }

  ngOnInit() {
    if(window.innerWidth < 993){
      this.collapseTheHeader = true;
    }
  }
  collapseHeader(val) {
    if (!this.collapseTheHeader && val == 'true') {
      this.collapseTheHeader = true;
    } else {
      this.collapseTheHeader = false;
    }

  }
  @HostListener('window:scroll', ['$event']) getScrollHeight(event) {
    this.collapseHeader('');
    if (window.pageYOffset > 5 && window.innerWidth > 993 || window.innerWidth < 993) {
      this.changeHeaderColor = true;
    } else {
      this.changeHeaderColor = false;
    }
  }
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.collapseHeader('');
    event.target.innerWidth;
  }

  scrollTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
  
  closeMenu(){
    if(window.innerWidth < 993){
      document.getElementById('collapse-button').click()
    }
    
  }
}
