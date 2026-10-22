import { RenderMode, ServerRoute } from '@angular/ssr';
import { languages } from './config';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'static/:language',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => Object.keys(languages).map((language) => ({ language })),
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
