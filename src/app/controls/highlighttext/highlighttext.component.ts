import { Component, OnInit, Input } from '@angular/core';
import { NgClass } from '@angular/common';
import { FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-highlighttext',
  templateUrl: './highlighttext.component.html',
  styleUrls: ['./highlighttext.component.css']
})
export class HighlighttextComponent implements OnInit {

  @Input('headingText') headingText: string = "";
  @Input('normalText') normalSelectedText: boolean = false;
  selectedTextFlag: boolean = true;
   
  //this is a free form control
  name = new FormControl('',[Validators.required,Validators.minLength(5)]);
  country = new FormControl({value:"Michael is cool",disabled: true});


  testValue:string; //This is for two way data binding




  constructor() { }

  setHeaderText() {
    console.log(this.normalSelectedText);
    if (!this.normalSelectedText) {

      this.selectedTextFlag = !this.normalSelectedText;
    }
    else {
      this.selectedTextFlag = false;
    }

  }

  ngOnInit() {

    this.setHeaderText();

  }

  printConsoleMessage(message: string) {
    console.log(`Your input box message is: ${message}`);


  }


}
