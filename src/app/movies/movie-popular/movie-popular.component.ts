import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {MediaResponse} from '../../model/media-response';
import {MoviesService} from '../movies.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-movie-popular',
  templateUrl: './movie-popular.component.html',
  styleUrls: ['./movie-popular.component.css'],
})
export class MoviePopularComponent implements OnInit {
  // _media: Observable<MediaResponse>;
  _media: MediaResponse;
  page = 1;
  master = 'movie';

  constructor(
    private movieService: MoviesService
  ) {
  }

  ngOnInit() {
    this.getPopularMovie(this.page);
  }

  pageChanged(event) {
    // this._media = this.movieService.getMovie(event);
    this.movieService.getMovie(event).subscribe(x => this._media = x);
  }

  getPopularMovie(page: number) {
    // this._media = this.movieService.getMovie(page);
    this.movieService.getMovie(page).subscribe(x => this._media = x);
  }

}
