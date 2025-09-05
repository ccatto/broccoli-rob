// src/main.server.ts

import { bootstrapApplication } from '@angular/platform-browser';
// import { App } from './app/app';
import { AppComponent } from './app/app.component'; // Changed from './app/app
import { config } from './app/app.config.server';

const bootstrap = () => bootstrapApplication(AppComponent, config);

export default bootstrap;
