import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { MoviesService } from '../movies.service';
import { Key } from '../../model/key';
import { Recommendations } from '../../model/recommendations';
import { Videos } from '../../model/videos';
import { Credits } from '../../model/credits';
import { Media } from '../../model/media';
import { NgxSpinnerService } from 'ngx-spinner';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit, OnDestroy {

  master = 'movie';
  _movie: Media;
  _credits: Credits;
  _videos: Videos;
  _recommend: Recommendations;
  _key: Key;
  youtubeUrl = 'https://www.youtube.com/embed/';
  urlImage = 'https://image.tmdb.org/t/p/w1400_and_h450_face';
  imgCollection = 'https://image.tmdb.org/t/p/w1440_and_h320_bestv2';
  private _destroyed$ = new Subject();
  constructor(
    private detailService: MoviesService,
    private activatedRoute: ActivatedRoute,
    private route: Router,
  ) {
  }


  ngOnInit() {
    this.activatedRoute.params.subscribe(routeParams => {
      this.getMovie(routeParams.id);
      this.getCast(routeParams.id);
      this.getTrailer(routeParams.id);
      this.getRecommend_movie(routeParams.id);
      this.getKeyWord(routeParams.id);
    });

  }

  getMovie(id: number): void {
    this.detailService.getMovieDetail(id).pipe(takeUntil(this._destroyed$)).subscribe(e => this._movie = e);
  }

  getCast(id: number) {
    this.detailService.getCastMovie(id).pipe(takeUntil(this._destroyed$)).subscribe(c => this._credits = c);
  }

  getTrailer(id: number) {
    this.detailService.getVideos(id).pipe(takeUntil(this._destroyed$)).subscribe(t => this._videos = t);
  }

  getRecommend_movie(id: number) {
    this.detailService.getRecommend(id).pipe(takeUntil(this._destroyed$)).subscribe(a => this._recommend = a);
  }

  getKeyWord(id: number): void {
    this.detailService.getKeyWord(id).pipe(takeUntil(this._destroyed$)).subscribe(k => this._key = k);
  }
  ngOnDestroy() {
    this._destroyed$.next();
    this._destroyed$.complete();
  }
}
