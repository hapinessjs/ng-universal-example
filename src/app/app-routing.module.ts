import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MyComponent } from './my/my.component';
import { RedirectComponent } from './redirect/redirect.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'my', component: MyComponent },
    { path: 'redirect', component: RedirectComponent },
    { path: 'lazy', loadChildren: () => import('./lazy/lazy.module').then(m => m.LazyModule) }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {
}
