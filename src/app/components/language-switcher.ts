import { Component, inject } from '@angular/core';
import { KeyValuePipe } from '@angular/common';
import { MagicTranslate } from '@magic-translate/angular';
import { AvailableLanguage, languages } from '../config';

@Component({
  selector: 'app-language-switcher',
  imports: [KeyValuePipe],
  template: `
    <div class="flex justify-center">
      <ul
        class="flex flex-col sm:flex-row items-center text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
      >
        @for (language of languages | keyvalue: unsorted; track language.key) {
          <li
            class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r last:border-0 dark:border-gray-600"
          >
            <label class="flex items-center px-3 py-3 gap-2 cursor-pointer">
              <input
                type="radio"
                name="language"
                class="w-4 h-4 accent-blue-600"
                [checked]="language.key === magicTranslate.language()"
                (change)="magicTranslate.setLanguage(language.key)"
              />
              {{ language.value }}
            </label>
          </li>
        }
      </ul>
    </div>
  `,
})
export class LanguageSwitcher {
  protected readonly magicTranslate = inject(MagicTranslate);
  protected readonly languages: Record<AvailableLanguage, string> = languages;
  protected readonly unsorted = () => 0;
}
