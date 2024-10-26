import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'hello-world',
    loadComponent: () =>
      import('./components/hello-world.component').then((m) => m.HelloWorldComponent),
  },
];
