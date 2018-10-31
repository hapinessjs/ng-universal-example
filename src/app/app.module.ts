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
import { ClientLoggerService } from './shared/services/client-logger.service';
import { ClientRequestService } from './shared/services/client-request.service';
import { HttpService } from './shared/services/http.service';
import { LOGGER_SERVICE, REQUEST_SERVICE } from './shared/services/tokens';

@NgModule({
    declarations: [
        AppComponent, HomeComponent
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
        { provide: LOGGER_SERVICE, useClass: ClientLoggerService },
        { provide: HTTP_INTERCEPTORS, useClass: MyHttpInterceptor, multi: true },
        HttpService
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}
