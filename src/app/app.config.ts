import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { InjectionToken } from '@angular/core';
import { provideHttpClient } from '@angular/common/http'; // Provide HttpClient

import { routes } from './app.routes';

export const SERVER_URL = new InjectionToken<string>('ServerUrl');
export const appConfig: ApplicationConfig = {

  providers: [provideHttpClient(), provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),
    { provide: SERVER_URL, useValue: 'http://localhost:8081/api' }]
};
