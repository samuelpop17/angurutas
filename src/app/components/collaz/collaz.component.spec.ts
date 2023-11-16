import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollazComponent } from './collaz.component';

describe('CollazComponent', () => {
  let component: CollazComponent;
  let fixture: ComponentFixture<CollazComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CollazComponent]
    });
    fixture = TestBed.createComponent(CollazComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
