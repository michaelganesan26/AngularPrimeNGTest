import { MessengerService } from './../../service/messenger.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-messagerecipient',
  templateUrl: './messagerecipient.component.html',
  styleUrls: ['./messagerecipient.component.css']
})
export class MessagerecipientComponent implements OnInit, OnDestroy {
  message: any;
  subscription: Subscription;

  constructor(private message$: MessengerService) {

    this.subscription = message$.getMessages().subscribe(msg => {
      console.log(`Message Received: ${msg} ${new Date().toUTCString()}`);
      this.message = msg;

    });

  }

  ngOnInit() {
  }






  ngOnDestroy() {

    //unsubscribe from the service
    this.subscription.unsubscribe();


  }

}
