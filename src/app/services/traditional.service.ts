import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TraditionalService {
  private data = 'Data from Traditional Constructor Injection';

  constructor() {
    console.log('TraditionalService created - uses constructor injection pattern');
  }

  getData(): string {
    return this.data;
  }

  setData(newData: string): void {
    this.data = newData;
  }

  processData(): string {
    return `Processed: ${this.data}`;
  }

  // Simulate some business logic
  performBusinessLogic(): { 
    result: string; 
    timestamp: Date; 
    serviceType: string; 
  } {
    return {
      result: 'Traditional service business logic executed',
      timestamp: new Date(),
      serviceType: 'Constructor Injection'
    };
  }
}