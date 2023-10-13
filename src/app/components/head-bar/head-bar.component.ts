import { Component } from '@angular/core';

@Component({
  selector: 'app-head-bar',
  templateUrl: './head-bar.component.html',
  styleUrls: ['./head-bar.component.scss']
})
export class HeadBarComponent {

  isMobileMenuOpened = false;
  showMobileMenu(){
     this.isMobileMenuOpened = !this.isMobileMenuOpened;
  }
}
