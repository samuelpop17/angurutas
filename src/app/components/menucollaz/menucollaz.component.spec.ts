import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenucollazComponent } from './menucollaz.component';

describe('MenucollazComponent', () => {
  let component: MenucollazComponent;
  let fixture: ComponentFixture<MenucollazComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenucollazComponent]
    });
    fixture = TestBed.createComponent(MenucollazComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
