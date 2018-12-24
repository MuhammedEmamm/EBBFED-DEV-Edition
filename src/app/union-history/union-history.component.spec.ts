import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnionHistoryComponent } from './union-history.component';

describe('UnionHistoryComponent', () => {
  let component: UnionHistoryComponent;
  let fixture: ComponentFixture<UnionHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnionHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnionHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
