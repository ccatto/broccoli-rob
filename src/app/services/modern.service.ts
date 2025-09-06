import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ModernService {
  getData(): string {
    return 'This data comes from ModernService (function-based DI)';
  }
}
