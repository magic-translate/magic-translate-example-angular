import { Component } from '@angular/core';

@Component({
  selector: 'app-get-started',
  template: `
    <div class="inline-block">
      <p
        class="text-sm justify-center border-b border-gray-300 bg-linear-to-b from-zinc-200 p-4 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit rounded-xl border"
      >
        <ng-content />
      </p>
    </div>
  `,
})
export class GetStarted {}
