// src/app/services/data.service.ts
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, of, delay } from 'rxjs';

export interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

export interface ApiResponse<T> {
  data: T;
  message: string;
  status: 'success' | 'error';
}

@Injectable({
  providedIn: 'root', // Available application-wide
})
export class DataService {
  private data =
    'Hello from Injectable Service! This demonstrates dependency injection in Angular.';

  // Sample data for demonstrations
  private users: User[] = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Moderator' },
  ];

  // BehaviorSubject for reactive data
  private dataSubject = new BehaviorSubject<string>(this.data);
  public data$ = this.dataSubject.asObservable();

  private usersSubject = new BehaviorSubject<User[]>(this.users);
  public users$ = this.usersSubject.asObservable();

  constructor() {
    console.log('DataService initialized - This runs once due to providedIn: "root"');
  }

  // Basic data operations
  getData(): string {
    return this.data;
  }

  setData(newData: string): void {
    this.data = newData;
    this.dataSubject.next(newData);
  }

  // User management methods
  getUsers(): User[] {
    return [...this.users]; // Return a copy to prevent direct mutation
  }

  getUsersObservable(): Observable<User[]> {
    return this.users$;
  }

  getUserById(id: number): User | undefined {
    return this.users.find((user) => user.id === id);
  }

  addUser(user: Omit<User, 'id'>): User {
    const newUser: User = {
      id: Math.max(...this.users.map((u) => u.id)) + 1,
      ...user,
    };

    this.users.push(newUser);
    this.usersSubject.next([...this.users]);

    return newUser;
  }

  updateUser(id: number, updates: Partial<Omit<User, 'id'>>): User | null {
    const userIndex = this.users.findIndex((user) => user.id === id);

    if (userIndex === -1) {
      return null;
    }

    this.users[userIndex] = { ...this.users[userIndex], ...updates };
    this.usersSubject.next([...this.users]);

    return this.users[userIndex];
  }

  deleteUser(id: number): boolean {
    const initialLength = this.users.length;
    this.users = this.users.filter((user) => user.id !== id);

    if (this.users.length !== initialLength) {
      this.usersSubject.next([...this.users]);
      return true;
    }

    return false;
  }

  // Simulate API calls with observables
  fetchDataWithDelay(): Observable<string> {
    return of('Data loaded after 2 seconds delay').pipe(delay(2000));
  }

  fetchUsersWithDelay(): Observable<ApiResponse<User[]>> {
    const response: ApiResponse<User[]> = {
      data: [...this.users],
      message: 'Users fetched successfully',
      status: 'success',
    };

    return of(response).pipe(delay(1500));
  }

  // Search functionality
  searchUsers(query: string): User[] {
    if (!query.trim()) {
      return [...this.users];
    }

    const lowerQuery = query.toLowerCase();
    return this.users.filter(
      (user) =>
        user.name.toLowerCase().includes(lowerQuery) ||
        user.email.toLowerCase().includes(lowerQuery) ||
        user.role.toLowerCase().includes(lowerQuery),
    );
  }

  // Statistics
  getUserStats(): { total: number; admins: number; users: number; moderators: number } {
    return {
      total: this.users.length,
      admins: this.users.filter((u) => u.role === 'Admin').length,
      users: this.users.filter((u) => u.role === 'User').length,
      moderators: this.users.filter((u) => u.role === 'Moderator').length,
    };
  }

  // Local storage integration
  saveToLocalStorage(key: string, data: any): void {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
      console.error('Error saving to localStorage:', error);
    }
  }

  getFromLocalStorage<T>(key: string): T | null {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.error('Error reading from localStorage:', error);
      return null;
    }
  }

  // Utility methods
  generateRandomData(): string {
    const messages = [
      'Angular is awesome!',
      'Dependency Injection makes code testable',
      'Services are singleton by default',
      'RxJS makes async programming easier',
      'TypeScript adds type safety',
    ];

    return messages[Math.floor(Math.random() * messages.length)];
  }

  // Method to demonstrate different injection approaches
  getServiceInfo(): {
    name: string;
    version: string;
    description: string;
    injectionType: 'root' | 'component' | 'module';
  } {
    return {
      name: 'DataService',
      version: '1.0.0',
      description: 'Demonstrates Angular dependency injection patterns',
      injectionType: 'root',
    };
  }
}
