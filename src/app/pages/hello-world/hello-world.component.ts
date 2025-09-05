// src/app/pages/hello-world/hello-world.component.ts
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.scss'], // or .css if you pref
  // templateUrl: './app.html',
  // styleUrl: './app.scss'
})
export class HelloWorldComponent {
  protected readonly title = signal('broccoli-rob-angular-20');
}
