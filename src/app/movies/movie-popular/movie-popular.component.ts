import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {MediaResponse} from '../../model/media-response';
import {MoviesService} from '../movies.service';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-movie-popular',
  templateUrl: './movie-popular.component.html',
  styleUrls: ['./movie-popular.component.css']
})
export class MoviePopularComponent implements OnInit {

  _media: MediaResponse;
  page = 1;
  master = 'movie';

  constructor(
    private movieService: MoviesService,
    private route: Router,
  ) {
  }

  ngOnInit() {
    this.getPopularMovie(this.page);
  }

  pageChanged(event) {
    this.movieService.getMovie(event).subscribe(x => this._media = x);
  }

  getPopularMovie(page: number): void {
    this.movieService.getMovie(page).subscribe(x => this._media = x);
  }

}
