// src/app/pages/angular-fundamentals/components/signals-section/signals-section.component.ts

// src/app/pages/angular-fundamentals/components/signals-section/signals-section.component.ts
import { Component, signal, computed } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
// import { CodeHighlighterModule } from 'primeng/codehighlighter';

@Component({
  selector: 'app-signals-section',

  // imports: [ButtonModule, DividerModule, CodeHighlighterModule],
  imports: [ButtonModule, DividerModule],
  templateUrl: './signals-section.component.html',
  styleUrls: ['./signals-section.component.scss'],
})
export class SignalsSectionComponent {
  counter = signal(0);
  doubledCounter = computed(() => this.counter() * 2);

  increment() {
    this.counter.set(this.counter() + 1);
  }
  decrement() {
    this.counter.set(this.counter() - 1);
  }
  reset() {
    this.counter.set(0);
  }

  signalsExample = `const count = signal(0); const double = computed(() => count() * 2);`;
}
