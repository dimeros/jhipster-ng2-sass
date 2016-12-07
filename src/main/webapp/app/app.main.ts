import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ProdConfig } from './blocks/config/prod.config';
import { JhipsterAppModule } from './app.module';

ProdConfig();

platformBrowserDynamic().bootstrapModule(JhipsterAppModule);
