import { Component, OnInit } from '@angular/core';
import { userData } from 'src/app/project-json/data';

@Component({
  selector: 'contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  data:any;
  constructor() { 
    this.data = userData.contactData;
  }

  ngOnInit() {
  }

}
