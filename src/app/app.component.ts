import { Component, inject } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'demo-theme-material';
/*   router = inject(Router)

  onTabChange(event: MatTabChangeEvent) {
    switch (event.index) {
      case 0:
        this.router.navigate(['/']);
        break;
      case 1:
        this.router.navigate(['/buttons']);
        break;
      case 2:
        this.router.navigate(['/forms']);
        break;
    }
  } */
}
