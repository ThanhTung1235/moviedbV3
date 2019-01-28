import { Component, OnInit } from '@angular/core';
import {MediaResponse} from '../../model/media-response';
import {MoviesService} from '../movies.service';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-movie-now-playing',
  templateUrl: './movie-now-playing.component.html',
  styleUrls: ['./movie-now-playing.component.css']
})
export class MovieNowPlayingComponent implements OnInit {

  _media: MediaResponse;
  page = 1;
  master = 'movie';

  constructor(private movieService: MoviesService,
              private route: Router) {
  }

  ngOnInit() {
    this.route.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
    this.getNowPlaying(this.page);
  }

  pageChanged(event) {
    this.movieService.getNow_playing(event).subscribe(x => this._media = x);
  }

  getNowPlaying(page: number): void {
    this.movieService.getNow_playing(page).subscribe(x => this._media = x);
  }
}
