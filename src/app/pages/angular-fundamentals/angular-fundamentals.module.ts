// src/app/pages/angular-fundamentals/angular-fundamentals.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFundamentalsComponent } from './angular-fundamentals';
// import { AngularFundamentalsComponent } from './angular-fundamentals.component';
import { ComponentsSectionComponent } from './components/components-section/components-section.component';
import { SSRSectionComponent } from './components/ssr-section/ssr-section.component';
// import { PrimeNgModules } from '../../prime-ng-imports'; // your PrimeNG imports module (optional)

@NgModule({
  declarations: [
    // AngularFundamentalsComponent,
    // ComponentsSectionComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
    , AngularFundamentalsComponent
    , ComponentsSectionComponent
    , SSRSectionComponent
    // ,PrimeNgModules
  ],
  exports: [
    AngularFundamentalsComponent
  ]
})
export class AngularFundamentalsModule {}
