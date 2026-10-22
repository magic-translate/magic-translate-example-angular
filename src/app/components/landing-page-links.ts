import { Component, computed, inject } from '@angular/core';
import { MagicTranslate, T } from '@magic-translate/angular';
import { languages } from '../config';

@Component({
  selector: 'app-landing-page-links',
  imports: [T],
  template: `
    <div class="mb-32 grid text-center lg:mb-0 lg:grid-cols-3 lg:text-left">
      @for (link of links; track link.href) {
        <a
          [href]="link.href"
          class="flex flex-col items-center lg:items-stretch group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 dark:hover:border-neutral-700 dark:hover:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 class="mb-3 text-2xl font-semibold">
            <t>{{ link.title }}</t
            >&ngsp;
            <span
              class="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none"
            >
              -&gt;
            </span>
          </h2>
          <p class="m-0 max-w-[30ch] text-sm opacity-50">
            <t>{{ link.description }}</t>
          </p>
        </a>
      }

      <!-- A full page load, so the prerendered page is served as is. -->
      <a
        [href]="staticPageHref()"
        class="flex flex-col items-center lg:items-stretch group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 dark:hover:border-neutral-700 dark:hover:bg-neutral-800/30"
      >
        <h2 class="mb-3 text-2xl font-semibold">
          <t>Prerendered Demo</t>&ngsp;
          <span
            class="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none"
          >
            -&gt;
          </span>
        </h2>
        <p class="m-0 max-w-[30ch] text-sm opacity-50">
          <t>See a page that was translated when the app was built</t>
        </p>
      </a>
    </div>
  `,
})
export class LandingPageLinks {
  private readonly magicTranslate = inject(MagicTranslate);

  protected readonly links = [
    {
      href: 'https://magictranslate.io/docs',
      title: 'Docs',
      description: 'Find out how to get started and read about features and the API',
    },
    {
      href: 'https://magictranslate.io',
      title: 'Sign up',
      description: 'Check out the official Magic Translate website to create an account',
    },
    {
      href: 'https://magictranslate.io/pricing',
      title: 'Pricing',
      description: 'Learn about the available packages and their cost',
    },
    {
      href: 'https://github.com/magic-translate',
      title: 'Examples',
      description: 'Find Magic Translate code examples on GitHub',
    },
  ];

  protected readonly staticPageHref = computed(() => {
    const language = this.magicTranslate.language();
    return `static/${language in languages ? language : 'en'}/`;
  });
}
