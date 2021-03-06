import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import {MediaResponse} from '../../model/media-response';
import {MoviesService} from '../movies.service';
import {NavigationEnd, Router} from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-movie-now-playing',
  templateUrl: './movie-now-playing.component.html',
  styleUrls: ['./movie-now-playing.component.css'],
})
export class MovieNowPlayingComponent implements OnInit {

  _media: MediaResponse;
  page = 1;
  master = 'movie';
  data: any;
  constructor(private movieService: MoviesService,
              private route: Router) {
  }

  ngOnInit() {
    this.getNowPlaying(this.page);
  }

  pageChanged(event) {
    this.movieService.getNow_playing(event).subscribe(x => this._media = x);
  }

  getNowPlaying(page: number) {
    this.movieService.getNow_playing(page).subscribe(x => this._media = x);
  }
}
