import { Pipe } from '@angular/core';
// // src/app/pages/angular-fundamentals/angular-fundamentals.component.ts

import { Component } from '@angular/core';
import { SSRSectionComponent } from './components/ssr-section/ssr-section.component';
import { ComponentsSectionComponent } from './components/components-section/components-section.component';
import { RoutingSectionComponent } from './components/routing-section/routing-section.component';
import { SignalsSectionComponent } from './components/signals-section/signals-section.component';
import { DISectionComponent } from './components/di-section/di-section.component';
import { PipesSectionComponent } from './components/pipes-section/pipes-section.component';
import { FormsSectionComponent } from './components/forms-section/forms-section.component';
import { ModernShowcaseComponent } from './components/modern-showcase/modern-showcase.component';
// import { VersionFeaturesComponent } from './components/version-best-features/version-best-features.components';
import { VersionFeaturesComponent } from './components/version-best-features/version-best-features.component';

interface NavItem {
  id: string;
  label: string;
  icon?: string;
}

@Component({
  selector: 'app-angular-fundamentals-page',
  standalone: true, // ← Add this!
  imports: [
    // ← Add this entire imports array!
    RoutingSectionComponent,
    SSRSectionComponent,
    SignalsSectionComponent,
    DISectionComponent,
    PipesSectionComponent,
    FormsSectionComponent,
    ComponentsSectionComponent,
    ModernShowcaseComponent,
    VersionFeaturesComponent,
  ],
  templateUrl: './angular-fundamentals.component.html',
  styleUrls: ['./angular-fundamentals.component.scss'],
})
export class AngularFundamentalsComponent {
  // export class AngularFundamentalsComponent {
  activeSection = 'components';

  navItems: NavItem[] = [
    { id: 'components', label: 'Components', icon: 'pi pi-palette' },
    { id: 'ssr', label: 'Server-Side Rendering', icon: 'pi pi-server' },
    { id: 'routing', label: 'Routing', icon: 'pi pi-sitemap' },
    { id: 'signals', label: 'Signals', icon: 'pi pi-bolt' },
    { id: 'di', label: 'Dependency Injection', icon: 'pi pi-share-alt' },
    { id: 'pipes', label: 'Pipes', icon: 'pi pi-filter' },
    { id: 'forms', label: 'Forms', icon: 'pi pi-check-square' },
    { id: 'showcase', label: 'Showcase', icon: 'pi pi-star' }, 
        { id: 'versions', label: 'Versions', icon: 'pi pi-star' }, 
  ];

  onNavItemClick(sectionId: string): void {
    this.activeSection = sectionId;
  }

  isActive(sectionId: string): boolean {
    return this.activeSection === sectionId;
  }

  get activeSectionLabel(): string {
    const match = this.navItems.find((item) => item.id === this.activeSection);
    return match?.label || 'Content';
  }
}
