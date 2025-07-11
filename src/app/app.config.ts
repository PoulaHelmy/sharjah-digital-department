import {ApplicationConfig, provideZoneChangeDetection} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideTranslateService, TranslateLoader} from '@ngx-translate/core';
import {HttpClient, provideHttpClient} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {English} from '@core/constants';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';

const httpLoaderFactory: (http: HttpClient) => TranslateHttpLoader = (http: HttpClient) =>
  new TranslateHttpLoader(http, './assets/i18n/', '.json');

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({eventCoalescing: true}),
    provideRouter(routes),
    provideAnimationsAsync(),
    provideHttpClient(),
    provideTranslateService({
      defaultLanguage: English,
      loader: {
        provide: TranslateLoader,
        useFactory: httpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ]
};
