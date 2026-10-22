// Writes the Magic Translate settings from the environment (or a .env file)
// into src/environments/environment.ts, which the app imports.
import { mkdirSync, writeFileSync } from 'node:fs';

const apiKey = process.env.MAGIC_TRANSLATE_API_KEY;
if (!apiKey) {
  console.error(
    'MAGIC_TRANSLATE_API_KEY is not set. Get an API key at https://magictranslate.io and put it in a .env file.',
  );
  process.exit(1);
}

const apiUrl = process.env.MAGIC_TRANSLATE_API_URL;

mkdirSync('src/environments', { recursive: true });
writeFileSync(
  'src/environments/environment.ts',
  `export const environment: {
  magicTranslateApiKey: string;
  magicTranslateApiUrl?: string;
} = {
  magicTranslateApiKey: ${JSON.stringify(apiKey)},
  magicTranslateApiUrl: ${apiUrl ? JSON.stringify(apiUrl) : 'undefined'},
};
`
);
