import { Component, OnInit } from '@angular/core';
import { userData } from 'src/app/project-json/data';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  data:any;
  constructor() { 
    this.data = userData.footer;
  }

  ngOnInit() {
  }

}
