import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material';
import { TransferHttpCacheModule } from '@hapiness/ng-universal-transfer-http';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { APP_ROUTES } from './app.routes';

@NgModule({
  declarations: [
    AppComponent, HomeComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-universal-example' }),
    TransferHttpCacheModule.enableOnProdMode(environment.production),
    HttpClientModule,
    APP_ROUTES,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
