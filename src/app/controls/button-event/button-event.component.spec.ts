import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonEventComponent } from './button-event.component';

describe('ButtonEventComponent', () => {
  let component: ButtonEventComponent;
  let fixture: ComponentFixture<ButtonEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
