import { NgModule } from '@angular/core';
import { ServerModule, ServerTransferStateModule } from '@angular/platform-server';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { ServerRequestService } from './shared/services/server-request.service';
import { REQUEST_SERVICE, LOGGER_SERVICE } from './shared/services/tokens';
import { ServerLoggerService } from './shared/services/server-logger.service';

@NgModule({
    imports: [
        AppModule,
        ServerModule,
        ModuleMapLoaderModule,
        ServerTransferStateModule
    ],
    providers: [
        { provide: REQUEST_SERVICE, useClass: ServerRequestService },
        { provide: LOGGER_SERVICE, useClass: ServerLoggerService }
    ],
    bootstrap: [ AppComponent ]
})
export class AppServerModule {
}
