// modern-showcase.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modern-showcase',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="showcase-container">
      <h1>Angular Evolution Showcase</h1>
      <p class="subtitle">A comprehensive look at Angular versions 16-20</p>

      <section class="version-section">
        <h2>Angular 20 (2025) - Latest Release</h2>
        <ul>
          <li>Enhanced Control Flow with &#64;if, &#64;for, &#64;switch syntax</li>
          <li>Improved Signals performance and API</li>
          <li>Better Server-Side Rendering (SSR) and hydration</li>
          <li>Full TypeScript 5.4+ support</li>
          <li>New standalone bootstrapping API</li>
          <li>Enhanced view transitions</li>
          <li>Improved tree-shaking and bundle sizes</li>
        </ul>
      </section>

      <section class="version-section">
        <h2>Angular 19 (2024) - Major Stability Release</h2>
        <ul>
          <li>Stable Signals API (graduated from experimental)</li>
          <li>Material Design 3 (Material 3) full integration</li>
          <li>New input() and output() functions for components</li>
          <li>Enhanced ViewChild with signals</li>
          <li>Improved standalone component support</li>
          <li>Better performance with OnPush change detection</li>
          <li>Enhanced Angular DevTools</li>
        </ul>
      </section>

      <section class="version-section">
        <h2>Angular 18 (2024) - Control Flow Revolution</h2>
        <ul>
          <li>Built-in Control Flow (&#64;if, &#64;for, &#64;switch) - experimental</li>
          <li>Material 3 design system integration</li>
          <li>New Angular.dev documentation site</li>
          <li>Improved hydration for SSR applications</li>
          <li>Enhanced standalone components ecosystem</li>
          <li>Better support for micro-frontends</li>
          <li>Improved Angular CLI with Vite support</li>
        </ul>
      </section>

      <section class="version-section">
        <h2>Angular 17 (2023) - Renaissance Release</h2>
        <ul>
          <li>New Angular brand and logo redesign</li>
          <li>New application builder with Vite and esbuild</li>
          <li>Server-Side Rendering (SSR) improvements</li>
          <li>New lifecycle hooks for SSR</li>
          <li>View Transitions API support</li>
          <li>New Angular.dev website</li>
          <li>Improved developer experience</li>
        </ul>
      </section>

      <section class="version-section">
        <h2>Angular 16 (2023) - Signals Introduction</h2>
        <ul>
          <li>Signals introduced as experimental feature</li>
          <li>Standalone ng-new collection</li>
          <li>Required inputs for components</li>
          <li>Router data as input binding</li>
          <li>Non-destructive hydration</li>
          <li>Self-closing tags support</li>
          <li>New control flow RFC</li>
        </ul>
      </section>

      <section class="version-section">
        <h2>Key Angular Concepts</h2>
        <h3>Components</h3>
        <ul>
          <li>Standalone components (Angular 14+)</li>
          <li>Component lifecycle hooks</li>
          <li>Change detection strategies</li>
          <li>ViewChild and ContentChild</li>
        </ul>

        <h3>Signals (Angular 16+)</h3>
        <ul>
          <li>Reactive primitives for change detection</li>
          <li>Better performance than traditional observables</li>
          <li>Computed signals for derived state</li>
          <li>Effects for side effects</li>
        </ul>

        <h3>Dependency Injection</h3>
        <ul>
          <li>Hierarchical injector system</li>
          <li>Provider tokens and injection tokens</li>
          <li>Injectable services</li>
          <li>Tree-shakable providers</li>
        </ul>

        <h3>Routing</h3>
        <ul>
          <li>Router outlet and navigation</li>
          <li>Route guards and resolvers</li>
          <li>Lazy loading modules</li>
          <li>Auxiliary routes</li>
        </ul>

        <h3>Forms</h3>
        <ul>
          <li>Template-driven forms</li>
          <li>Reactive forms (FormControl, FormGroup)</li>
          <li>Form validation and custom validators</li>
          <li>Dynamic forms</li>
        </ul>

        <h3>HTTP Client</h3>
        <ul>
          <li>RESTful API communication</li>
          <li>HTTP interceptors</li>
          <li>Error handling</li>
          <li>Request and response transformation</li>
        </ul>
      </section>

      <section class="version-section">
        <h2>Modern Angular Best Practices</h2>
        <ul>
          <li>Use standalone components for better tree-shaking</li>
          <li>Adopt Signals for reactive state management</li>
          <li>Implement OnPush change detection strategy</li>
          <li>Use the new control flow syntax (&#64;if, &#64;for, &#64;switch)</li>
          <li>Leverage lazy loading for performance</li>
          <li>Follow the Angular Style Guide</li>
          <li>Use Angular CLI for consistent project structure</li>
          <li>Implement proper error handling and logging</li>
          <li>Write unit and integration tests</li>
          <li>Use TypeScript strict mode</li>
        </ul>
      </section>

      <section class="version-section">
        <h2>Performance Optimizations</h2>
        <ul>
          <li>OnPush change detection strategy</li>
          <li>TrackBy functions in *ngFor loops</li>
          <li>Lazy loading of feature modules</li>
          <li>Tree-shaking with standalone components</li>
          <li>Image optimization with NgOptimizedImage</li>
          <li>Bundle analysis and code splitting</li>
          <li>Service workers for PWA capabilities</li>
          <li>Server-side rendering for better SEO</li>
        </ul>
      </section>

      <footer class="footer">
        <p>Angular Evolution: From Framework to Platform</p>
        <p>This showcase demonstrates the continuous innovation in the Angular ecosystem</p>
      </footer>
    </div>
  `,
  styles: [`
    .showcase-container {
      max-width: 900px;
      margin: 0 auto;
      padding: 30px;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      line-height: 1.6;
      color: #333;
    }

    h1 {
      color: #dd0031;
      text-align: center;
      font-size: 2.5em;
      margin-bottom: 10px;
      border-bottom: 3px solid #dd0031;
      padding-bottom: 15px;
    }

    .subtitle {
      text-align: center;
      font-size: 1.2em;
      color: #666;
      margin-bottom: 40px;
      font-style: italic;
    }

    .version-section {
      margin-bottom: 40px;
      padding: 25px;
      background: #f8f9fa;
      border-radius: 8px;
      border-left: 5px solid #dd0031;
    }

    h2 {
      color: #dd0031;
      font-size: 1.8em;
      margin-bottom: 20px;
      margin-top: 0;
    }

    h3 {
      color: #666;
      font-size: 1.3em;
      margin-bottom: 15px;
      margin-top: 25px;
      border-bottom: 1px solid #ddd;
      padding-bottom: 5px;
    }

    ul {
      margin: 0 0 20px 0;
      padding-left: 25px;
    }

    li {
      margin-bottom: 8px;
      font-size: 1.05em;
    }

    .footer {
      text-align: center;
      margin-top: 50px;
      padding: 30px;
      background: #333;
      color: white;
      border-radius: 8px;
    }

    .footer p {
      margin: 8px 0;
      font-size: 1.1em;
    }

    @media (max-width: 768px) {
      .showcase-container {
        padding: 20px;
      }
      
      h1 {
        font-size: 2em;
      }
      
      h2 {
        font-size: 1.5em;
      }
    }
  `]
})
export class ModernShowcaseComponent {
  // Just a simple component with text content
}