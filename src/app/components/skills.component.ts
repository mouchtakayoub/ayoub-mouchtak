import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SKILL_CATEGORIES } from '../data/portfolio-data';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="skills" class="section">
      <div class="container">
        <div class="section-header">
          <span class="badge badge-blue">Production-Ready Competencies</span>
          <h2 class="section-title">Technical Skills & Architecture Stack</h2>
          <p class="section-subtitle">
            Battle-tested technologies I use daily to architect resilient, secure, and lightning-fast web applications.
          </p>
        </div>

        <div class="skills-grid">
          <div *ngFor="let cat of categories" class="skill-category-card glass-card">
            <div class="category-header">
              <h3 class="category-title">{{ cat.title }}</h3>
              <p class="category-desc">{{ cat.description }}</p>
            </div>

            <div class="skill-list">
              <div *ngFor="let skill of cat.skills" class="skill-item">
                <div class="skill-info">
                  <div class="skill-name-row">
                    <span class="skill-name">{{ skill.name }}</span>
                    <span *ngIf="skill.badge" class="badge badge-green" style="font-size: 0.65rem; padding: 2px 8px;">
                      {{ skill.badge }}
                    </span>
                  </div>
                  <span class="skill-exp">{{ skill.experience }}</span>
                </div>
                <div class="skill-bar-track">
                  <div class="skill-bar-fill" [style.width]="skill.level === 'Expert' ? '92%' : '82%'"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .skills-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 24px;
    }

    .skill-category-card {
      padding: 30px;
      border-radius: 20px;
      display: flex;
      flex-direction: column;
    }

    .category-header {
      margin-bottom: 24px;
      padding-bottom: 16px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    }

    .category-title {
      font-size: 1.3rem;
      font-weight: 700;
      color: #ffffff;
      margin-bottom: 6px;
    }

    .category-desc {
      font-size: 0.85rem;
      color: #9ca3af;
      line-height: 1.5;
    }

    .skill-list {
      display: flex;
      flex-direction: column;
      gap: 16px;
      flex: 1;
    }

    .skill-item {
      display: flex;
      flex-direction: column;
      gap: 6px;
    }

    .skill-info {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .skill-name-row {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .skill-name {
      font-size: 0.92rem;
      font-weight: 600;
      color: #f3f4f6;
    }

    .skill-exp {
      font-size: 0.78rem;
      color: #9ca3af;
      font-family: monospace;
    }

    .skill-bar-track {
      width: 100%;
      height: 6px;
      background: rgba(255, 255, 255, 0.06);
      border-radius: 9999px;
      overflow: hidden;
    }

    .skill-bar-fill {
      height: 100%;
      border-radius: 9999px;
      background: linear-gradient(90deg, #3b82f6, #06b6d4);
      transition: width 1s ease-out;
    }

    @media (max-width: 960px) {
      .skills-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class SkillsComponent {
  categories = SKILL_CATEGORIES;
}
