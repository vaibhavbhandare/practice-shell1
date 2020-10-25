import { cultureCoreInit } from '@orxe-culture/core';

import translation from './assets/locales/en-US.json';
// import translation from './assets/locales/zh-CN.json';
// import translation from './assets/locales/de-AT.json';

import { environment } from './environments/environment';

// set default language to `en` and set resources
const resources = { en: { translation } };
const locale = 'en-US';

// set  language to `zh` and set resources
// const resources = { zh: { translation } };
// const locale = 'zh-CN';

// const resources = { de: { translation } };
// const locale = 'de-AT';

cultureCoreInit({
    resources,
    debug: false,
    lng: locale,
    production: environment.production,
    isInsideMicroFrontEnd: true
});
