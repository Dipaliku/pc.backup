import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Consumer4Component } from './consumer4.component';

describe('Consumer4Component', () => {
  let component: Consumer4Component;
  let fixture: ComponentFixture<Consumer4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Consumer4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Consumer4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
