import {importProvidersFrom, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CustomPreloadingStrategy} from "./services/custom-preloading-strategy.service";
import {provideRouter, RouterOutlet} from "@angular/router";
import {AppRoutingModule, routes} from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    AppRoutingModule
  ],
  providers: [
    CustomPreloadingStrategy,
    provideRouter(routes)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
