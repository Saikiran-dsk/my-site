import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BannerComponent } from './components/banner/banner.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { PortfilioComponent } from './components/portfilio/portfilio.component';
import { FooterComponent } from './components/footer/footer.component';
import { ExperienceComponent } from './components/experience/experience.component';
import {MatTabsModule} from '@angular/material/tabs';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { TimelineComponent } from './components/timeline/timeline.component';
import { HeadBarComponent } from './components/head-bar/head-bar.component';
import { MyWorkComponent } from './components/my-work/my-work.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerComponent,
    AboutComponent,
    ServicesComponent,
    ContactUsComponent,
    PortfilioComponent,
    FooterComponent,
    ExperienceComponent,
    TimelineComponent,
    HeadBarComponent,
    MyWorkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
      
    }) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
