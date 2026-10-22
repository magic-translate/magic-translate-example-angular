import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { Language, provideMagicTranslate } from '@magic-translate/angular';
import { routes } from './app.routes';
import { magicTranslateConfig } from './config';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes, withComponentInputBinding()),
    provideClientHydration(),
    provideMagicTranslate({ ...magicTranslateConfig, language: Language.EN }),
  ],
};
