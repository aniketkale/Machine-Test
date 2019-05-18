import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewustomerComponent } from './viewustomer.component';

describe('ViewustomerComponent', () => {
  let component: ViewustomerComponent;
  let fixture: ComponentFixture<ViewustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
