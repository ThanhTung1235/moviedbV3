import {Component, OnInit} from '@angular/core';
import {MediaResponse} from '../../model/media-response';
import {MoviesService} from '../movies.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-movie-upcoming',
  templateUrl: './movie-upcoming.component.html',
  styleUrls: ['./movie-upcoming.component.css']
})
export class MovieUpcomingComponent implements OnInit {

  _media: MediaResponse;
  page = 2;
  master = 'movie';
  data: any;

  constructor(private movieService: MoviesService,
              private route: Router) {
  }

  ngOnInit() {
    this.getUpComing(this.page);
  }

  pageChanged(event) {
    this.movieService.getUpComing(event).subscribe(x => this._media = x);
  }

  getUpComing(page: number) {
    this.movieService.getUpComing(page).subscribe(x => this._media = x);
  }

}
