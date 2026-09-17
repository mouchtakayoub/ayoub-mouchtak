import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer id="contact" class="footer-wrapper">
      <div class="container">
        <!-- Main CTA Card -->
        <div class="footer-cta-card glass-card">
          <div class="footer-cta-content">
            <span class="badge badge-green">Ready to get started?</span>
            <h2 class="footer-cta-title">Let’s Build Something Exceptional Together</h2>
            <p class="footer-cta-desc">
              Whether you need an entire application built from scratch, payment gateway integration, or an experienced Angular engineer to strengthen your team — I'm ready to help.
            </p>
            <div class="footer-contact-details">
              <div class="contact-pill">
                <span>📧 Email:</span>
                <a href="mailto:ayoub.mouchtak@gmail.com">ayoub.mouchtak&#64;gmail.com</a>
              </div>
              <div class="contact-pill">
                <span>🔗 LinkedIn:</span>
                <a href="https://www.linkedin.com/in/ayoub-mouchtak/" target="_blank" rel="noopener">ayoub-mouchtak</a>
              </div>
              <div class="contact-pill">
                <span>📱 Phone:</span>
                <a href="tel:+212660468568">+212 660468568</a>
              </div>
              <div class="contact-pill">
                <span>📍 Location:</span>
                <span>Casablanca, Morocco (Remote)</span>
              </div>
            </div>
          </div>

          <div class="footer-cta-actions">
            <button (click)="openContact.emit()" class="btn btn-emerald" style="padding: 14px 30px; font-size: 1.05rem;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
              Book a Consultation
            </button>
            <a href="https://www.linkedin.com/in/ayoub-mouchtak/" target="_blank" rel="noopener" class="btn btn-outline" style="padding: 14px 30px; display: flex; align-items: center; justify-content: center; gap: 8px;">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.25c-.91 0-1.64.73-1.64 1.64s.73 1.64 1.64 1.64 1.64-.73 1.64-1.64-.73-1.64-1.64-1.64Z"/>
              </svg>
              Connect on LinkedIn
            </a>
          </div>
        </div>

        <!-- Footer Bottom Bar -->
        <div class="footer-bottom">
          <div class="footer-brand-side">
            <span class="footer-brand-title">Ayoub Mouchtak</span>
            <span class="footer-brand-sub">Full-Stack Engineer • Angular & Enterprise APIs</span>
          </div>

          <div class="footer-nav">
            <a href="#projects">Work</a>
            <a href="#skills">Skills</a>
            <a href="#services">Services</a>
            <a href="#about">Experience</a>
          </div>

          <div class="footer-copy">
            &copy; 2026 Ayoub Mouchtak. Built with Angular. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer-wrapper {
      padding: 60px 0 30px;
      position: relative;
      background: #070b14;
      border-top: 1px solid rgba(255, 255, 255, 0.08);
    }

    .footer-cta-card {
      padding: 48px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 40px;
      border-radius: 24px;
      background: radial-gradient(circle at top left, rgba(37, 99, 235, 0.15), rgba(17, 24, 39, 0.95));
      border: 1px solid rgba(59, 130, 246, 0.25);
      margin-bottom: 50px;
    }

    .footer-cta-content {
      max-width: 620px;
    }

    .footer-cta-title {
      font-size: 2.2rem;
      color: #ffffff;
      margin: 12px 0 10px 0;
    }

    .footer-cta-desc {
      font-size: 1rem;
      color: #94a3b8;
      line-height: 1.65;
      margin-bottom: 22px;
    }

    .footer-contact-details {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
    }

    .contact-pill {
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.08);
      padding: 6px 14px;
      border-radius: 9999px;
      font-size: 0.8rem;
      color: #cbd5e1;
      display: flex;
      gap: 6px;
    }

    .contact-pill a {
      color: #38bdf8;
      text-decoration: none;
      font-weight: 600;
    }

    .footer-cta-actions {
      display: flex;
      flex-direction: column;
      gap: 14px;
      flex-shrink: 0;
    }

    .footer-bottom {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-top: 24px;
      border-top: 1px solid rgba(255, 255, 255, 0.06);
      font-size: 0.82rem;
      color: #64748b;
    }

    .footer-brand-side {
      display: flex;
      flex-direction: column;
    }

    .footer-brand-title {
      color: #e2e8f0;
      font-weight: 700;
      font-size: 0.95rem;
    }

    .footer-brand-sub {
      color: #94a3b8;
      font-size: 0.76rem;
    }

    .footer-nav {
      display: flex;
      gap: 20px;
    }

    .footer-nav a {
      color: #94a3b8;
      text-decoration: none;
      transition: color 0.2s;
    }

    .footer-nav a:hover {
      color: #ffffff;
    }

    @media (max-width: 960px) {
      .footer-cta-card {
        flex-direction: column;
        text-align: center;
        padding: 30px;
      }
      .footer-contact-details {
        justify-content: center;
      }
      .footer-cta-actions {
        width: 100%;
      }
      .footer-bottom {
        flex-direction: column;
        gap: 16px;
        text-align: center;
      }
    }
  `]
})
export class FooterComponent {
  @Output() openContact = new EventEmitter<void>();
}
