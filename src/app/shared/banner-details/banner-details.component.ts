import {Component, Input, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {Media} from '../../model/media';
import {Videos} from '../../model/videos';

@Component({
  selector: 'app-banner-details',
  templateUrl: './banner-details.component.html',
  styleUrls: ['./banner-details.component.css'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class BannerDetailsComponent implements OnInit {
  @Input() movie: Media;
  @Input() video: Videos;
  urlImage = 'https://image.tmdb.org/t/p/w1400_and_h450_face';
  youtubeUrl = 'https://www.youtube.com/embed/';
  constructor() {
  }

  ngOnInit() {
  }

}
