import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnionDecDetailsComponent } from './union-dec-details.component';

describe('UnionDecDetailsComponent', () => {
  let component: UnionDecDetailsComponent;
  let fixture: ComponentFixture<UnionDecDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnionDecDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnionDecDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
