import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import {  ReactiveFormsModule } from '@angular/forms';

import { ButtonsComponent } from './pages/buttons/buttons.component';
import { CardContainerComponent } from './components/card-container/card-container.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';

import { MATERIAL_MODULES } from './shared/material-modules';
import { StepperComponent } from './components/stepper/stepper.component';
import { TabsComponent } from './components/tabs/tabs.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterModule,
    ReactiveFormsModule,
    ButtonsComponent,
    CardContainerComponent,
    CheckboxComponent,
    StepperComponent,
    TabsComponent,
    ...MATERIAL_MODULES
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'demo-theme-material';
  readonly bestBoys: string[] = [
    'Samoyed',
    'Akita Inu',
    'Alaskan Malamute',
    'Siberian Husky',
  ];


}
