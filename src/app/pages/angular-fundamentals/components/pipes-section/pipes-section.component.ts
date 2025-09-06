// src/app/pages/angular-fundamentals/components/pipes-section/pipes-section.component.ts
// src/app/pages/angular-fundamentals/components/pipes-section/pipes-section.component.ts
import { Component } from '@angular/core';
import { DividerModule } from 'primeng/divider';
// import { CodeHighlighterModule } from 'primeng/codehighlighter';

@Component({
  selector: 'app-pipes-section',

  // imports: [DividerModule, CodeHighlighterModule],
    imports: [DividerModule],
  templateUrl: './pipes-section.component.html',
  styleUrls: ['./pipes-section.component.scss']
})
export class PipesSectionComponent {
  sampleData = { text: 'Angular Pipes Example', price: 123.45, date: new Date() };
  // customPipeExample = `@Pipe({ name: 'highlight' }) export class HighlightPipe implements PipeTransform { transform(value: string, term: string) { return value.replace(term, '<mark>' + term + '</mark>'); } }`;
}
