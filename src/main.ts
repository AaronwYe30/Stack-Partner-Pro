import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';          // <-- note the ./app/ prefix
import { appConfig } from './app/app.config'; // <-- note the ./app/ prefix

bootstrapApplication(App, appConfig)
  .catch(err => console.error(err));
