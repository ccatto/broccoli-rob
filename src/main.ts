// src/main.ts

// import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
// import { AppComponent } from './app/app.component'; // Make sure this points to your new file

// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
// import { App } from './app/app';
import { AppComponent } from './app/app.component'; // Changed from './app/app'

// bootstrapApplication(App, appConfig)
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));


  // main.ts → app.config.ts → AppComponent → Rendered Page
