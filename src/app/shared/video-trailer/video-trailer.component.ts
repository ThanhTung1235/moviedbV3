import {Component, Input, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {Videos} from '../../model/videos';

@Component({
  selector: 'app-video-trailer',
  templateUrl: './video-trailer.component.html',
  styleUrls: ['./video-trailer.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VideoTrailerComponent implements OnInit {
  @Input() videos: Videos;
  youtubeUrl = 'https://www.youtube.com/embed/';
  constructor() { }

  ngOnInit() {
  }

}
