import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector, NgZone, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from '@core/core.module';
import { environment } from '@env/environment';
import { CultureModule } from '@orxe-culture/angular';
import { SharedModule } from '@shared/shared.module';
import { CultureTranslatorComponent } from './culture-translator/culture-translator.component';

@NgModule({
  declarations: [
    AppComponent,
    CultureTranslatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    CultureModule,
    SharedModule
  ],
  providers: [],
  bootstrap: !environment.production ? [AppComponent] : [],
  entryComponents: !environment.production ? [] : [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
  constructor(
    private injector: Injector,
    private ngZone: NgZone
  ) {
  }

  ngDoBootstrap() {
    const elm = createCustomElement(AppComponent, {
      injector: this.injector,
    }) as any;
    if (!customElements.get('orxe-hotel-button')){
        customElements.define('orxe-hotel-button', elm);
      }
  }
}
