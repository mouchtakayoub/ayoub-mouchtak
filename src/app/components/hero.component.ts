import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { STATS } from '../data/portfolio-data';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="hero-section">
      <div class="container hero-container">
        <!-- Left Content -->
        <div class="hero-content">
          <div class="hero-badge">
            <span class="badge badge-blue">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
              Top-Tier Full-Stack Engineer
            </span>
            <span class="badge badge-green">
              <span class="pulse-dot"></span>
              Available for Contracts
            </span>
          </div>

          <h1 class="hero-title">
            Architecting <span class="gradient-text">High-Converting</span> Web Applications & Scalable Systems.
          </h1>

          <p class="hero-description">
            I help startups, enterprises, and ambitious businesses turn complex ideas into robust, scalable, and high-performance digital products. Delivering complete, end-to-end full-stack web solutions from intuitive, responsive user experiences to resilient backend architectures and secure database systems.
          </p>

          <div class="hero-actions">
            <a href="#projects" class="btn btn-primary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                <line x1="8" y1="21" x2="16" y2="21"></line>
                <line x1="12" y1="17" x2="12" y2="21"></line>
              </svg>
              View Featured Work
            </a>
            <button (click)="openContact.emit()" class="btn btn-emerald">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
              Book a Consultation
            </button>
            <a href="https://www.linkedin.com/in/ayoub-mouchtak/" target="_blank" rel="noopener" class="btn btn-outline" title="Connect on LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.25c-.91 0-1.64.73-1.64 1.64s.73 1.64 1.64 1.64 1.64-.73 1.64-1.64-.73-1.64-1.64-1.64Z"/>
              </svg>
              LinkedIn
            </a>
          </div>

          <!-- Trust highlights -->
          <div class="trust-strip">
            <div class="trust-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#34d399" stroke-width="2.5">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span>Agile & Scrum Delivery</span>
            </div>
            <div class="trust-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#34d399" stroke-width="2.5">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span>Enterprise Clean Code</span>
            </div>
            <div class="trust-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#34d399" stroke-width="2.5">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span>Fluent in English & French</span>
            </div>
          </div>
        </div>

        <!-- Right Visual Showcase / Profile Showcase -->
        <div class="hero-visual">
          <div class="dev-showcase-card glass-card">
            <div class="dev-photo-wrapper">
              <img src="profile.jpg" alt="Ayoub Mouchtak" class="dev-main-photo" />
              <div class="photo-status-badge">
                <span class="pulse-dot"></span>
                <span>Available for New Projects</span>
              </div>
            </div>

            <div class="dev-card-info">
              <div class="dev-header-row">
                <div>
                  <h3 class="dev-name">Ayoub Mouchtak</h3>
                  <p class="dev-role">Full-Stack Web Architect</p>
                </div>
                <a href="https://www.linkedin.com/in/ayoub-mouchtak/" target="_blank" rel="noopener" class="dev-linkedin-btn" title="LinkedIn Profile">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.25c-.91 0-1.64.73-1.64 1.64s.73 1.64 1.64 1.64 1.64-.73 1.64-1.64-.73-1.64-1.64-1.64Z"/>
                  </svg>
                </a>
              </div>

              <div class="dev-skills-row">
                <span class="dev-pill">Frontend</span>
                <span class="dev-pill">Backend</span>
                <span class="dev-pill">Microservices</span>
                <span class="dev-pill">APIs</span>
              </div>
            </div>
          </div>

          <!-- Mini Showcase Pill Cards -->
          <div class="floating-pill-1 glass-card">
            <span class="pill-dot pulse-dot"></span>
            <div>
              <div class="pill-title">EliteCare Medical</div>
              <div class="pill-sub">99% Patient Satisfaction</div>
            </div>
          </div>

          <div class="floating-pill-2 glass-card">
            <span class="pill-icon">⚡</span>
            <div>
              <div class="pill-title">PowerFit Gym</div>
              <div class="pill-sub">+64% Membership Signups</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Stats Bar Strip -->
      <div class="container stats-container">
        <div class="stats-grid glass-card">
          <div *ngFor="let stat of stats" class="stat-box">
            <div class="stat-value">{{ stat.value }}</div>
            <div class="stat-label">{{ stat.label }}</div>
            <div class="stat-subtext">{{ stat.subtext }}</div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero-section {
      padding: 70px 0 50px;
      position: relative;
    }

    .hero-container {
      display: grid;
      grid-template-columns: 1.2fr 0.8fr;
      align-items: center;
      gap: 50px;
    }

    .hero-badge {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 10px;
      margin-bottom: 24px;
    }

    .hero-title {
      font-size: 3.3rem;
      letter-spacing: -0.02em;
      line-height: 1.15;
      margin-bottom: 22px;
    }

    .gradient-text {
      background: linear-gradient(135deg, #60a5fa, #38bdf8 40%, #34d399 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .hero-description {
      font-size: 1.12rem;
      color: #9ca3af;
      margin-bottom: 34px;
      max-width: 580px;
      line-height: 1.7;
    }

    .hero-description strong {
      color: #f3f4f6;
    }

    .hero-actions {
      display: flex;
      flex-wrap: wrap;
      gap: 14px;
      margin-bottom: 34px;
    }

    .trust-strip {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      padding-top: 14px;
      border-top: 1px solid rgba(255, 255, 255, 0.08);
    }

    .trust-item {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 0.85rem;
      color: #d1d5db;
      font-weight: 500;
    }

    /* Hero Visual */
    .hero-visual {
      position: relative;
      display: flex;
      justify-content: center;
    }

    .dev-showcase-card {
      width: 100%;
      max-width: 400px;
      border-radius: 22px;
      overflow: hidden;
      background: rgba(15, 23, 42, 0.9);
      border: 1px solid rgba(255, 255, 255, 0.12);
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 30px rgba(59, 130, 246, 0.2);
      display: flex;
      flex-direction: column;
    }

    .dev-photo-wrapper {
      position: relative;
      width: 100%;
      height: 380px;
      overflow: hidden;
      background: #000;
    }

    .dev-main-photo {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center 20%;
      display: block;
      transition: transform 0.5s ease;
    }

    .dev-showcase-card:hover .dev-main-photo {
      transform: scale(1.03);
    }

    .photo-status-badge {
      position: absolute;
      bottom: 14px;
      left: 14px;
      display: flex;
      align-items: center;
      gap: 8px;
      background: rgba(11, 15, 25, 0.85);
      backdrop-filter: blur(10px);
      padding: 6px 14px;
      border-radius: 9999px;
      border: 1px solid rgba(16, 185, 129, 0.3);
      font-size: 0.78rem;
      font-weight: 600;
      color: #34d399;
    }

    .dev-card-info {
      padding: 18px 22px;
      background: #0f172a;
      border-top: 1px solid rgba(255, 255, 255, 0.08);
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .dev-header-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .dev-name {
      font-size: 1.25rem;
      font-weight: 800;
      color: #ffffff;
      line-height: 1.2;
    }

    .dev-role {
      font-size: 0.82rem;
      color: #38bdf8;
      margin-top: 2px;
    }

    .dev-linkedin-link {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      background: rgba(14, 165, 233, 0.12);
      border: 1px solid rgba(14, 165, 233, 0.3);
      color: #38bdf8;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.2s ease;
      text-decoration: none;
    }

    .dev-linkedin-link:hover {
      background: rgba(14, 165, 233, 0.25);
      color: #7dd3fc;
      transform: scale(1.08);
    }

    .dev-skills-row {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
    }

    .dev-pill {
      background: rgba(255, 255, 255, 0.06);
      border: 1px solid rgba(255, 255, 255, 0.08);
      color: #94a3b8;
      font-size: 0.72rem;
      padding: 2px 10px;
      border-radius: 6px;
      font-family: monospace;
    }

    /* Floating badges */
    .floating-pill-1 {
      position: absolute;
      bottom: -15px;
      left: -25px;
      padding: 10px 18px;
      display: flex;
      align-items: center;
      gap: 12px;
      background: rgba(17, 24, 39, 0.95);
      border-color: rgba(59, 130, 246, 0.3);
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
    }

    .floating-pill-2 {
      position: absolute;
      top: 15px;
      right: -25px;
      padding: 10px 18px;
      display: flex;
      align-items: center;
      gap: 12px;
      background: rgba(17, 24, 39, 0.95);
      border-color: rgba(16, 185, 129, 0.3);
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
    }

    .pill-title {
      font-size: 0.82rem;
      font-weight: 700;
      color: #ffffff;
    }

    .pill-sub {
      font-size: 0.72rem;
      color: #9ca3af;
    }

    .pill-icon {
      font-size: 1.2rem;
    }

    /* Stats container */
    .stats-container {
      margin-top: 60px;
    }

    .stats-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      padding: 26px 36px;
      gap: 20px;
      border-radius: 20px;
      border: 1px solid rgba(255, 255, 255, 0.08);
      background: rgba(17, 24, 39, 0.7);
    }

    .stat-box {
      text-align: center;
      position: relative;
    }

    .stat-box:not(:last-child)::after {
      content: '';
      position: absolute;
      right: 0;
      top: 15%;
      height: 70%;
      width: 1px;
      background: rgba(255, 255, 255, 0.08);
    }

    .stat-value {
      font-family: var(--font-display);
      font-size: 2.2rem;
      font-weight: 800;
      color: #ffffff;
      line-height: 1.1;
      margin-bottom: 4px;
      background: linear-gradient(135deg, #ffffff, #93c5fd);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .stat-label {
      font-weight: 600;
      font-size: 0.88rem;
      color: #f3f4f6;
    }

    .stat-subtext {
      font-size: 0.75rem;
      color: #9ca3af;
      margin-top: 2px;
    }

    @media (max-width: 1024px) {
      .hero-container {
        grid-template-columns: 1fr;
        gap: 40px;
      }
      .hero-title {
        font-size: 2.6rem;
      }
      .stats-grid {
        grid-template-columns: repeat(2, 1fr);
      }
      .stat-box:nth-child(2)::after {
        display: none;
      }
      .floating-pill-1, .floating-pill-2 {
        position: static;
        margin-top: 10px;
      }
      .hero-visual {
        flex-direction: column;
        align-items: center;
      }
    }

    @media (max-width: 640px) {
      .stats-grid {
        grid-template-columns: 1fr;
      }
      .stat-box::after {
        display: none;
      }
      .hero-title {
        font-size: 2.1rem;
      }
    }
  `]
})
export class HeroComponent {
  @Output() openContact = new EventEmitter<void>();
  stats = STATS;
}
