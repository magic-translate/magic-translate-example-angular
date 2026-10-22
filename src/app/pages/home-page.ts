import { Component } from '@angular/core';
import { T } from '@magic-translate/angular';
import { GetStarted } from '../components/get-started';
import { LandingPageLinks } from '../components/landing-page-links';
import { LanguageSwitcher } from '../components/language-switcher';
import { Logo } from '../components/logo';

@Component({
  selector: 'app-home-page',
  imports: [T, GetStarted, LanguageSwitcher, Logo, LandingPageLinks],
  host: { class: 'contents' },
  template: `
    <app-get-started>
      <t>Get started with</t>&nbsp;
      <code class="font-mono font-bold inline">npm i @magic-translate/angular</code>
    </app-get-started>

    <app-language-switcher />

    <app-logo />

    <app-landing-page-links />
  `,
})
export class HomePage {}
