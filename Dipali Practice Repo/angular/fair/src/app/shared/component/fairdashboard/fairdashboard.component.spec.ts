import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FairdashboardComponent } from './fairdashboard.component';

describe('FairdashboardComponent', () => {
  let component: FairdashboardComponent;
  let fixture: ComponentFixture<FairdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FairdashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FairdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
