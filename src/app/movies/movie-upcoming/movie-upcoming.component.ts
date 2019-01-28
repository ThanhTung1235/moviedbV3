import { Component, OnInit } from '@angular/core';
import {MediaResponse} from '../../model/media-response';
import {MoviesService} from '../movies.service';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-movie-upcoming',
  templateUrl: './movie-upcoming.component.html',
  styleUrls: ['./movie-upcoming.component.css']
})
export class MovieUpcomingComponent implements OnInit {

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
    this.getUpComing(this.page);
  }

  pageChanged(event) {
    this.movieService.getUpComing(event).subscribe(x => this._media = x);
  }

  getUpComing(page: number): void {
    this.movieService.getUpComing(page).subscribe(x => this._media = x);
  }

}
