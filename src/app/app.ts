import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
    <main class="p-8 gap-8 flex flex-col justify-between min-h-screen max-w-6xl mx-auto">
      <router-outlet />
    </main>
  `,
})
export class App {}
