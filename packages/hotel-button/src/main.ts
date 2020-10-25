import './culture-init';

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import { initShellClient } from '@orxe-devkit/shell-client';

import './components';

if (environment.production) {
  enableProdMode();
}

initShellClient('').then(() => {
  platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
});
