import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showSplash = true;
  showAboutMe = false;
  showExperience = false;
  showSkills = false;
  showProjects = false;

  // Event Handlers
  onSectionClick(index: number): void {
    switch (index) {
      case 1:
        this.showAboutMe = !this.showAboutMe;
        this.showExperience = false;
        this.showSkills = false;
        this.showProjects = false;
        break;
      case 2:
        this.showAboutMe = false;
        this.showExperience = false;
        this.showSkills = !this.showSkills;
        this.showProjects = false;
        break;
      case 3:
        this.showAboutMe = false;
        this.showExperience = !this.showExperience;
        this.showSkills = false;
        this.showProjects = false;
        break;
      case 4:
        this.showAboutMe = false;
        this.showExperience = false;
        this.showSkills = false;
        this.showProjects = !this.showProjects;
        break;
    }

    if (!this.showAboutMe && !this.showExperience && !this.showSkills && !this.showProjects) {
      this.showSplash = true;
    }
    else {
      this.showSplash = false;
    }

  }
}
