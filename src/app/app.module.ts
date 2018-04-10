
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, InjectionToken } from '@angular/core';


import { AppComponent } from './app.component';
import { ProductService } from './service/product.service';
import { ProductTestService } from './service/product-test.service';

//Import global tokens
import { APP_CONFIG, appConfig } from './service/application.token'


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [{ provide: ProductService, useClass: ProductTestService },
  { provide: APP_CONFIG, useValue: appConfig }],
  bootstrap: [AppComponent]
})
export class AppModule { }
