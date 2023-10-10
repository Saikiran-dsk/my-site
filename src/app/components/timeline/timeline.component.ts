import { Component } from '@angular/core';
import { userData } from 'src/app/project-json/data';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent {
  projectsData = userData.projects;
}
