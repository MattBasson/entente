import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownFragmentComponent } from './dropdown-fragment.component';

describe('DropdownFragmentComponent', () => {
  let component: DropdownFragmentComponent;
  let fixture: ComponentFixture<DropdownFragmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DropdownFragmentComponent]
    });
    fixture = TestBed.createComponent(DropdownFragmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
