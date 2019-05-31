import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { TransferHttpCacheModule } from '@hapiness/ng-universal-transfer-http';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MyHttpInterceptor } from './shared/interceptors/my-http.interceptor';
import { ClientReplyService } from './shared/services/client-reply.service';
import { ClientRequestService } from './shared/services/client-request.service';
import { HttpService } from './shared/services/http.service';
import { LoggerService } from './shared/services/logger.service';
import { REPLY_SERVICE, REQUEST_SERVICE } from './shared/services/tokens';
import { MyComponent } from './my/my.component';
import { RedirectComponent } from './redirect/redirect.component';

@NgModule({
    declarations: [
        AppComponent, HomeComponent, MyComponent, RedirectComponent
    ],
    imports: [
        BrowserModule.withServerTransition({ appId: 'ng-universal-example' }),
        TransferHttpCacheModule.withConfig({
            prodMode: environment.production,
            headerNameToOverrideUrlInKeyCachingGeneration: 'x-key-client-url'
        }),
        HttpClientModule,
        AppRoutingModule,
        MatCardModule
    ],
    providers: [
        { provide: REQUEST_SERVICE, useClass: ClientRequestService },
        { provide: REPLY_SERVICE, useClass: ClientReplyService },
        { provide: HTTP_INTERCEPTORS, useClass: MyHttpInterceptor, multi: true },
        LoggerService,
        HttpService
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}
