import {Component, OnInit, ChangeDetectorRef} from '@angular/core';
import {MediaResponse} from '../../model/media-response';
import {MoviesService} from '../movies.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-movie-top-rate',
  templateUrl: './movie-top-rate.component.html',
  styleUrls: ['./movie-top-rate.component.css']
})
export class MovieTopRateComponent implements OnInit {

  _media: MediaResponse;
  page = 2;
  master = 'movie';

  constructor(private movieService: MoviesService,
              private route: Router) {
  }

  ngOnInit() {
    this.getTopRate(this.page);
  }

  pageChanged(event) {
    this.movieService.getToprate(event).subscribe(x => this._media = x);
  }

  getTopRate(page: number): void {
    this.movieService.getToprate(page).subscribe(x => this._media = x);
  }
}
