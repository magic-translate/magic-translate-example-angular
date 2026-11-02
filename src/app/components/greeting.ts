import { Component, signal } from '@angular/core';
import { T, TranslatePipe } from '@magic-translate/angular';

@Component({
  selector: 'app-greeting',
  imports: [T, TranslatePipe],
  template: `
    <div class="flex flex-col items-center gap-3 text-center">
      <input
        [placeholder]="'Type your name' | t"
        (input)="name.set($any($event.target).value.trim())"
        class="w-64 rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
      />
      <p class="text-lg">
        @if (name()) {
          <t [v]="{ name: name() }">Hello <b>$name</b>, nice to meet you!</t>
        } @else {
          <t>Type your name and watch it appear in the translated sentence.</t>
        }
      </p>

      <div class="flex items-center gap-3">
        <button
          class="h-8 w-8 rounded-lg border border-gray-300 dark:border-gray-600"
          [attr.aria-label]="'Remove an item' | t"
          (click)="count.set(Math.max(0, count() - 1))"
        >
          −
        </button>
        <p class="text-lg">
          <t [v]="{ count: count() }">You have <b>$count items</b> in your cart.</t>
        </p>
        <button
          class="h-8 w-8 rounded-lg border border-gray-300 dark:border-gray-600"
          [attr.aria-label]="'Add an item' | t"
          (click)="count.set(count() + 1)"
        >
          +
        </button>
      </div>

      <p class="max-w-md text-sm opacity-50">
        <t>
          Names and counts are variables. Each sentence is translated once and cached, so changing a
          value makes no new request.
        </t>
      </p>
    </div>
  `,
})
export class Greeting {
  protected readonly name = signal('');
  protected readonly count = signal(3);
  protected readonly Math = Math;
}
