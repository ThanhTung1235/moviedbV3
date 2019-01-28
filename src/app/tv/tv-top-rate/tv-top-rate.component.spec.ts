import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvTopRateComponent } from './tv-top-rate.component';

describe('TvTopRateComponent', () => {
  let component: TvTopRateComponent;
  let fixture: ComponentFixture<TvTopRateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvTopRateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvTopRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
