import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ButtonsComponent } from './pages/buttons/buttons.component';
import { FormsComponent } from './pages/forms/forms.component';

export const routes: Routes = [
   {
        path: 'buttons',
        component: ButtonsComponent,
      },
      {
        path: 'forms',
        component: FormsComponent,
      },
];
