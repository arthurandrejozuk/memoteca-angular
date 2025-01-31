
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.route';
import { HttpClientModule } from '@angular/common/http';


//Aqui configuramos o app, inserindo rotas e injetando dependencias
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(HttpClientModule)
  ]
};
