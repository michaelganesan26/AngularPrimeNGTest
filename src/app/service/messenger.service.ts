//This is a messenger app for inter component communication

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class MessengerService {

  private subject = new Subject<any>();

  constructor() { }

  sendMessage(message: string) {
    this.subject.next(message);

  }

  clearMessages(){
    this.subject.next();

  }

  //Return the messages
  getMessages():Observable<any>{

    return this.subject.asObservable();

  }



}
