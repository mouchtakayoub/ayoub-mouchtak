import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../models/portfolio.models';

@Component({
  selector: 'app-case-study-modal',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngIf="project" class="modal-backdrop" (click)="onBackdropClick($event)">
      <div class="modal-dialog glass-card animate-fade-in">
        <!-- Modal Top Bar -->
        <div class="modal-top-bar">
          <div class="modal-breadcrumbs">
            <span class="badge badge-blue">{{ project.categoryLabel }}</span>
            <span class="client-crumb">{{ project.client }}</span>
          </div>
          <button (click)="close.emit()" class="close-btn" aria-label="Close modal">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <!-- Modal Body Content -->
        <div class="modal-scroll-body">
          <!-- Title Section -->
          <div class="modal-header-info">
            <h2 class="modal-title">{{ project.title }}</h2>
            <p class="modal-tagline font-serif">"{{ project.tagline }}"</p>
          </div>

          <!-- Featured Showcase Image -->
          <div class="modal-media-showcase">
            <div class="browser-header">
              <div class="browser-dots">
                <span class="dot dot-red"></span>
                <span class="dot dot-yellow"></span>
                <span class="dot dot-green"></span>
              </div>
              <span class="view-tag">{{ project.categoryLabel }} • {{ project.client }}</span>
            </div>
            <img [src]="selectedImage" [alt]="project.title" class="modal-main-img" />
            
            <!-- Dual preview toggle if secondary image is available -->
            <div *ngIf="project.secondaryImage" class="modal-image-selector">
              <button 
                (click)="selectedImage = project.primaryImage"
                [class.active]="selectedImage === project.primaryImage"
                class="thumb-btn">
                Main Portal Screen
              </button>
              <button 
                (click)="selectedImage = project.secondaryImage"
                [class.active]="selectedImage === project.secondaryImage"
                class="thumb-btn">
                {{ project.id === 'vanguard' ? 'Attorneys & Team Showcase' : 'Signature Dishes & Menu' }}
              </button>
            </div>
          </div>

          <!-- Metrics Strip -->
          <div class="modal-metrics-grid">
            <div *ngFor="let m of project.metrics" class="modal-metric-card">
              <span class="metric-big">{{ m.value }}</span>
              <span class="metric-small">{{ m.label }}</span>
            </div>
          </div>

          <!-- Deep-Dive Columns -->
          <div class="case-study-details">
            <!-- Left: Problem & Solution -->
            <div class="detail-block">
              <h3 class="detail-heading">
                <span class="heading-icon">🎯</span>
                The Challenge & Client Need
              </h3>
              <p class="detail-text">{{ project.problem }}</p>

              <h3 class="detail-heading" style="margin-top: 24px;">
                <span class="heading-icon">💡</span>
                Architectural Solution
              </h3>
              <p class="detail-text">{{ project.solution }}</p>

              <div class="arch-box">
                <span class="arch-label">Architecture Note:</span>
                <p>{{ project.architectureNotes }}</p>
              </div>
            </div>

            <!-- Right: Features & Tech Stack -->
            <div class="detail-block">
              <h3 class="detail-heading">
                <span class="heading-icon">⚡</span>
                Key Features Delivered
              </h3>
              <ul class="features-list">
                <li *ngFor="let feat of project.keyFeatures">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#34d399" stroke-width="2.5">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>{{ feat }}</span>
                </li>
              </ul>

              <h3 class="detail-heading" style="margin-top: 24px;">
                <span class="heading-icon">🛠️</span>
                Technologies Deployed
              </h3>
              <div class="modal-tech-pills">
                <span *ngFor="let t of project.techStack" class="tech-pill">
                  {{ t }}
                </span>
              </div>
            </div>
          </div>

          <!-- Verified Client Impact Callout -->
          <div class="impact-highlight-card">
            <div class="impact-badge-row">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
              <strong>Verified Project Outcome & Client Impact</strong>
            </div>
            <p class="impact-snippet">"{{ project.verifiedOutcome }}"</p>
          </div>
        </div>

        <!-- Modal Footer Actions -->
        <div class="modal-footer-bar">
          <button (click)="close.emit()" class="btn btn-outline">
            Close Case Study
          </button>
          <button (click)="onRequestQuote()" class="btn btn-emerald">
            Inquire About Similar Project
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .modal-backdrop {
      position: fixed;
      inset: 0;
      background: rgba(3, 7, 18, 0.85);
      backdrop-filter: blur(8px);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 2000;
      padding: 20px;
    }

    .modal-dialog {
      width: 100%;
      max-width: 900px;
      max-height: 90vh;
      display: flex;
      flex-direction: column;
      background: #0f172a;
      border: 1px solid rgba(255, 255, 255, 0.12);
      border-radius: 24px;
      overflow: hidden;
      box-shadow: 0 25px 60px -15px rgba(0, 0, 0, 0.9);
    }

    .modal-top-bar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 16px 24px;
      background: #0b0f19;
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    }

    .modal-breadcrumbs {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .client-crumb {
      font-size: 0.85rem;
      color: #94a3b8;
      font-weight: 500;
    }

    .close-btn {
      background: rgba(255, 255, 255, 0.06);
      border: none;
      color: #9ca3af;
      border-radius: 50%;
      width: 36px;
      height: 36px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.2s ease;
    }

    .close-btn:hover {
      background: rgba(255, 255, 255, 0.15);
      color: #ffffff;
    }

    .modal-scroll-body {
      padding: 28px;
      overflow-y: auto;
      flex: 1;
    }

    .modal-header-info {
      margin-bottom: 24px;
    }

    .modal-title {
      font-size: 1.8rem;
      font-weight: 800;
      color: #f9fafb;
      margin-bottom: 6px;
    }

    .modal-tagline {
      font-size: 1.1rem;
      color: #fbbf24;
      font-style: italic;
    }

    .modal-media-showcase {
      border-radius: 16px;
      overflow: hidden;
      background: #000;
      border: 1px solid rgba(255, 255, 255, 0.1);
      margin-bottom: 28px;
    }

    .modal-main-img {
      width: 100%;
      max-height: 480px;
      object-fit: cover;
      object-position: top center;
      display: block;
    }

    .modal-image-selector {
      display: flex;
      gap: 8px;
      padding: 10px 16px;
      background: #0b0f19;
      border-top: 1px solid rgba(255, 255, 255, 0.08);
    }

    .thumb-btn {
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.1);
      color: #9ca3af;
      padding: 6px 14px;
      border-radius: 9999px;
      font-size: 0.78rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s ease;
    }

    .thumb-btn.active {
      background: #2563eb;
      border-color: #3b82f6;
      color: #ffffff;
    }

    .modal-metrics-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 12px;
      margin-bottom: 30px;
    }

    .modal-metric-card {
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 14px;
      padding: 14px;
      text-align: center;
      display: flex;
      flex-direction: column;
    }

    .metric-big {
      font-family: var(--font-display);
      font-size: 1.4rem;
      font-weight: 800;
      color: #38bdf8;
    }

    .metric-small {
      font-size: 0.75rem;
      color: #9ca3af;
      margin-top: 2px;
    }

    .case-study-details {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 28px;
      margin-bottom: 28px;
    }

    .detail-heading {
      font-size: 1.05rem;
      color: #f3f4f6;
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 10px;
    }

    .detail-text {
      font-size: 0.92rem;
      color: #9ca3af;
      line-height: 1.65;
    }

    .arch-box {
      margin-top: 16px;
      padding: 12px 16px;
      border-radius: 10px;
      background: rgba(30, 41, 59, 0.5);
      border-left: 3px solid #3b82f6;
      font-size: 0.85rem;
      color: #cbd5e1;
    }

    .arch-label {
      font-weight: 700;
      color: #60a5fa;
      display: block;
      margin-bottom: 4px;
    }

    .features-list {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .features-list li {
      display: flex;
      align-items: flex-start;
      gap: 10px;
      font-size: 0.88rem;
      color: #d1d5db;
    }

    .features-list svg {
      flex-shrink: 0;
      margin-top: 3px;
    }

    .modal-tech-pills {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }

    .tech-pill {
      background: rgba(59, 130, 246, 0.1);
      border: 1px solid rgba(59, 130, 246, 0.3);
      color: #93c5fd;
      padding: 4px 12px;
      border-radius: 8px;
      font-size: 0.78rem;
      font-family: monospace;
    }

    .impact-highlight-card {
      background: rgba(16, 185, 129, 0.08);
      border: 1px solid rgba(16, 185, 129, 0.25);
      border-radius: 16px;
      padding: 18px 22px;
      margin-top: 10px;
    }

    .impact-badge-row {
      display: flex;
      align-items: center;
      gap: 10px;
      color: #34d399;
      font-size: 0.9rem;
      margin-bottom: 8px;
    }

    .impact-snippet {
      font-size: 0.92rem;
      color: #e2e8f0;
      font-style: italic;
      line-height: 1.6;
    }

    .modal-footer-bar {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 14px;
      padding: 18px 24px;
      background: #0b0f19;
      border-top: 1px solid rgba(255, 255, 255, 0.08);
    }

    @media (max-width: 768px) {
      .case-study-details {
        grid-template-columns: 1fr;
      }
      .modal-metrics-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }
  `]
})
export class CaseStudyModalComponent {
  @Input() project: Project | null = null;
  @Output() close = new EventEmitter<void>();
  @Output() requestQuote = new EventEmitter<void>();

  selectedImage = '';

  ngOnChanges() {
    if (this.project) {
      this.selectedImage = this.project.primaryImage;
    }
  }

  onRequestQuote() {
    this.close.emit();
    this.requestQuote.emit();
  }

  onBackdropClick(event: MouseEvent) {
    if ((event.target as HTMLElement).classList.contains('modal-backdrop')) {
      this.close.emit();
    }
  }
}
