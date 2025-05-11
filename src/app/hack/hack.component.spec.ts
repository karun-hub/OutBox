import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HackComponent } from './hack.component';

describe('HackComponent', () => {
  let component: HackComponent;
  let fixture: ComponentFixture<HackComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HackComponent]
    });
    fixture = TestBed.createComponent(HackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
