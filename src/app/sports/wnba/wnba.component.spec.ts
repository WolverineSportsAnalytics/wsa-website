import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WNBAComponent } from './wnba.component';

describe('WNBAComponent', () => {
  let component: WNBAComponent;
  let fixture: ComponentFixture<WNBAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WNBAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WNBAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
