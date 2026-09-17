import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar.component';
import { HeroComponent } from './components/hero.component';
import { ProjectsSectionComponent } from './components/projects-section.component';
import { CaseStudyModalComponent } from './components/case-study-modal.component';
import { SkillsComponent } from './components/skills.component';
import { ServicesComponent } from './components/services.component';
import { ExperienceComponent } from './components/experience.component';
import { ContactModalComponent } from './components/contact-modal.component';
import { FooterComponent } from './components/footer.component';
import { Project } from './models/portfolio.models';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    HeroComponent,
    ProjectsSectionComponent,
    CaseStudyModalComponent,
    SkillsComponent,
    ServicesComponent,
    ExperienceComponent,
    ContactModalComponent,
    FooterComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  selectedProject = signal<Project | null>(null);
  isContactOpen = signal(false);

  openProject(project: Project) {
    this.selectedProject.set(project);
    document.body.style.overflow = 'hidden';
  }

  closeProject() {
    this.selectedProject.set(null);
    document.body.style.overflow = '';
  }

  openContact() {
    this.isContactOpen.set(true);
    document.body.style.overflow = 'hidden';
  }

  closeContact() {
    this.isContactOpen.set(false);
    document.body.style.overflow = '';
  }
}
