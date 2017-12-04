import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaulFilterComponent } from './raul-filter.component';

describe('RaulFilterComponent', () => {
  let component: RaulFilterComponent;
  let fixture: ComponentFixture<RaulFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaulFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaulFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
