import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewmodeloSpecComponent } from './viewmodelo-spec.component';

describe('ViewmodeloSpecComponent', () => {
  let component: ViewmodeloSpecComponent;
  let fixture: ComponentFixture<ViewmodeloSpecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewmodeloSpecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewmodeloSpecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
