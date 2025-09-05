// // src/app/components/theme.service.ts
import { Injectable, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private isDarkMode = true; // Default to dark mode
  private platformId = inject(PLATFORM_ID);
  private isBrowser: boolean;

  constructor() {
    // constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);

    if (this.isBrowser) {
      this.initializeTheme();
    }
  }

  private initializeTheme(): void {
    if (!this.isBrowser) return;

    // Check if user has a saved preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      this.isDarkMode = savedTheme === 'dark';
    } else {
      // Default to dark mode
      this.isDarkMode = true;
    }
    this.applyTheme();
  }

  toggleTheme(): void {
    this.isDarkMode = !this.isDarkMode;
    this.applyTheme();

    if (this.isBrowser) {
      localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
    }
  }

  setDarkMode(isDark: boolean): void {
    this.isDarkMode = isDark;
    this.applyTheme();

    if (this.isBrowser) {
      localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
    }
  }

  private applyTheme(): void {
    if (!this.isBrowser) return;

    if (this.isDarkMode) {
      document.documentElement.classList.add('dark-mode');
    } else {
      document.documentElement.classList.remove('dark-mode');
    }
  }

  get currentTheme(): 'light' | 'dark' {
    return this.isDarkMode ? 'dark' : 'light';
  }

  get isCurrentlyDark(): boolean {
    return this.isDarkMode;
  }
}

// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class ThemeService {
//   private isDarkMode = true; // Default to dark mode

//   constructor() {
//     // Check if user has a saved preference
//     const savedTheme = localStorage.getItem('theme');
//     if (savedTheme) {
//       this.isDarkMode = savedTheme === 'dark';
//     } else {
//       // Default to dark mode
//       this.isDarkMode = true;
//     }
//     this.applyTheme();
//   }

//   toggleTheme(): void {
//     this.isDarkMode = !this.isDarkMode;
//     this.applyTheme();
//     localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
//   }

//   setDarkMode(isDark: boolean): void {
//     this.isDarkMode = isDark;
//     this.applyTheme();
//     localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
//   }

//   private applyTheme(): void {
//     if (this.isDarkMode) {
//       document.documentElement.classList.add('dark-mode');
//     } else {
//       document.documentElement.classList.remove('dark-mode');
//     }
//   }

//   get currentTheme(): 'light' | 'dark' {
//     return this.isDarkMode ? 'dark' : 'light';
//   }

//   get isCurrentlyDark(): boolean {
//     return this.isDarkMode;
//   }
// }
