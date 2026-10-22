import { inject, makeStateKey, TransferState } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { MagicTranslate } from '@magic-translate/angular';
import { AvailableLanguage, languages } from '../config';

export const texts = {
  getStarted: 'Get started with',
  intro:
    'Magic Translate works with Angular’s build-time prerendering. This page was translated once, when the app was built.',
  prerendered:
    'The HTML loaded from GitHub Pages is already translated, so there is nothing to wait for.',
  network:
    'When you inspect the HTTP traffic of this page, you can see that no request is made to Magic Translate’s API.',
  goBack: 'Go back',
};

export interface StaticTranslations {
  language: AvailableLanguage;
  texts: Record<keyof typeof texts, string>;
  // every language's name in that language itself
  languageNames: Record<AvailableLanguage, string>;
}

/**
 * Translates the page while it is prerendered. The result is embedded in the
 * HTML, so the browser reuses it instead of calling the API again.
 */
export const staticTranslationsResolver: ResolveFn<StaticTranslations> = async (route) => {
  const transferState = inject(TransferState);
  const magicTranslate = inject(MagicTranslate);

  const param = route.paramMap.get('language') ?? 'en';
  const language = (param in languages ? param : 'en') as AvailableLanguage;
  const key = makeStateKey<StaticTranslations>(`translations-${language}`);

  const transferred = transferState.get(key, null);
  if (transferred) {
    return transferred;
  }

  const translateAll = <K extends string>(
    entries: [K, string][],
    lang: (key: K) => AvailableLanguage,
  ) =>
    Promise.all(
      entries.map(async ([key, text]) => [
        key,
        await magicTranslate.translate(text, { lang: lang(key) }),
      ]),
    ).then((translated) => Object.fromEntries(translated) as Record<K, string>);

  const translations: StaticTranslations = {
    language,
    texts: await translateAll(
      Object.entries(texts) as [keyof typeof texts, string][],
      () => language,
    ),
    languageNames: await translateAll(
      Object.entries(languages) as [AvailableLanguage, string][],
      (lang) => lang,
    ),
  };

  transferState.set(key, translations);
  return translations;
};
