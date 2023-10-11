import { Component } from '@angular/core';
import { userData } from 'src/app/project-json/data';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent {
  projectsData = userData.projects;
  getClassForTimeline(){
    if(1400 < window.innerWidth){
      return 'timline-data'
    }
    return 'timline-data-mobile'
  }
}
