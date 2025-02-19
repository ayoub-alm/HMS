import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {provideHttpClient, withFetch} from '@angular/common/http';
import {Directionality} from '@angular/cdk/bidi';

export const appConfig: ApplicationConfig = {
  providers: [
    Directionality,
    provideHttpClient(withFetch()),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes), provideClientHydration(), provideAnimationsAsync()]
};
