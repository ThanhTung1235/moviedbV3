import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoTrailerComponent } from './video-trailer.component';

describe('VideoTrailerComponent', () => {
  let component: VideoTrailerComponent;
  let fixture: ComponentFixture<VideoTrailerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoTrailerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoTrailerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
