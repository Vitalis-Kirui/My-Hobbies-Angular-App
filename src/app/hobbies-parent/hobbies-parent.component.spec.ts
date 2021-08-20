import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HobbiesParentComponent } from './hobbies-parent.component';

describe('HobbiesParentComponent', () => {
  let component: HobbiesParentComponent;
  let fixture: ComponentFixture<HobbiesParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HobbiesParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HobbiesParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
