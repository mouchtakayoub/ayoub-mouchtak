import { Component, EventEmitter, Output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from './project-card.component';
import { PROJECTS } from '../data/portfolio-data';
import { Project } from '../models/portfolio.models';

@Component({
  selector: 'app-projects-section',
  standalone: true,
  imports: [CommonModule, ProjectCardComponent],
  template: `
    <section id="projects" class="section">
      <div class="container">
        <div class="section-header">
          <span class="badge badge-green">Proven Work & High-Converting Case Studies</span>
          <h2 class="section-title">Flagship Web Applications</h2>
          <p class="section-subtitle">
            Explore 4 production-grade digital portals built for speed, conversion, and world-class client branding.
          </p>
        </div>

        <!-- Filter Bar -->
        <div class="filter-wrapper">
          <div class="filter-tabs">
            <button 
              *ngFor="let tab of filterTabs"
              (click)="activeCategory.set(tab.key)"
              [class.active-tab]="activeCategory() === tab.key"
              class="filter-tab-btn">
              <span>{{ tab.label }}</span>
              <span class="tab-count">{{ getCount(tab.key) }}</span>
            </button>
          </div>
        </div>

        <!-- Projects Grid -->
        <div class="projects-grid">
          <app-project-card
            *ngFor="let proj of filteredProjects(); let i = index"
            [project]="proj"
            [isPrimary]="i === 0"
            (openDetails)="onSelectProject($event)">
          </app-project-card>
        </div>

        <!-- Custom Request Banner -->
        <div class="custom-request-box glass-card">
          <div class="request-content">
            <h3 class="request-title">Have a specific niche or custom stack requirement?</h3>
            <p class="request-sub">
              Whether you need an MVP in 2 weeks or an enterprise microservices overhaul, I engineer solutions tailored to your exact roadmap.
            </p>
          </div>
          <div class="request-actions">
            <button (click)="openContact.emit()" class="btn btn-primary">
              Discuss Your Project
            </button>
            <button (click)="openContact.emit()" class="btn btn-emerald">
              Request a Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .filter-wrapper {
      display: flex;
      justify-content: center;
      margin-bottom: 45px;
    }

    .filter-tabs {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      padding: 6px;
      background: rgba(17, 24, 39, 0.8);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 9999px;
      backdrop-filter: blur(12px);
    }

    .filter-tab-btn {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 8px 18px;
      border-radius: 9999px;
      background: transparent;
      border: none;
      color: #9ca3af;
      font-size: 0.86rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .filter-tab-btn:hover {
      color: #ffffff;
    }

    .filter-tab-btn.active-tab {
      background: #2563eb;
      color: #ffffff;
      box-shadow: 0 4px 12px rgba(37, 99, 235, 0.4);
    }

    .tab-count {
      font-size: 0.72rem;
      padding: 2px 7px;
      background: rgba(255, 255, 255, 0.15);
      border-radius: 9999px;
    }

    .projects-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 32px;
      margin-bottom: 50px;
    }

    .custom-request-box {
      margin-top: 50px;
      padding: 36px 44px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 30px;
      border-radius: 24px;
      background: linear-gradient(135deg, rgba(30, 58, 138, 0.25), rgba(17, 24, 39, 0.9));
      border: 1px solid rgba(59, 130, 246, 0.3);
    }

    .request-title {
      font-size: 1.4rem;
      font-weight: 700;
      color: #ffffff;
      margin-bottom: 6px;
    }

    .request-sub {
      font-size: 0.92rem;
      color: #94a3b8;
      max-width: 600px;
      line-height: 1.6;
    }

    .request-actions {
      display: flex;
      gap: 12px;
      flex-shrink: 0;
    }

    @media (max-width: 960px) {
      .projects-grid {
        grid-template-columns: 1fr;
      }
      .custom-request-box {
        flex-direction: column;
        text-align: center;
        padding: 30px;
      }
      .request-actions {
        flex-direction: column;
        width: 100%;
      }
    }
  `]
})
export class ProjectsSectionComponent {
  @Output() selectProject = new EventEmitter<Project>();
  @Output() openContact = new EventEmitter<void>();

  allProjects = PROJECTS;
  activeCategory = signal<string>('all');

  filterTabs = [
    { key: 'all', label: 'All Projects' },
    { key: 'healthcare', label: 'Healthcare & MedTech' },
    { key: 'fitness', label: 'Fitness & Sports' },
    { key: 'legal', label: 'Corporate & Legal' },
    { key: 'hospitality', label: 'Luxury & Dining' }
  ];

  filteredProjects() {
    const cat = this.activeCategory();
    if (cat === 'all') return this.allProjects;
    return this.allProjects.filter(p => p.category === cat);
  }

  getCount(key: string): number {
    if (key === 'all') return this.allProjects.length;
    return this.allProjects.filter(p => p.category === key).length;
  }

  onSelectProject(project: Project) {
    this.selectProject.emit(project);
  }
}
