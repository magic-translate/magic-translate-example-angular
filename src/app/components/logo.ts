import { Component } from '@angular/core';

@Component({
  selector: 'app-logo',
  template: `
    <div
      class="flex justify-center before:absolute before:-z-10 before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] md:after:w-[240px] after:w-[120px] after:translate-x-1/3 after:bg-conic-180 after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:pointer-events-none dark:before:bg-linear-to-br dark:before:from-transparent dark:before:to-blue-700 dark:before:opacity-10 dark:after:from-sky-900 dark:after:via-[#0141ff] dark:after:opacity-40 lg:before:h-[360px]"
    >
      <img
        class="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
        src="magictranslate.svg"
        alt="Magic Translate Logo"
        width="180"
        height="37"
      />
    </div>
  `,
})
export class Logo {}
