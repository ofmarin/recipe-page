import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrepTime } from './prep-time';

describe('PrepTime', () => {
  let component: PrepTime;
  let fixture: ComponentFixture<PrepTime>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrepTime],
    }).compileComponents();

    fixture = TestBed.createComponent(PrepTime);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
