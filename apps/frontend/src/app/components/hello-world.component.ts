  import { Component } from '@angular/core';
  import { CommonModule } from '@angular/common';

  @Component({
    selector: 'app-hello-world',
    standalone: true,
    imports: [CommonModule],
    template: `
      <main class="flex justify-center h-full items-center text-3xl font-bold">
        <span>Hello world!</span>
      </main>
    `,
  })
  export class HelloWorldComponent {}
