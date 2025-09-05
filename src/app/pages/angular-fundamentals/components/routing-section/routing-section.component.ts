// src/app/pages/angular-fundamentals/components/routing-section/routing-section.component.ts
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
// import { CodeHighlighterModule } from 'primeng/codehighlighter';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'app-routing-section',
  standalone: true,
    imports: [RouterModule, ButtonModule, DividerModule],
  // imports: [RouterModule, ButtonModule, CodeHighlighterModule, DividerModule],
  templateUrl: './routing-section.component.html',
  styleUrls: ['./routing-section.component.scss']
})
export class RoutingSectionComponent {
  routeConfigExample = `const routes: Routes = [{ path: 'home', component: HomeComponent }];`;
  routerLinkExample = `<a routerLink="/home">Home</a>`;
}
