# Magic Translate Angular Example App

This is an example Angular app with Magic Translate integrated. You can see
this app deployed here:
https://magic-translate.github.io/magic-translate-example-angular/

It shows two ways to translate an Angular app:

- **In the browser** (`src/app/pages/home-page.ts`): content inside `<t>`
  components is translated on the fly, and the language switcher changes the
  language of the whole page.
- **At build time** (`src/app/pages/static-page.ts`): the pages under
  `/static/<language>/` are prerendered with their translations already in the
  HTML, so the browser makes no requests to the Magic Translate API.

## Getting Started

First create a Magic Translate account at https://magictranslate.io/signin to
obtain your API key. No credit card is required for the Free plan.

Then copy your API key and set it in a `.env` file:

```bash
# .env

MAGIC_TRANSLATE_API_KEY=<your API key>
```

Then, install the dependencies and run the development server:

```bash
npm install
npm start
```

Open [http://localhost:4200](http://localhost:4200) with your browser to see the
result.

You can start editing the page by modifying `src/app/pages/home-page.ts`. The
page auto-updates as you edit the file.

The website's content is now automatically translated in your desired language.

## How it works

Magic Translate is set up once in `src/app/app.config.ts`:

```ts
provideMagicTranslate({ apiKey, language: Language.EN });
```

Any text or HTML inside a `<t>` component is translated:

```html
<t>Get started with</t>
```

The language switcher (`src/app/components/language-switcher.ts`) uses the
`MagicTranslate` service to change the language.

The prerendered pages translate their texts in a route resolver
(`src/app/pages/static-translations.resolver.ts`) while `ng build` prerenders
them, and pass the result to the browser through Angular's `TransferState`.

## Learn More

To learn more about Magic Translate please visit
[https://magictranslate.io](https://magictranslate.io), and see the
[@magic-translate/angular](https://www.npmjs.com/package/@magic-translate/angular)
package for the full API.

## Deploy on GitHub Pages

`.github/workflows/deploy.yml` builds the app and deploys it to GitHub Pages on
every push to `main`. It reads the API key from the `MAGIC_TRANSLATE_API_KEY`
repository variable. The key ends up in the public JavaScript, as with any
client-side Magic Translate integration.
