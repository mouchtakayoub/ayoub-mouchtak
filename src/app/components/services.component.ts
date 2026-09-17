import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SERVICES } from '../data/portfolio-data';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="services" class="section" style="background: rgba(11, 15, 25, 0.5);">
      <div class="container">
        <div class="section-header">
          <span class="badge badge-green">How I Deliver Value</span>
          <h2 class="section-title">Specialized Freelance Services</h2>
          <p class="section-subtitle">
            Tailored engineering solutions designed to save you time, eliminate technical bottlenecks, and accelerate revenue.
          </p>
        </div>

        <div class="services-grid">
          <div *ngFor="let s of services" class="service-card glass-card">
            <div class="service-top">
              <span class="service-badge">{{ s.subtitle }}</span>
              <h3 class="service-title">{{ s.title }}</h3>
              <p class="service-desc">{{ s.description }}</p>
            </div>

            <div class="deliverables-box">
              <div class="deliverables-title">Key Deliverables:</div>
              <ul class="deliverables-list">
                <li *ngFor="let item of s.deliverables">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>{{ item }}</span>
                </li>
              </ul>
            </div>

            <div class="service-footer">
              <div class="service-tech-tags">
                <span *ngFor="let t of s.techUsed" class="mini-tag">{{ t }}</span>
              </div>
              <button (click)="openContact.emit()" class="btn btn-outline btn-sm">
                Inquire
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .services-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 28px;
    }

    .service-card {
      padding: 32px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      border-radius: 20px;
    }

    .service-badge {
      display: inline-block;
      font-size: 0.76rem;
      font-weight: 700;
      color: #38bdf8;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      margin-bottom: 8px;
    }

    .service-title {
      font-size: 1.45rem;
      font-weight: 700;
      color: #ffffff;
      margin-bottom: 12px;
    }

    .service-desc {
      font-size: 0.92rem;
      color: #9ca3af;
      line-height: 1.6;
      margin-bottom: 22px;
    }

    .deliverables-box {
      background: rgba(15, 23, 42, 0.6);
      border: 1px solid rgba(255, 255, 255, 0.06);
      border-radius: 14px;
      padding: 16px 18px;
      margin-bottom: 22px;
    }

    .deliverables-title {
      font-size: 0.78rem;
      font-weight: 700;
      color: #e2e8f0;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      margin-bottom: 10px;
    }

    .deliverables-list {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .deliverables-list li {
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 0.86rem;
      color: #cbd5e1;
    }

    .service-footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 14px;
      padding-top: 14px;
      border-top: 1px solid rgba(255, 255, 255, 0.08);
    }

    .service-tech-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
    }

    .mini-tag {
      background: rgba(255, 255, 255, 0.06);
      color: #94a3b8;
      padding: 2px 8px;
      border-radius: 6px;
      font-size: 0.72rem;
      font-family: monospace;
    }

    @media (max-width: 860px) {
      .services-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class ServicesComponent {
  @Output() openContact = new EventEmitter<void>();
  services = SERVICES;
}
