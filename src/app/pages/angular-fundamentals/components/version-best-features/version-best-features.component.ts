

// src/app/pages/angular-fundamentals/components/signals-section/signals-section.component.ts

// src/app/pages/angular-fundamentals/components/signals-section/signals-section.component.ts
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
// import { CodeHighlighterModule } from 'primeng/codehighlighter';

@Component({
  selector: 'app-version-features',

  // imports: [ButtonModule, DividerModule, CodeHighlighterModule],
  imports: [ButtonModule, DividerModule],
  standalone: true,
  templateUrl: './version-best-features.component.html',
  styleUrls: ['./version-best-features.component.scss'],
})
export class VersionFeaturesComponent {
 }
