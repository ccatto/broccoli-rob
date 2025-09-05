import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';
// import { MenuItem } from 'primeng/api';
// import { ThemeToggleComponent } from '../../../shared/components/theme-toggle/theme-toggle.component';
import { ThemeToggleComponent } from '../../../shared/components/theme-toggle.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, MenubarModule, ThemeToggleComponent],
  template: `
    <div class="header-container">
      <div class="logo">
        <h2 routerLink="/">Broccoli Rob</h2>
      </div>

      <nav class="navigation">
        <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }"
          >Home</a
        >
        <a routerLink="/page2" routerLinkActive="active">Page 2 template</a>
        <a routerLink="/page3" routerLinkActive="active">Page 3</a>
        <a routerLink="/angular-fundamentals" routerLinkActive="active">Angular FUNdamentals</a>
        <a routerLink="/tutorial" routerLinkActive="active">Tutorial</a>
        <a routerLink="/hello-world" routerLinkActive="active">Hello World</a>
        <a routerLink="/ng-commands" routerLinkActive="active">ng Commands</a>
        <a routerLink="/prime-ng-examples" routerLinkActive="active">Prime ng Examples</a>
      </nav>

      <div class="header-actions">
        <app-theme-toggle></app-theme-toggle>
      </div>
    </div>
  `,
  styles: [
    `
      .header-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 2rem;
        background-color: var(--p-surface-card);
        border-bottom: 1px solid var(--p-surface-border);
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      }

      .logo h2 {
        margin: 0;
        color: var(--p-primary-color);
        cursor: pointer;
        font-weight: 600;
      }

      .navigation {
        display: flex;
        gap: 2rem;
      }

      .navigation a {
        text-decoration: none;
        color: var(--p-text-color);
        font-weight: 500;
        padding: 0.5rem 1rem;
        border-radius: 6px;
        transition: all 0.2s ease;
      }

      .navigation a:hover {
        background-color: var(--p-surface-hover);
      }

      .navigation a.active {
        background-color: var(--p-primary-color);
        color: var(--p-primary-contrast-color);
      }

      .header-actions {
        display: flex;
        align-items: center;
      }

      @media (max-width: 768px) {
        .header-container {
          flex-direction: column;
          gap: 1rem;
        }

        .navigation {
          gap: 1rem;
        }
      }
    `,
  ],
})
export class HeaderComponent {}
