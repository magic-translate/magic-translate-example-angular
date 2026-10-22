import { Routes } from '@angular/router';
import { HomePage } from './pages/home-page';
import { StaticPage } from './pages/static-page';
import { staticTranslationsResolver } from './pages/static-translations.resolver';

export const routes: Routes = [
  { path: '', component: HomePage },
  {
    path: 'static/:language',
    component: StaticPage,
    resolve: { translations: staticTranslationsResolver },
  },
  { path: '**', redirectTo: '' },
];
