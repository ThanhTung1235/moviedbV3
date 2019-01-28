import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MoviesRoutingModule} from './movies-routing.module';
import {MoviePopularComponent} from './movie-popular/movie-popular.component';
import {SharedModule} from '../shared/shared.module';
import {BrowserModule} from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieTopRateComponent } from './movie-top-rate/movie-top-rate.component';
import { MovieUpcomingComponent } from './movie-upcoming/movie-upcoming.component';
import { MovieNowPlayingComponent } from './movie-now-playing/movie-now-playing.component';

@NgModule({
  declarations: [MoviePopularComponent, MovieDetailComponent, MovieTopRateComponent, MovieUpcomingComponent, MovieNowPlayingComponent],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    SharedModule,
    NgbModule
  ]
})
export class MoviesModule {
}
