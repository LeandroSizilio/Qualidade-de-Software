// eslint-disable-next-line deprecation/deprecation
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { providePrimeNG } from 'primeng/config';



import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withInMemoryScrolling({
      scrollPositionRestoration: 'enabled'
    })),
    provideHttpClient(),
    // eslint-disable-next-line deprecation/deprecation
    provideNoopAnimations(),
    providePrimeNG({
      
      // theme: {
      //     preset: material,
      // }
    })
    
  ]
};