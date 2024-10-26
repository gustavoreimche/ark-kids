import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
  `,
  styles: `
    :host {
      display: block;
      width: 100dvw;
      height: 100dvh;
    }
  `
})
export class AppComponent {}
