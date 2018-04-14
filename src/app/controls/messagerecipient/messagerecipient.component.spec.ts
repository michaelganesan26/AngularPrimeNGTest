import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagerecipientComponent } from './messagerecipient.component';

describe('MessagerecipientComponent', () => {
  let component: MessagerecipientComponent;
  let fixture: ComponentFixture<MessagerecipientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessagerecipientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagerecipientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
