// src/components/theme-toggle.component.ts

import { Component, inject } from '@angular/core';
import { ThemeService } from '../services/theme.service';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [ButtonModule, CommonModule],
  template: `
    <p-button
      [icon]="themeService.isCurrentlyDark ? 'pi pi-sun' : 'pi pi-moon'"
      [label]="themeService.isCurrentlyDark ? 'Light Mode' : 'Dark Mode'"
      (onClick)="toggleTheme()"
      [outlined]="true"
    >
    </p-button>
  `,
})
export class ThemeToggleComponent {
  public themeService = inject(ThemeService);
  // old bad linting below:
  // constructor(public themeService: ThemeService) {}

  toggleTheme() {
    this.themeService.toggleTheme();
  }
}
