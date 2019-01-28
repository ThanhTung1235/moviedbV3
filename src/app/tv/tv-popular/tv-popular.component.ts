import { Component, OnInit } from '@angular/core';
import {MediaResponse} from '../../model/media-response';
import {MoviesService} from '../../movies/movies.service';
import {NavigationEnd, Router} from '@angular/router';
import {TvService} from '../tv.service';

@Component({
  selector: 'app-tv-popular',
  templateUrl: './tv-popular.component.html',
  styleUrls: ['./tv-popular.component.css']
})
export class TvPopularComponent implements OnInit {

  _media: MediaResponse;
  page = 1;
  master = 'tv';

  constructor(private tvService: TvService,
              private route: Router) {
  }

  ngOnInit() {
    this.route.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
    this.getPopularMovie(this.page);
  }

  pageChanged(event) {
    this.tvService.getPopular(event).subscribe(x => this._media = x);
  }

  getPopularMovie(page: number): void {
    this.tvService.getPopular(page).subscribe(x => this._media = x);
  }

}
