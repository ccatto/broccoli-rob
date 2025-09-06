// src/app/pages/angular-fundamentals/components/ssr-section/ssr-section.component.ts

// src/app/pages/angular-fundamentals/components/ssr-section/ssr-section.component.ts
import { Component } from '@angular/core';
// import { CardModule } from 'primeng/card';
// import { DividerModule } from 'primeng/divider';
// import { CodeHighlighterModule } from 'primeng/codehighlighter';

@Component({
  selector: 'app-ssr-section',
  standalone: true, // ← Add this!
  // imports: [CardModule, DividerModule, CodeHighlighterModule],
  // imports: [CardModule, DividerModule],
  templateUrl: './ssr-section.component.html',
  styleUrls: ['./ssr-section.component.scss'],
})
export class SSRSectionComponent {
  ssrConfigExample = `import { provideServerRendering } from '@angular/platform-server';`;
}
