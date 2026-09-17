import { Component, EventEmitter, Output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="navbar-wrapper">
      <div class="container nav-container">
        <a href="#" class="nav-brand">
          <img src="profile.jpg" alt="Ayoub Mouchtak" class="brand-avatar-img" />
          <div class="brand-info">
            <span class="brand-name">Ayoub Mouchtak</span>
            <span class="brand-role">Full-Stack Web Architect</span>
          </div>
        </a>

        <!-- Availability Badge -->
        <div class="nav-status-badge">
          <span class="pulse-dot"></span>
          <span>Available for New Projects</span>
        </div>

        <!-- Desktop Navigation -->
        <nav class="nav-links">
          <a href="#projects" class="nav-link">Featured Work</a>
          <a href="#skills" class="nav-link">Tech Stack</a>
          <a href="#services" class="nav-link">Services</a>
          <a href="#about" class="nav-link">Experience</a>
          <a href="#contact" class="nav-link">Contact</a>
        </nav>

        <!-- CTA Buttons -->
        <div class="nav-actions">
          <a href="https://www.linkedin.com/in/ayoub-mouchtak/" target="_blank" rel="noopener" class="btn btn-outline btn-sm linkedin-nav-btn" title="LinkedIn Profile">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.25c-.91 0-1.64.73-1.64 1.64s.73 1.64 1.64 1.64 1.64-.73 1.64-1.64-.73-1.64-1.64-1.64Z"/>
            </svg>
            <span>LinkedIn</span>
          </a>
          <button (click)="openContact.emit()" class="btn btn-emerald btn-sm">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
            Let's Talk
          </button>
          <!-- Mobile Menu Button -->
          <button (click)="toggleMobileMenu()" class="mobile-toggle" aria-label="Toggle navigation">
            <svg *ngIf="!isMobileOpen()" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
            <svg *ngIf="isMobileOpen()" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Dropdown -->
      <div *ngIf="isMobileOpen()" class="mobile-menu animate-fade-in">
        <a (click)="closeMobileMenu()" href="#projects" class="mobile-nav-link">Featured Work</a>
        <a (click)="closeMobileMenu()" href="#skills" class="mobile-nav-link">Tech Stack</a>
        <a (click)="closeMobileMenu()" href="#services" class="mobile-nav-link">Services</a>
        <a (click)="closeMobileMenu()" href="#about" class="mobile-nav-link">Experience</a>
        <a (click)="closeMobileMenu()" href="#contact" class="mobile-nav-link">Contact</a>
        <div class="mobile-actions">
          <a href="https://www.linkedin.com/in/ayoub-mouchtak/" target="_blank" rel="noopener" class="btn btn-outline" style="width: 100%; display: flex; justify-content: center; gap: 8px;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.25c-.91 0-1.64.73-1.64 1.64s.73 1.64 1.64 1.64 1.64-.73 1.64-1.64-.73-1.64-1.64-1.64Z"/>
            </svg>
            LinkedIn Profile
          </a>
          <button (click)="openContact.emit(); closeMobileMenu()" class="btn btn-emerald" style="width: 100%">
            Let's Talk
          </button>
        </div>
      </div>
    </header>
  `,
  styles: [`
    .navbar-wrapper {
      position: sticky;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 1000;
      background: rgba(11, 15, 25, 0.85);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
      padding: 14px 0;
      transition: all 0.3s ease;
    }

    .nav-container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 20px;
    }

    .nav-brand {
      display: flex;
      align-items: center;
      gap: 12px;
      text-decoration: none;
    }

    .brand-avatar-img {
      width: 42px;
      height: 42px;
      border-radius: 12px;
      object-fit: cover;
      object-position: center top;
      border: 2px solid rgba(59, 130, 246, 0.6);
      box-shadow: 0 4px 12px rgba(37, 99, 235, 0.4);
    }

    .brand-info {
      display: flex;
      flex-direction: column;
    }

    .brand-name {
      font-weight: 700;
      font-size: 1rem;
      color: #f9fafb;
      letter-spacing: -0.01em;
    }

    .brand-role {
      font-size: 0.75rem;
      color: #9ca3af;
    }

    .nav-status-badge {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 6px 14px;
      border-radius: 9999px;
      background: rgba(16, 185, 129, 0.1);
      border: 1px solid rgba(16, 185, 129, 0.25);
      font-size: 0.78rem;
      font-weight: 600;
      color: #34d399;
    }

    .nav-links {
      display: flex;
      align-items: center;
      gap: 28px;
    }

    .nav-link {
      color: #9ca3af;
      text-decoration: none;
      font-size: 0.9rem;
      font-weight: 500;
      transition: color 0.2s ease;
    }

    .nav-link:hover {
      color: #ffffff;
    }

    .nav-actions {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .mobile-toggle {
      display: none;
      background: transparent;
      border: none;
      color: #f9fafb;
      cursor: pointer;
      padding: 6px;
    }

    .mobile-menu {
      display: flex;
      flex-direction: column;
      padding: 20px 24px;
      background: #0f172a;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      gap: 14px;
    }

    .mobile-nav-link {
      color: #f3f4f6;
      text-decoration: none;
      font-size: 1.05rem;
      font-weight: 600;
      padding: 8px 0;
    }

    .mobile-actions {
      display: flex;
      flex-direction: column;
      gap: 10px;
      margin-top: 10px;
      padding-top: 14px;
      border-top: 1px solid rgba(255, 255, 255, 0.08);
    }

    @media (max-width: 1024px) {
      .nav-links {
        display: none;
      }
      .nav-status-badge {
        display: none;
      }
      .mobile-toggle {
        display: block;
      }
    }
  `]
})
export class NavbarComponent {
  @Output() openContact = new EventEmitter<void>();
  isMobileOpen = signal(false);

  toggleMobileMenu() {
    this.isMobileOpen.update(v => !v);
  }

  closeMobileMenu() {
    this.isMobileOpen.set(false);
  }
}
