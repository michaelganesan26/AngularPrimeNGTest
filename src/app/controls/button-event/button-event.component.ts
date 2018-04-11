import { element } from 'protractor';
import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

//Observable
import "rxjs/add/observable/fromEvent";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/buffer';



@Component({
  selector: 'app-button-event',
  templateUrl: './button-event.component.html',
  styleUrls: ['./button-event.component.css']
})
export class ButtonEventComponent implements OnInit, AfterViewInit {

  @Input('displayText') buttonText: string = "Default Button";
  @Input('doubleClick') doubleClickFlag: boolean = false;
  @Output() btnClick: EventEmitter<string> = new EventEmitter();

  @ViewChild("btnEvent") btnElement: ElementRef;

  mouseSingleClick$: Observable<MouseEvent>;
  mouseDoubleClick$: Observable<number>;

  constructor() {

  }

  ngOnInit() {
    //single click mouse 
    this.mouseSingleClick$ = Observable.fromEvent(this.btnElement.nativeElement, "click");

    //double click 
    this.mouseDoubleClick$ = Observable.fromEvent(this.btnElement.nativeElement, "click")
      .buffer(this.mouseSingleClick$.debounceTime(250)).map(x => x.length).filter(x => x === 2);

  }

  ngAfterViewInit() {
    if (!this.doubleClickFlag) {
      this.mouseSingleClick$.subscribe(x => {
        this.btnClick.emit("You just clicked me!");
      });
    }

    this.mouseDoubleClick$.subscribe(x => {
      this.btnClick.emit("You just double clicked me!");


    });




  }



}
