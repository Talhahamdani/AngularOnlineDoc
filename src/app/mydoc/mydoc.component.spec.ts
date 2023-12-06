import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MydocComponent } from './mydoc.component';

describe('MydocComponent', () => {
  let component: MydocComponent;
  let fixture: ComponentFixture<MydocComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MydocComponent]
    });
    fixture = TestBed.createComponent(MydocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
