import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {PushNotificationComponent} from './app.component.pushnotifactions';
import {PushNotificationsService} from './push.notification.service';

@NgModule({
  declarations: [
    AppComponent,
    PushNotificationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [PushNotificationsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
