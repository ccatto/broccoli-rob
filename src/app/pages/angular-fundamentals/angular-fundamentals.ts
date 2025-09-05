// src/app/pages/angular-fundamentals/angular-fundamentals.ts
// import { Component, OnInit, signal, computed, inject } from '@angular/core';
import { Component, OnInit, signal, computed, inject, Input, Output, EventEmitter } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { RouterModule } from '@angular/router';


// PrimeNG Imports
import { CardModule } from 'primeng/card';
// import { TabViewModule } from 'primeng/tabview';
import { TabsModule } from 'primeng/tabs';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { MessageModule } from 'primeng/message';
import { ChipModule } from 'primeng/chip';
import { DividerModule } from 'primeng/divider';
import { SkeletonModule } from 'primeng/skeleton';
import { BadgeModule } from 'primeng/badge';
import { ComponentsSectionComponent } from './components/components-section/components-section.component';
// Custom Services and Pipes
// import { DataService } from '../services/data.service';
import { DataService } from '../../services/data.service';
// import { HighlightPipe } from '../pipes/highlight.pipe';
import { HighlightPipe } from '../../pipes/highlight.pipe';
import { SSRSectionComponent } from './components/ssr-section/ssr-section.component';
import { SignalsSectionComponent } from './components/signals-section/signals-section.component';
import { RoutingSectionComponent } from './components/routing-section/routing-section.component';

interface AngularSkill {
  id: number;
  name: string;
}

interface FormData {
  name: string;
  email: string;
}

interface FormSubmissionResult {
  severity: 'success' | 'error' | 'warn' | 'info';
  text: string;
}

@Component({
  selector: 'app-angular-fundamentals',
  standalone: true,
  imports: [
    ComponentsSectionComponent,
    SSRSectionComponent,
    SignalsSectionComponent,
    RoutingSectionComponent,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    // PrimeNG Modules
    CardModule,
    // TabViewModule,
    TabsModule,
    ButtonModule,
    InputTextModule,
    ToggleButtonModule,
    MessageModule,
    ChipModule,
    DividerModule,
    SkeletonModule,
    BadgeModule,
    
    // Custom Pipes
    // HighlightPipe
  ],
  templateUrl: './angular-fundamentals.html',
  styleUrls: ['./angular-fundamentals.scss']
})
export class AngularFundamentalsComponent implements OnInit {
  
  // Traditional DI approach
  private fb = inject(FormBuilder);
  private dataService = inject(DataService);

  // Component Properties
  activeTabIndex = 0;
  
  // Control Flow Examples
  showWelcome = true;
  angularSkills: AngularSkill[] = [
    { id: 1, name: 'Components' },
    { id: 2, name: 'Services' },
    { id: 3, name: 'Routing' },
    { id: 4, name: 'Forms' },
    { id: 5, name: 'HTTP' },
    { id: 6, name: 'Pipes' }
  ];

  // Property Binding Example
  isEditable = true;

  // Event Handling Examples
  lastEvent = '';
  messageSeverity: 'success' | 'info' | 'warn' | 'error' = 'info';
  buttonStyle = {};

  // Input/Output Example
  childMessage = 'Hello from parent!';
  receivedMessage = '';

  // Deferrable Views
  triggerDefer = false;

  // Forms
  templateFormData: FormData = { name: '', email: '' };
  reactiveForm: FormGroup;
  formSubmissionResult: FormSubmissionResult | null = null;

  // Service Data
  serviceData = '';

  // Pipes Sample Data
  sampleData = {
    text: 'angular is awesome',
    price: 1299.99,
    date: new Date()
  };

  // Signals Examples
  counter = signal(0);
  doubledCounter = computed(() => this.counter() * 2);

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

  routerLinkExample = `<!-- Navigation with RouterLink -->
<nav>
  <a routerLink="/home" routerLinkActive="active">Home</a>
  <a routerLink="/about" routerLinkActive="active">About</a>
  <a routerLink="/contact" routerLinkActive="active">Contact</a>
</nav>`;

  injectableServiceExample = `// data.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'  // Available application-wide
})
export class DataService {
  
  private data = 'Hello from Injectable Service!';
  
  getData(): string {
    return this.data;
  }
  
  setData(newData: string): void {
    this.data = newData;
  }
}`;

  injectFunctionExample = `// Using inject() function (Angular 14+)
import { Component, inject } from '@angular/core';
import { DataService } from './data.service';

@Component({...})
export class MyComponent {
  // Function-based DI
  private dataService = inject(DataService);
  
  // vs. Constructor-based DI
  // constructor(private dataService: DataService) {}
  
  ngOnInit() {
    const data = this.dataService.getData();
  }
}`;

  customPipeExample = `// app/pipes/highlight.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlight',
  standalone: true
})
export class HighlightPipe implements PipeTransform {
  transform(text: string, searchTerm: string): string {
    if (!text || !searchTerm) return text;
    
    const regex = new RegExp(searchTerm, 'gi');
    return text.replace(regex, '<mark>$&</mark>');
  }
}

// Usage in template:
// {{ text | highlight:'Angular' }}`;

  signalsExample = `// Signals Example
import { signal, computed } from '@angular/core';

export class MyComponent {
  // Create a signal
  counter = signal(0);
  
  // Computed signal (derived state)
  doubledCounter = computed(() => this.counter() * 2);
  
  // Update signal
  increment() {
    this.counter.update(value => value + 1);
  }
  
  // Set signal value
  reset() {
    this.counter.set(0);
  }
}`;

  ssrConfigExample = `// angular.json or app configuration
{
  "build": {
    "builder": "@angular-devkit/build-angular:application",
    "options": {
      "outputPath": "dist/my-app",
      "index": "src/index.html",
      "browser": "src/main.ts",
      "server": "src/main.server.ts",  // SSR entry point
      "prerender": true,               // Enable prerendering
      "ssr": {
        "entry": "server.ts"
      }
    }
  }
}

// Enable hybrid rendering
ng add @angular/ssr`;

  constructor() {
    // Initialize Reactive Form
    this.reactiveForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  ngOnInit() {
    console.log('Angular Fundamentals Component Initialized');
  }

  // Event Handling Methods
  handleButtonClick() {
    this.lastEvent = 'Button was clicked!';
    this.messageSeverity = 'success';
  }

  onMouseEnter() {
    this.lastEvent = 'Mouse entered the button';
    this.messageSeverity = 'info';
    this.buttonStyle = { 'background-color': '#e3f2fd' };
  }

  onMouseLeave() {
    this.lastEvent = 'Mouse left the button';
    this.messageSeverity = 'warn';
    this.buttonStyle = {};
  }

  // Input/Output Demo Methods
  onChildMessageChanged(message: string) {
    this.receivedMessage = message;
  }

  // Form Handling Methods
  submitTemplateForm(form: NgForm) {
    if (form.valid) {
      this.formSubmissionResult = {
        severity: 'success',
        text: `Template form submitted! Name: ${this.templateFormData.name}, Email: ${this.templateFormData.email}`
      };
    }
  }

  submitReactiveForm() {
    if (this.reactiveForm.valid) {
      const formData = this.reactiveForm.value;
      this.formSubmissionResult = {
        severity: 'success',
        text: `Reactive form submitted! Name: ${formData.name}, Email: ${formData.email}`
      };
    }
  }

  // Service Methods
  getServiceData() {
    this.serviceData = this.dataService.getData();
  }

  // Signals Methods
  increment() {
    this.counter.update(value => value + 1);
  }

  decrement() {
    this.counter.update(value => value - 1);
  }

  reset() {
    this.counter.set(0);
  }
}

// Child Component for Input/Output Demo
@Component({
  selector: 'app-child-demo',
  standalone: true,
  imports: [CommonModule, ButtonModule, InputTextModule, FormsModule],
  template: `
    <div class="child-demo">
      <p>Received: {{ message }}</p>
      <input [(ngModel)]="internalMessage" (input)="onMessageChange()" 
             placeholder="Type to send to parent">
    </div>
  `,
  styles: [`
    .child-demo {
      border: 2px dashed #ccc;
      padding: 1rem;
      margin: 1rem 0;
      border-radius: 4px;
    }
  `]
})
export class ChildDemoComponent {
  @Input() message: string = '';
  @Output() messageChanged = new EventEmitter<string>();
  
  internalMessage = '';
  
  onMessageChange() {
    this.messageChanged.emit(this.internalMessage);
  }
}