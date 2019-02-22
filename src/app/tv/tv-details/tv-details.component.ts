import {Component, OnDestroy, OnInit} from '@angular/core';
import {Media} from '../../model/media';
import {Credits} from '../../model/credits';
import {Videos} from '../../model/videos';
import {Recommendations} from '../../model/recommendations';
import {Key} from '../../model/key';
import {MoviesService} from '../../movies/movies.service';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {TvService} from '../tv.service';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-tv-details',
  templateUrl: './tv-details.component.html',
  styleUrls: ['./tv-details.component.css']
})
export class TvDetailsComponent implements OnInit, OnDestroy {

  master = 'tv';
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
    private detailService: TvService,
    private activatedRoute: ActivatedRoute,
    private route: Router,
  ) {
  }


  ngOnInit() {
    this.route.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
    this.activatedRoute.params.subscribe(routeParams => {
      this.getMovie(routeParams.id);
      this.getCast(routeParams.id);
      this.getTrailer(routeParams.id);
      this.getRecommend_movie(routeParams.id);
      this.getKeyWord(routeParams.id);
    });

  }

  getMovie(id: number): void {
    this.detailService.getTvDetails(id).pipe(takeUntil(this._destroyed$)).subscribe(m => this._movie = m);
  }

  getCast(id: number) {
    this.detailService.getCast(id).pipe(takeUntil(this._destroyed$)).subscribe(m => this._credits = m);
  }

  getTrailer(id: number) {
    this.detailService.getVideo(id).pipe(takeUntil(this._destroyed$)).subscribe(t => this._videos = t);
  }

  getRecommend_movie(id: number) {
    this.detailService.getRecommend(id).pipe(takeUntil(this._destroyed$)).subscribe(a => this._recommend = a);
  }

  getKeyWord(id: number): void {
    this.detailService.getKeyword(id).subscribe(k => this._key = k);
  }

  ngOnDestroy(): void {
    this._destroyed$.next();
    this._destroyed$.complete();
  }
}
