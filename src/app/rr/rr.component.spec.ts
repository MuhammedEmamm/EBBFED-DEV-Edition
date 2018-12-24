import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RRComponent } from './rr.component';

describe('RRComponent', () => {
  let component: RRComponent;
  let fixture: ComponentFixture<RRComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RRComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
