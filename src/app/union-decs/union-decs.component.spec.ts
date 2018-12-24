import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnionDecsComponent } from './union-decs.component';

describe('UnionDecsComponent', () => {
  let component: UnionDecsComponent;
  let fixture: ComponentFixture<UnionDecsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnionDecsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnionDecsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
