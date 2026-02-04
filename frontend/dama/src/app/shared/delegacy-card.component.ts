import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DelegacyData } from '../shared/delegacy.service';

@Component({
  selector: 'app-delegacy-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="card">
      <h1 class="title">{{ delegacy.title }}</h1>

      <div class="info-row">
        <a
          class="label"
          [href]="delegacy.addressUrl"
          target="_blank"
          rel="noopener noreferrer"
        >
          {{ delegacy.address }}
        </a>
      </div>
      <div class="info-row">
        <span class="label">Telefone: {{ delegacy.phone }}</span>
      </div>
    </div>
  `,
  styles: [
    `
      .card {
        border: 1px solid #ddd;
        border-radius: 8px;
        padding: 1rem;
        background-color: #f9f9f9;
      }

      .title {
        margin: 0 0 1rem 0;
        font-size: 1.1rem;
        color: #333;
      }

      .info-row {
        margin-bottom: 0.5rem;
      }

      .label {
        color: #0066cc;
        text-decoration: none;
      }

      .label:hover {
        text-decoration: underline;
      }
    `,
  ],
})
export class DelegacyCardComponent {
  @Input() delegacy!: DelegacyData;
}
