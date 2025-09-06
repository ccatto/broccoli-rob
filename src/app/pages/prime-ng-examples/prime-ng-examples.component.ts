import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-prime-ng-examples',
  standalone: true,
  imports: [ToastModule, ButtonModule],
  template: `
    <p-toast></p-toast>
    <button pButton type="button" label="Click Me" (click)="showToast()"></button>
  `,
  providers: [MessageService],
})
export class PrimeNgExamplesComponent {
  constructor(private messageService: MessageService) {}

  showToast() {
    this.messageService.add({
      severity: 'success',
      summary: 'It works!',
      detail: 'PrimeNG button clicked',
    });
  }
}
