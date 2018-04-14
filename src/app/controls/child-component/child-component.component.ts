import { ISponsor } from './child-component-intefaces';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {

  @Input("message") message = this.message || "Enter a sponsor";
  @Output("sponsorData") sponsorEvent:EventEmitter<ISponsor> = 
    new EventEmitter<ISponsor>();


  constructor() { }

  ngOnInit() {
  }

  SetSponsor(mySponsor:string){

     console.log(`Your current Sponsor is: ${mySponsor}`);

     let currentSponsor:ISponsor = <ISponsor>{id:1,name:mySponsor,endDate:"",startDate:"01/01/2018"};

     console.log(`Current Sponsor: ${currentSponsor.name}`);
      this.sponsorEvent.emit(currentSponsor);



  }




}
