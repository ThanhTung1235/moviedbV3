import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieTopRateComponent } from './movie-top-rate.component';

describe('MovieTopRateComponent', () => {
  let component: MovieTopRateComponent;
  let fixture: ComponentFixture<MovieTopRateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieTopRateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieTopRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
