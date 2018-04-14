import { BillTypes } from './service/enum.constants';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, InjectionToken } from '@angular/core';
import { NgForm, FormsModule,ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ProductService } from './service/product.service';
import { ProductTestService } from './service/product-test.service';
import { MessengerService } from './service/messenger.service';

//Import global tokens
import { APP_CONFIG, appConfig } from './service/application.token';
import { ButtonEventComponent } from './controls/button-event/button-event.component';
import { HighlighttextComponent } from './controls/highlighttext/highlighttext.component';
import { ChildComponentComponent } from './controls/child-component/child-component.component';
import { MessagerecipientComponent } from "./controls/messagerecipient/messagerecipient.component";
import { MessagesenderComponent } from './controls/messagesender/messagesender.component'



@NgModule({
  declarations: [
    AppComponent,
    ButtonEventComponent,
    HighlighttextComponent,
    ChildComponentComponent,
    MessagerecipientComponent,
    MessagesenderComponent,
  ],
  imports: [
    BrowserModule,FormsModule,ReactiveFormsModule
  ],
  providers: [{ provide: ProductService, useClass: ProductTestService },
  { provide: APP_CONFIG, useValue: appConfig },MessengerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
