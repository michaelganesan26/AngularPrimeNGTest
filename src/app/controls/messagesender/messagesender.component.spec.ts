import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagesenderComponent } from './messagesender.component';

describe('MessagesenderComponent', () => {
  let component: MessagesenderComponent;
  let fixture: ComponentFixture<MessagesenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessagesenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagesenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
