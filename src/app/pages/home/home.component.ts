import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardModule, ButtonModule, RouterModule],
  template: `
    <div class="home-container">
      <div class="hero-section">
        <h1>Welcome to Broccoli Rob</h1>
        <p class="hero-subtitle">
          Built with Angular {{ angularVersion }} and PrimeNG {{ primeNgVersion }}
        </p>

        <div class="hero-actions">
          <p-button label="Go to Page 2 yes 88" routerLink="/page2" [outlined]="true"> </p-button>
          <p-button label="Go to Page 3" routerLink="/page3"> </p-button>
        </div>
      </div>

      <div class="cards-section">
        <p-card
          header="Getting Started"
          subheader="Learn the basics"
          [style]="{ width: '100%', marginBottom: '2rem' }"
        >
          <p>
            This is your home page. You can navigate between pages using the header navigation or
            the buttons above.
          </p>
          <ng-template pTemplate="footer">
            <p-button label="View Documentation" icon="pi pi-external-link" [text]="true">
            </p-button>
          </ng-template>
        </p-card>

        <div class="feature-cards">
          <p-card header="Routing" class="feature-card">
            <p>Angular routing allows navigation between different views/pages.</p>
          </p-card>

          <p-card header="Layouts" class="feature-card">
            <p>Consistent header and footer across all pages using layout components.</p>
          </p-card>

          <p-card header="Theming" class="feature-card">
            <p>Dark/light theme toggle using PrimeNG's new theming system.</p>
          </p-card>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .home-container {
        max-width: 100%;
      }

      .hero-section {
        text-align: center;
        margin-bottom: 3rem;
        padding: 2rem 0;
      }

      .hero-section h1 {
        font-size: 3rem;
        margin-bottom: 1rem;
        color: var(--p-text-color);
        font-weight: 700;
      }

      .hero-subtitle {
        font-size: 1.25rem;
        color: var(--p-text-muted-color);
        margin-bottom: 2rem;
      }

      .hero-actions {
        display: flex;
        gap: 1rem;
        justify-content: center;
        flex-wrap: wrap;
      }

      .cards-section {
        margin-top: 2rem;
      }

      .feature-cards {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 1.5rem;
        margin-top: 2rem;
      }

      .feature-card {
        height: 100%;
      }

      @media (max-width: 768px) {
        .hero-section h1 {
          font-size: 2rem;
        }

        .hero-actions {
          flex-direction: column;
          align-items: center;
        }

        .feature-cards {
          grid-template-columns: 1fr;
        }
      }
    `,
  ],
})
export class HomeComponent {
  angularVersion = '20';
  primeNgVersion = '20';
}
