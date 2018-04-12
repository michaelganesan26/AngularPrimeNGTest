import { Component, OnInit, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-highlighttext',
  templateUrl: './highlighttext.component.html',
  styleUrls: ['./highlighttext.component.css']
})
export class HighlighttextComponent implements OnInit {

  @Input('headingText') headingText: string = "";
  @Input('normalText') normalSelectedText: boolean = false;
  selectedTextFlag: boolean = true;

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

}
