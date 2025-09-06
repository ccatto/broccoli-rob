// // src/app/pages/angular-fundamentals/angular-fundamentals.component.ts

import { Component } from '@angular/core';

interface NavItem {
  id: string;
  label: string;
  icon?: string;
}

@Component({
  selector: 'app-angular-fundamentals-page',
  templateUrl: './angular-fundamentals.component.html',
  styleUrls: ['./angular-fundamentals.component.scss']
})
export class AngularFundamentalsComponent {
// export class AngularFundamentalsComponent {
  activeSection = 'components';

  navItems: NavItem[] = [
    { id: 'components', label: 'Components', icon: 'pi pi-palette' },
    { id: 'ssr', label: 'Server-Side Rendering', icon: 'pi pi-server' },
    { id: 'routing', label: 'Routing', icon: 'pi pi-sitemap' },
    { id: 'signals', label: 'Signals', icon: 'pi pi-bolt' }
  ];

  onNavItemClick(sectionId: string): void {
    this.activeSection = sectionId;
  }

  isActive(sectionId: string): boolean {
    return this.activeSection === sectionId;
  }

  get activeSectionLabel(): string {
    const match = this.navItems.find(item => item.id === this.activeSection);
    return match?.label || 'Content';
  }

}


