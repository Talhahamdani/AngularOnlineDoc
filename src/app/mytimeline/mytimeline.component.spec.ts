import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MytimelineComponent } from './mytimeline.component';

describe('MytimelineComponent', () => {
  let component: MytimelineComponent;
  let fixture: ComponentFixture<MytimelineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MytimelineComponent]
    });
    fixture = TestBed.createComponent(MytimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
