import { Component } from '@angular/core';
import { userData } from 'src/app/project-json/data';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {

  projectsData = userData.projects;
}
