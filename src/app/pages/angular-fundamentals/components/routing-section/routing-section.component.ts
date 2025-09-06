// src/app/pages/angular-fundamentals/components/routing-section/routing-section.component.ts
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
// import { CodeHighlighterModule
// import { CodeHighlighterModule } from 'primeng/codehighlighter';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'app-routing-section',

  imports: [RouterModule, ButtonModule, DividerModule],
  // imports: [RouterModule, ButtonModule, CodeHighlighterModule, DividerModule],
  templateUrl: './routing-section.component.html',
  styleUrls: ['./routing-section.component.scss'],
})
export class RoutingSectionComponent {
  // routeConfigExample = `const routes: Routes = [{ path: 'home', component: HomeComponent }];`;
  routerLinkExample = `<a routerLink="/home">Home</a>`;

  // Code Examples for Display
  routeConfigExample = `// app.routes.ts
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', loadComponent: () => import('./contact/contact.component').then(m => m.ContactComponent) }
];`;

}
