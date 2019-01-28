import { Component, OnInit } from '@angular/core';
import {MediaResponse} from '../../model/media-response';
import {MoviesService} from '../movies.service';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-movie-top-rate',
  templateUrl: './movie-top-rate.component.html',
  styleUrls: ['./movie-top-rate.component.css']
})
export class MovieTopRateComponent implements OnInit {

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
    this.getTopRate(this.page);
  }

  pageChanged(event) {
    this.movieService.getToprate(event).subscribe(x => this._media = x);
  }

  getTopRate(page: number): void {
    this.movieService.getToprate(page).subscribe(x => this._media = x);
  }


}
