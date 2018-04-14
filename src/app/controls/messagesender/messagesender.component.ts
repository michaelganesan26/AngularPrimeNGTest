import { MessengerService } from './../../service/messenger.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messagesender',
  templateUrl: './messagesender.component.html',
  styleUrls: ['./messagesender.component.css']
})
export class MessagesenderComponent implements OnInit {
 
  currentMessage:string = "";

  constructor(private messageService:MessengerService) { 

  }

  //On Key enter send the message
  enterKey(value:string){
       //console.log(`You just keyed this in: ${value}`);
     this.messageService.sendMessage(value);

  }

  clearMessages($event:MouseEvent){
 
     //clear the messages
     this.messageService.clearMessages();

  }


  ngOnInit() {
  }

}
