import { Component, inject } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatStepperModule } from '@angular/material/stepper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { ButtonsComponent } from './pages/buttons/buttons.component';
import { CardContainerComponent } from './components/card-container/card-container.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MATERIAL_MODULES } from './shared/material-modules';

@Component({
  selector: 'app-root',
  imports: [
    RouterModule,
    ReactiveFormsModule,
    ButtonsComponent,
    CardContainerComponent,
    CheckboxComponent,
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
