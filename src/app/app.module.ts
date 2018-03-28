import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material';
import { TransferHttpCacheModule } from '@hapiness/ng-universal-transfer-http';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { APP_ROUTES } from './app.routes';
import { ClientRequestService } from './shared/services/client-request.service';
import { REQUEST_SERVICE, LOGGER_SERVICE } from './shared/services/tokens';
import { MyHttpInterceptor } from './shared/interceptors/my-http.interceptor';
import { HttpService } from './shared/services/http.service';
import { ClientLoggerService } from './shared/services/client-logger.service';

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
    APP_ROUTES,
    MatCardModule
  ],
  providers: [
    { provide: REQUEST_SERVICE, useClass: ClientRequestService },
    { provide: LOGGER_SERVICE, useClass: ClientLoggerService },
    { provide: HTTP_INTERCEPTORS, useClass: MyHttpInterceptor, multi: true },
    HttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
