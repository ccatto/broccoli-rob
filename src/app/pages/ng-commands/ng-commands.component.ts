// src/app/pages/ng-commands/ng-commands.component.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card'; // 👈 import PrimeNG Card

@Component({
  selector: 'app-ng-commands',
  standalone: true,
  imports: [
    CommonModule,
    CardModule, // 👈 register it here
  ],
  templateUrl: './ng-commands.component.html',
  styleUrls: ['./ng-commands.component.scss'],
})
export class NgCommandsComponent {
  commands = [
    { command: 'ng new my-app', description: 'Create a new Angular project' },
    { command: 'ng serve', description: 'Run dev server with hot reload' },
    { command: 'ng build', description: 'Build the app for production' },
    { command: 'ng generate component my-component', description: 'Generate a new component' },
    { command: 'ng test', description: 'Run unit tests' },
    { command: 'ng lint', description: 'Lint and check code style' },
  ];
}
