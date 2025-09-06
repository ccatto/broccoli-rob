
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeToggleComponent } from './shared/components/theme-toggle.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ThemeToggleComponent],
  template: `
    <div class="app-container">
      <header class="app-header">
        <h1>{{ title }}</h1>
        <app-theme-toggle></app-theme-toggle>
      </header>
      <main class="app-main">
        <router-outlet />
      </main>
    </div>
  `,
  styles: [`
    .app-container {
      min-height: 100vh;
      background-color: var(--p-surface-ground);
      color: var(--p-text-color);
    }

    .app-header {
      padding: 1rem 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid var(--p-surface-border);
    }

    .app-main {
      padding: 2rem;
    }

    h1 {
      margin: 0;
      color: var(--p-text-color);
    }
  `]
})
export class AppComponent {
  title = 'broccoli-rob-angular-20';
}




// // src/app/app.component.ts


// import { Component } from '@angular/core';
// import { PrimeNgExamplesComponent } from './pages/prime-ng-examples/prime-ng-examples.component';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [PrimeNgExamplesComponent],
//   template: `
//     <app-prime-ng-examples></app-prime-ng-examples>
//   `
// })
// export class AppComponent {}


// import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { PrimeNgExamplesComponent } from './pages/prime-ng-examples/prime-ng-examples.component';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [RouterOutlet, PrimeNgExamplesComponent],
//   template: `
//     <!-- The layout component handles header/footer -->
//     <!-- Individual pages get injected here via routing -->
//     <router-outlet></router-outlet>
//   `,
//   styles: [
//     `
//       :host {
//         display: block;
//         min-height: 100vh;
//       }
//     `,
//   ],
// })
// export class AppComponent {
//   title = 'broccoli-rob-angular-20';
// }
