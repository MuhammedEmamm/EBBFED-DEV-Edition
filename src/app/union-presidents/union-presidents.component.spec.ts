import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnionPresidentsComponent } from './union-presidents.component';

describe('UnionPresidentsComponent', () => {
  let component: UnionPresidentsComponent;
  let fixture: ComponentFixture<UnionPresidentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnionPresidentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnionPresidentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
