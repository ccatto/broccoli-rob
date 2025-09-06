// // // src/app/pages/angular-fundamentals/angular-fundamentals.module.ts

// // // src/app/pages/angular-fundamentals/angular-fundamentals.module.ts

// angular-fundamentals.module.ts - STANDALONE APPROACH
import { NgModule } from '@angular/core';

// Import your STANDALONE components
import { AngularFundamentalsComponent } from './angular-fundamentals.component';
import { ComponentsSectionComponent } from './components/components-section/components-section.component';
import { SSRSectionComponent } from './components/ssr-section/ssr-section.component';

@NgModule({
  declarations: [
    // Empty - no declarations for standalone components
  ],
  imports: [
    // Import your standalone components here instead of declaring them
    AngularFundamentalsComponent,
    ComponentsSectionComponent,
    SSRSectionComponent
  ],
  exports: [
    AngularFundamentalsComponent
  ]
})
export class AngularFundamentalsModule {}


// // angular-fundamentals.module.ts
// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// // Import PrimeNG modules that your components need
// import { ButtonModule } from 'primeng/button';
// import { ToggleButtonModule } from 'primeng/togglebutton';
// import { MessageModule } from 'primeng/message';
// import { ChipModule } from 'primeng/chip';
// import { CardModule } from 'primeng/card';
// import { DividerModule } from 'primeng/divider';

// // Import your components
// import { AngularFundamentalsComponent } from './angular-fundamentals.component';
// import { ComponentsSectionComponent } from './components/components-section/components-section.component';
// import { SSRSectionComponent } from './components/ssr-section/ssr-section.component';

// @NgModule({
//   declarations: [
//     AngularFundamentalsComponent,
//     ComponentsSectionComponent,
//     SSRSectionComponent
//   ],
//   imports: [
//     CommonModule,
//     FormsModule,
//     ReactiveFormsModule,
//     // Add all the PrimeNG modules here
//     ButtonModule,
//     ToggleButtonModule,
//     MessageModule,
//     ChipModule,
//     CardModule,
//     DividerModule
//   ],
//   exports: [
//     AngularFundamentalsComponent
//   ]
// })
// export class AngularFundamentalsModule {}



// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// // Import with consistent naming
// import { AngularFundamentalsComponent } from './angular-fundamentals.component';
// import { ComponentsSectionComponent } from './components/components-section/components-section.component';
// import { SSRSectionComponent } from './components/ssr-section/ssr-section.component';

// @NgModule({
//   declarations: [
//     AngularFundamentalsComponent,  // ← Use consistent class name
//     ComponentsSectionComponent,
//     SSRSectionComponent
//   ],
//   imports: [
//     CommonModule,
//     FormsModule,
//     ReactiveFormsModule
//   ],
//   exports: [
//     AngularFundamentalsComponent  // ← Use consistent class name
//   ]
// })
// export class AngularFundamentalsModule {}






// // import { NgModule } from '@angular/core';
// // import { CommonModule } from '@angular/common';
// // import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// // // Import your components
// // // import { AngularFundamentalsComponent
// // import { MainPageComponent } from './angular-fundamentals.component';
// // // import { AngularFundamentalsComponent } from './angular-fundamentals.component';
// // import { ComponentsSectionComponent } from './components/components-section/components-section.component';
// // import { SSRSectionComponent } from './components/ssr-section/ssr-section.component';
// // // Add your other section components
// // // import { RoutingSectionComponent } from './components/routing-section/routing-section.component';
// // // import { SignalsSectionComponent } from './components/signals-section/signals-section.component';

// // // import { PrimeNgModules } from '../../prime-ng-imports'; // your PrimeNG imports module (optional)

// // @NgModule({
// //   declarations: [
// //     // All your COMPONENTS go here
// //     // AngularFundamentalsComponent,
// //     MainPageComponent,
// //     ComponentsSectionComponent,
// //     SSRSectionComponent
// //     // Add your other section components here:
// //     // RoutingSectionComponent,
// //     // SignalsSectionComponent
// //   ],
// //   imports: [
// //     // All MODULES go here (Angular modules, third-party modules, your custom modules)
// //     CommonModule,
// //     FormsModule,
// //     ReactiveFormsModule
// //     // PrimeNgModules  // uncomment when you have this
// //   ],
// //   exports: [
// //     // Components you want to make available to other modules
// //     // AngularFundamentalsComponent
// //     MainPageComponent
// //   ]
// // })
// // export class AngularFundamentalsModule {}



// // // src/app/pages/angular-fundamentals/angular-fundamentals.module.ts

// // import { NgModule } from '@angular/core';
// // import { CommonModule } from '@angular/common';
// // import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// // // import { AngularFundamentalsComponent } from './angular-fundamentals';
// // import { MainPageComponent } from './angular-fundamentals';
// // // import { AngularFundamentalsComponent } from './angular-fundamentals.component';
// // import { ComponentsSectionComponent } from './components/components-section/components-section.component';
// // import { SSRSectionComponent } from './components/ssr-section/ssr-section.component';
// // // import { PrimeNgModules } from '../../prime-ng-imports'; // your PrimeNG imports module (optional)

// // @NgModule({
// //   declarations: [
// //     // AngularFundamentalsComponent,
// //     // ComponentsSectionComponent
// //   ],
// //   imports: [
// //     CommonModule,
// //     FormsModule,
// //     ReactiveFormsModule
// //     // , AngularFundamentalsComponent
// //     , MainPageComponent
// //     , ComponentsSectionComponent
// //     , SSRSectionComponent
// //     // ,PrimeNgModules
// //   ],
// //   exports: [
// //     // AngularFundamentalsComponent
// //     MainPageComponent
// //   ]
// // })
// // export class AngularFundamentalsModule {}
