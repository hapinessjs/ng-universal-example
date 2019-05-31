import { NgModule } from '@angular/core';
import { ServerModule, ServerTransferStateModule } from '@angular/platform-server';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';
import { AppComponent } from './app.component';

import { AppModule } from './app.module';
import { ServerReplyService } from './shared/services/server-reply.service';
import { ServerRequestService } from './shared/services/server-request.service';
import { REPLY_SERVICE, REQUEST_SERVICE } from './shared/services/tokens';

@NgModule({
    imports: [
        AppModule,
        ServerModule,
        ModuleMapLoaderModule,
        ServerTransferStateModule
    ],
    providers: [
        { provide: REQUEST_SERVICE, useClass: ServerRequestService },
        { provide: REPLY_SERVICE, useClass: ServerReplyService }
    ],
    bootstrap: [ AppComponent ]
})
export class AppServerModule {
}
