import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MLBComponent } from './mlb.component';

describe('MLBComponent', () => {
  let component: MLBComponent;
  let fixture: ComponentFixture<MLBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MLBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MLBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
