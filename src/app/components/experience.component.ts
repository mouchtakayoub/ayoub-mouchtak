import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="about" class="section">
      <div class="container">
        <div class="section-header">
          <span class="badge badge-gold">Track Record</span>
          <h2 class="section-title">Professional Experience & Background</h2>
          <p class="section-subtitle">
            Consistent history of delivering high-stakes software solutions for European and North African clients.
          </p>
        </div>

        <div class="timeline-wrapper">
          <!-- Item 1: E-Ambition -->
          <div class="timeline-card glass-card">
            <div class="timeline-meta">
              <span class="timeline-period">Jan 2025 – Present</span>
              <span class="badge badge-green">Current Contract</span>
            </div>
            <h3 class="timeline-role">Full-Stack Freelance Engineer</h3>
            <div class="timeline-client">Client: E-Ambition (France)</div>
            <p class="timeline-desc">
              Building secure payment infrastructure and resilient backend APIs for high-volume transactions.
            </p>
            <ul class="timeline-achievements">
              <li>Integrated <strong>PayPal and Stripe</strong> with automatic webhook handling for seamless online payments.</li>
              <li>Engineered zero-trust user authentication and RBAC mechanisms for secure customer access.</li>
              <li>Optimized backend microservices in <strong>Spring Boot</strong> and modernized user interfaces using <strong>Angular 18</strong>.</li>
            </ul>
          </div>

          <!-- Item 2: Mpacket -->
          <div class="timeline-card glass-card">
            <div class="timeline-meta">
              <span class="timeline-period">Apr 2024 – Oct 2024</span>
              <span class="badge badge-blue">Freelance</span>
            </div>
            <h3 class="timeline-role">Full-Stack Developer</h3>
            <div class="timeline-client">Client: Mpacket.ma (Morocco)</div>
            <p class="timeline-desc">
              Architected an end-to-end package delivery and logistics management ERP system.
            </p>
            <ul class="timeline-achievements">
              <li>Built real-time parcel dispatch workflows using <strong>Angular 17</strong>, <strong>PrimeNG</strong>, and <strong>Spring Boot REST</strong>.</li>
              <li>Achieved a <strong>30% increase in delivery dispatch efficiency</strong> while fulfilling all client milestones on schedule.</li>
              <li>Engineered modular ERP components with optimized MySQL queries for high concurrent access.</li>
            </ul>
          </div>

          <!-- Item 3: AXA / FineRe -->
          <div class="timeline-card glass-card">
            <div class="timeline-meta">
              <span class="timeline-period">Aug 2023 – Aug 2024</span>
              <span class="badge badge-gold">Enterprise</span>
            </div>
            <h3 class="timeline-role">Full-Stack Software Engineer</h3>
            <div class="timeline-client">Enterprise: FineRe (AXA Assurance)</div>
            <p class="timeline-desc">
              Developed and maintained an enterprise-grade reinsurance solution based on a distributed microservices architecture.
            </p>
            <ul class="timeline-achievements">
              <li>Designed robust web modules using <strong>Microsoft .NET Framework 4.8</strong> and <strong>Angular 16</strong>.</li>
              <li>Authored rigorous unit tests ensuring strict financial compliance and code quality.</li>
              <li>Collaborated actively in an international 7+ member Agile Scrum team with Jira and Azure DevOps.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .timeline-wrapper {
      display: flex;
      flex-direction: column;
      gap: 24px;
      max-width: 900px;
      margin: 0 auto;
    }

    .timeline-card {
      padding: 30px 34px;
      border-radius: 20px;
      position: relative;
    }

    .timeline-meta {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 8px;
    }

    .timeline-period {
      font-size: 0.85rem;
      color: #94a3b8;
      font-family: monospace;
      font-weight: 600;
    }

    .timeline-role {
      font-size: 1.35rem;
      color: #ffffff;
      font-weight: 700;
      margin-bottom: 2px;
    }

    .timeline-client {
      font-size: 0.95rem;
      color: #38bdf8;
      font-weight: 600;
      margin-bottom: 14px;
    }

    .timeline-desc {
      font-size: 0.95rem;
      color: #cbd5e1;
      margin-bottom: 14px;
      line-height: 1.6;
    }

    .timeline-achievements {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .timeline-achievements li {
      position: relative;
      padding-left: 20px;
      font-size: 0.88rem;
      color: #9ca3af;
      line-height: 1.6;
    }

    .timeline-achievements li strong {
      color: #e2e8f0;
    }

    .timeline-achievements li::before {
      content: '▹';
      position: absolute;
      left: 0;
      top: 0;
      color: #38bdf8;
      font-size: 1rem;
    }
  `]
})
export class ExperienceComponent {}
