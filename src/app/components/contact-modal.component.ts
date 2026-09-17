import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div *ngIf="isOpen" class="modal-backdrop" (click)="onBackdropClick($event)">
      <div class="modal-dialog glass-card animate-fade-in">
        <!-- Modal Top -->
        <div class="modal-top-bar">
          <div class="modal-title-row">
            <span class="pulse-dot"></span>
            <span class="modal-heading">Start a Project / Request a Quote</span>
          </div>
          <button (click)="close.emit()" class="close-btn" aria-label="Close modal">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <!-- Body -->
        <div class="modal-body">
          <!-- Success State -->
          <div *ngIf="submitted()" class="success-state">
            <div class="success-icon">✓</div>
            <h3 class="success-title">Inquiry Submitted Successfully!</h3>
            <p class="success-sub">
              Thank you for reaching out. Your project requirements have been received, and I will review them thoroughly and get back to you within 24 hours.
            </p>
            
            <div class="success-actions">
              <a href="https://www.linkedin.com/in/ayoub-mouchtak/" target="_blank" rel="noopener" class="btn btn-outline btn-sm">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.25c-.91 0-1.64.73-1.64 1.64s.73 1.64 1.64 1.64 1.64-.73 1.64-1.64-.73-1.64-1.64-1.64Z"/>
                </svg>
                Connect on LinkedIn
              </a>
              <button (click)="close.emit()" class="btn btn-primary btn-sm">
                Done
              </button>
            </div>

            <button (click)="resetForm()" class="btn btn-outline" style="margin-top: 20px; font-size: 0.82rem;">
              Send Another Inquiry
            </button>
          </div>

          <!-- Form State -->
          <form *ngIf="!submitted()" (ngSubmit)="onSubmit()" class="contact-form">
            <p class="form-intro">
              Have a web application, digital platform, or backend architecture to build? Share your project details below to discuss timeline, architecture, and estimated costs.
            </p>

            <div class="form-row">
              <div class="form-group">
                <label for="name">Your Name / Company</label>
                <input 
                  id="name" 
                  type="text" 
                  [(ngModel)]="formData.name" 
                  name="name" 
                  required 
                  placeholder="e.g. Sarah Jenkins" 
                  class="form-input" 
                />
              </div>

              <div class="form-group">
                <label for="email">Work Email</label>
                <input 
                  id="email" 
                  type="email" 
                  [(ngModel)]="formData.email" 
                  name="email" 
                  required 
                  placeholder="sarah@company.com" 
                  class="form-input" 
                />
              </div>
            </div>

            <div class="form-group">
              <label for="phone">Phone / WhatsApp (Optional)</label>
              <input 
                id="phone" 
                type="tel" 
                [(ngModel)]="formData.phone" 
                name="phone" 
                placeholder="+1 (555) 000-0000 or +212 6..." 
                class="form-input" 
              />
            </div>

            <div class="form-group">
              <label for="details">Project Scope & Objectives</label>
              <textarea 
                id="details" 
                [(ngModel)]="formData.details" 
                name="details" 
                rows="4" 
                required
                placeholder="Briefly describe what you're building, key features, target deadline, or any technical requirements..." 
                class="form-input">
              </textarea>
            </div>

            <div class="form-actions">
              <button type="submit" [disabled]="isSending()" class="btn btn-primary" style="width: 100%;">
                <span *ngIf="!isSending()">Submit Project Inquiry</span>
                <span *ngIf="isSending()" class="sending-spinner">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="spin">
                    <circle cx="12" cy="12" r="10" stroke-opacity="0.25"></circle>
                    <path d="M12 2a10 10 0 0 1 10 10"></path>
                  </svg>
                  Submitting Inquiry...
                </span>
              </button>
            </div>

            <!-- Alternative direct links -->
            <div class="modal-connect-bar">
              <span class="connect-label">Professional Profile:</span>
              <a href="https://www.linkedin.com/in/ayoub-mouchtak/" target="_blank" rel="noopener" class="linkedin-badge-btn">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.25c-.91 0-1.64.73-1.64 1.64s.73 1.64 1.64 1.64 1.64-.73 1.64-1.64-.73-1.64-1.64-1.64Z"/>
                </svg>
                linkedin.com/in/ayoub-mouchtak/
              </a>
            </div>
          </form>
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
      z-index: 2100;
      padding: 20px;
    }

    .modal-dialog {
      width: 100%;
      max-width: 580px;
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
      padding: 18px 24px;
      background: #0b0f19;
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    }

    .modal-title-row {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .modal-heading {
      font-weight: 700;
      font-size: 1.05rem;
      color: #ffffff;
    }

    .close-btn {
      background: rgba(255, 255, 255, 0.06);
      border: none;
      color: #9ca3af;
      border-radius: 50%;
      width: 34px;
      height: 34px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.2s;
    }

    .close-btn:hover {
      background: rgba(255, 255, 255, 0.15);
      color: #ffffff;
    }

    .modal-body {
      padding: 28px;
    }

    .form-intro {
      font-size: 0.92rem;
      color: #94a3b8;
      margin-bottom: 20px;
      line-height: 1.55;
    }

    .contact-form {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .form-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 14px;
    }

    .form-group {
      display: flex;
      flex-direction: column;
      gap: 6px;
    }

    .form-group label {
      font-size: 0.82rem;
      font-weight: 600;
      color: #e2e8f0;
    }

    .form-input {
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.12);
      border-radius: 10px;
      padding: 10px 14px;
      color: #ffffff;
      font-family: inherit;
      font-size: 0.9rem;
      outline: none;
      transition: border-color 0.2s;
    }

    .form-input:focus {
      border-color: #3b82f6;
      background: rgba(255, 255, 255, 0.08);
    }

    .form-actions {
      margin-top: 4px;
    }

    .sending-spinner {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
    }

    .spin {
      animation: spin 1s linear infinite;
    }

    @keyframes spin {
      100% { transform: rotate(360deg); }
    }

    .modal-connect-bar {
      margin-top: 14px;
      padding-top: 14px;
      border-top: 1px solid rgba(255, 255, 255, 0.08);
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
      font-size: 0.82rem;
    }

    .connect-label {
      color: #94a3b8;
    }

    .linkedin-badge-btn {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      background: rgba(14, 165, 233, 0.1);
      border: 1px solid rgba(14, 165, 233, 0.25);
      color: #38bdf8;
      padding: 5px 12px;
      border-radius: 9999px;
      text-decoration: none;
      font-weight: 600;
      font-size: 0.78rem;
      transition: all 0.2s;
    }

    .linkedin-badge-btn:hover {
      background: rgba(14, 165, 233, 0.2);
      color: #7dd3fc;
    }

    .success-state {
      text-align: center;
      padding: 24px 10px;
    }

    .success-icon {
      width: 58px;
      height: 58px;
      border-radius: 50%;
      background: rgba(16, 185, 129, 0.15);
      border: 2px solid #10b981;
      color: #34d399;
      font-size: 1.9rem;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 16px auto;
    }

    .success-title {
      font-size: 1.45rem;
      font-weight: 700;
      color: #ffffff;
      margin-bottom: 8px;
    }

    .success-sub {
      font-size: 0.95rem;
      color: #9ca3af;
      margin-bottom: 24px;
      line-height: 1.6;
    }

    .success-actions {
      display: flex;
      justify-content: center;
      gap: 12px;
    }

    @media (max-width: 540px) {
      .form-row {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class ContactModalComponent {
  @Input() isOpen = false;
  @Output() close = new EventEmitter<void>();

  submitted = signal(false);
  isSending = signal(false);

  formData = {
    name: '',
    email: '',
    phone: '',
    details: ''
  };

  async onSubmit() {
    this.isSending.set(true);

    try {
      // Dispatches email directly to ayoub.mouchtak@gmail.com in the background
      await fetch('https://formsubmit.co/ajax/ayoub.mouchtak@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: this.formData.name,
          email: this.formData.email,
          phone: this.formData.phone || 'Not provided',
          projectDescription: this.formData.details,
          _subject: `New Project Inquiry from ${this.formData.name}`
        })
      });

      this.isSending.set(false);
      this.submitted.set(true);
    } catch (err) {
      this.isSending.set(false);
      this.submitted.set(true);
    }
  }

  resetForm() {
    this.formData = {
      name: '',
      email: '',
      phone: '',
      details: ''
    };
    this.submitted.set(false);
    this.isSending.set(false);
  }

  onBackdropClick(event: MouseEvent) {
    if ((event.target as HTMLElement).classList.contains('modal-backdrop')) {
      this.close.emit();
    }
  }
}
