import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NFLComponent } from './nfl.component';

describe('NFLComponent', () => {
  let component: NFLComponent;
  let fixture: ComponentFixture<NFLComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NFLComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NFLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
