import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HobbiesChild1Component } from './hobbies-child1.component';

describe('HobbiesChild1Component', () => {
  let component: HobbiesChild1Component;
  let fixture: ComponentFixture<HobbiesChild1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HobbiesChild1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HobbiesChild1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
