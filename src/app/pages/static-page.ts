import { Component, input } from '@angular/core';
import { KeyValuePipe } from '@angular/common';
import { GetStarted } from '../components/get-started';
import { Logo } from '../components/logo';
import { StaticTranslations } from './static-translations.resolver';

@Component({
  selector: 'app-static-page',
  imports: [GetStarted, Logo, KeyValuePipe],
  host: { class: 'contents' },
  template: `
    @let t = translations().texts;

    <app-get-started>
      {{ t.getStarted }}&nbsp;
      <code class="font-mono font-bold">npm i @magic-translate/angular</code>
    </app-get-started>

    <div class="flex justify-center">
      <ul
        class="text-sm font-medium text-gray-900 border border-gray-200 rounded-lg sm:flex dark:border-gray-600 dark:text-white overflow-hidden"
      >
        @for (language of translations().languageNames | keyvalue: unsorted; track language.key) {
          <li
            class="flex-initial border-b bg-white border-gray-200 sm:border-b-0 sm:border-r last:border-0 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 dark:bg-gray-700"
            [class.font-bold]="language.key === translations().language"
          >
            <!-- Full page loads, so every language is served prerendered. -->
            <a [href]="'static/' + language.key + '/'" class="block p-3">
              {{ language.value }}
            </a>
          </li>
        }
      </ul>
    </div>

    <app-logo />

    <p class="text-center">{{ t.intro }}</p>
    <p class="text-center">{{ t.prerendered }}</p>
    <p class="text-center">{{ t.network }}</p>

    <p class="text-center">
      <a href="./">← {{ t.goBack }}</a>
    </p>
  `,
})
export class StaticPage {
  // bound from the route's resolve data
  readonly translations = input.required<StaticTranslations>();
  protected readonly unsorted = () => 0;
}
