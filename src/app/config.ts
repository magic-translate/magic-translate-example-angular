import { Language } from '@magic-translate/angular';
import { environment } from '../environments/environment';

export const magicTranslateConfig = {
  apiKey: environment.magicTranslateApiKey,
  _apiUrl: environment.magicTranslateApiUrl,
};

export const languages = {
  [Language.EN]: 'English',
  [Language.ZH]: 'Chinese',
  [Language.DE]: 'German',
} as const;

export type AvailableLanguage = keyof typeof languages;
