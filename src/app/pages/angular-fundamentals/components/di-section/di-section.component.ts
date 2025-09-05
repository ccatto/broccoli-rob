// src/app/pages/angular-fundamentals/components/di-section/di-section.component.ts
// src/app/pages/angular-fundamentals/components/di-section/di-section.component.ts
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
// import { CodeHighlighterModule } from 'primeng/codehighlighter';

@Component({
  selector: 'app-di-section',
  standalone: true,
  // imports: [ButtonModule, CardModule, DividerModule, CodeHighlighterModule],
    imports: [ButtonModule, CardModule, DividerModule],
  templateUrl: './di-section.component.html',
  styleUrls: ['./di-section.component.scss']
})
export class DISectionComponent {
  serviceData?: string;

  getServiceData() { this.serviceData = 'Data fetched from service!'; }

  injectableServiceExample = `@Injectable({ providedIn: 'root' }) export class MyService {}`;
  injectFunctionExample = `const value = inject(MyService);`;
}
