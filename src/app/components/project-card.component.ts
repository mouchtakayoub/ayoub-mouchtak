import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../models/portfolio.models';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="project-card glass-card" [class.highlighted]="isPrimary">
      <!-- Media Header / Browser Frame -->
      <div class="card-media-wrapper">
        <div class="browser-header">
          <div class="browser-dots">
            <span class="dot dot-red"></span>
            <span class="dot dot-yellow"></span>
            <span class="dot dot-green"></span>
          </div>
          <span class="view-tag">{{ project.categoryLabel }}</span>
        </div>

        <div class="image-container" (click)="openDetails.emit(project)">
          <img 
            [src]="activeImage" 
            [alt]="project.title"
            class="project-img" 
            loading="lazy"
          />
          <div class="image-overlay">
            <button class="btn btn-primary btn-sm">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
              Explore Case Study & Metrics
            </button>
          </div>
        </div>

        <!-- Secondary Image Switcher if available -->
        <div *ngIf="project.secondaryImage" class="view-switcher">
          <button 
            (click)="activeImage = project.primaryImage"
            [class.active-view]="activeImage === project.primaryImage"
            class="switcher-btn">
            Hero View
          </button>
          <button 
            (click)="activeImage = project.secondaryImage"
            [class.active-view]="activeImage === project.secondaryImage"
            class="switcher-btn">
            {{ project.id === 'vanguard' ? 'Team View' : 'Menu View' }}
          </button>
        </div>
      </div>

      <!-- Card Content -->
      <div class="card-body">
        <div class="card-meta">
          <span class="badge badge-blue">{{ project.client }}</span>
          <span class="badge badge-green">{{ project.badge }}</span>
        </div>

        <h3 class="card-title" (click)="openDetails.emit(project)">
          {{ project.title }}
        </h3>

        <p class="card-tagline font-serif">
          "{{ project.tagline }}"
        </p>

        <p class="card-overview">
          {{ project.overview }}
        </p>

        <!-- Metric Badges Strip -->
        <div class="metrics-strip">
          <div *ngFor="let m of project.metrics" class="metric-pill">
            <span class="metric-val">{{ m.value }}</span>
            <span class="metric-lbl">{{ m.label }}</span>
          </div>
        </div>

        <!-- Tech Stack Tags -->
        <div class="tech-tags">
          <span *ngFor="let t of project.techStack" class="tech-tag">
            {{ t }}
          </span>
        </div>

        <!-- Card Footer Actions -->
        <div class="card-footer">
          <button (click)="openDetails.emit(project)" class="btn btn-outline btn-sm" style="width: 100%;">
            View Case Study & Architectural Details
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .project-card {
      display: flex;
      flex-direction: column;
      overflow: hidden;
      border-radius: 20px;
      border: 1px solid rgba(255, 255, 255, 0.08);
      background: rgba(17, 24, 39, 0.9);
      transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .project-card:hover {
      border-color: rgba(96, 165, 250, 0.4);
      transform: translateY(-6px);
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 30px rgba(37, 99, 235, 0.15);
    }

    .card-media-wrapper {
      position: relative;
      background: #0f172a;
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    }

    .browser-header {
      display: flex;
      align-items: center;
      padding: 10px 16px;
      background: #0b0f19;
      border-bottom: 1px solid rgba(255, 255, 255, 0.06);
    }

    .view-tag {
      font-size: 0.7rem;
      color: #93c5fd;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    .image-container {
      position: relative;
      height: 280px;
      overflow: hidden;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #030712;
    }

    .project-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: top center;
      transition: transform 0.5s ease;
    }

    .project-card:hover .project-img {
      transform: scale(1.03);
    }

    .image-overlay {
      position: absolute;
      inset: 0;
      background: rgba(11, 15, 25, 0.7);
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      backdrop-filter: blur(4px);
      transition: opacity 0.3s ease;
    }

    .image-container:hover .image-overlay {
      opacity: 1;
    }

    .view-switcher {
      position: absolute;
      bottom: 12px;
      right: 12px;
      display: flex;
      gap: 6px;
      background: rgba(15, 23, 42, 0.85);
      backdrop-filter: blur(8px);
      padding: 4px;
      border-radius: 9999px;
      border: 1px solid rgba(255, 255, 255, 0.1);
      z-index: 5;
    }

    .switcher-btn {
      background: transparent;
      border: none;
      color: #9ca3af;
      font-size: 0.72rem;
      font-weight: 600;
      padding: 4px 10px;
      border-radius: 9999px;
      cursor: pointer;
      transition: all 0.2s ease;
    }

    .switcher-btn.active-view {
      background: #2563eb;
      color: #ffffff;
    }

    .card-body {
      padding: 24px;
      display: flex;
      flex-direction: column;
      flex: 1;
    }

    .card-meta {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin-bottom: 12px;
    }

    .card-title {
      font-size: 1.3rem;
      font-weight: 700;
      color: #ffffff;
      cursor: pointer;
      margin-bottom: 6px;
      transition: color 0.2s ease;
    }

    .card-title:hover {
      color: #60a5fa;
    }

    .card-tagline {
      font-size: 0.95rem;
      color: #fbbf24;
      margin-bottom: 12px;
      font-style: italic;
    }

    .card-overview {
      font-size: 0.9rem;
      color: #9ca3af;
      line-height: 1.6;
      margin-bottom: 18px;
      flex: 1;
    }

    .metrics-strip {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 8px;
      background: rgba(15, 23, 42, 0.6);
      padding: 10px 14px;
      border-radius: 12px;
      border: 1px solid rgba(255, 255, 255, 0.05);
      margin-bottom: 18px;
    }

    .metric-pill {
      display: flex;
      flex-direction: column;
    }

    .metric-val {
      font-weight: 800;
      font-size: 1rem;
      color: #f9fafb;
    }

    .metric-lbl {
      font-size: 0.72rem;
      color: #94a3b8;
    }

    .tech-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
      margin-bottom: 22px;
    }

    .tech-tag {
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.08);
      color: #cbd5e1;
      font-size: 0.74rem;
      padding: 3px 10px;
      border-radius: 6px;
      font-family: monospace;
    }

    .card-footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      padding-top: 14px;
      border-top: 1px solid rgba(255, 255, 255, 0.08);
    }

    .card-hire-link-btn {
      background: transparent;
      border: none;
      font-size: 0.82rem;
      color: #34d399;
      font-weight: 600;
      cursor: pointer;
      transition: color 0.2s ease;
    }

    .card-hire-link-btn:hover {
      color: #10b981;
      text-decoration: underline;
    }
  `]
})
export class ProjectCardComponent {
  @Input({ required: true }) project!: Project;
  @Input() isPrimary = false;
  @Output() openDetails = new EventEmitter<Project>();

  activeImage = '';

  ngOnInit() {
    this.activeImage = this.project.primaryImage;
  }
}
