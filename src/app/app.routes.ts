// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/home/home.component').then((m) => m.HomeComponent),
      },
      {
        path: 'angular-fundamentals',
                // loadComponent: () => import('./pages/angular-fundamentals/angular-fundamentals').then((m) => m.AngularFundamentalsComponent),

        loadComponent: () => import('./pages/angular-fundamentals/angular-fundamentals.component').then((m) => m.AngularFundamentalsComponent),
      },
      {
        path: 'hello-world',
        loadComponent: () =>
          import('./pages/hello-world/hello-world.component').then((m) => m.HelloWorldComponent),
      },
      {
        path: 'ng-commands',
        loadComponent: () =>
          import('./pages/ng-commands/ng-commands.component').then((m) => m.NgCommandsComponent),
      },
      {
        path: 'page2',
        loadComponent: () => import('./pages/page2/page2.component').then((m) => m.Page2),
      },
      {
        path: 'page3',
        loadComponent: () => import('./pages/page3/page3.component').then((m) => m.Page3),
      },
            {
        path: 'prime-ng-examples',
        loadComponent: () =>
          import('./pages/prime-ng-examples/prime-ng-examples.component').then((m) => m.PrimeNgExamplesComponent),
      },
      {
        path: 'tutorial',
        loadComponent: () =>
          import('./pages/tutorial/tutorial.component').then((m) => m.TutorialComponent),
      },
      {
        path: '**',
        redirectTo: '',
      },
    ],
  },
];

// import { Routes } from '@angular/router';

// export const routes: Routes = [];
