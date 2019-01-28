import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MoviePopularComponent} from './movie-popular/movie-popular.component';
import {MovieDetailComponent} from './movie-detail/movie-detail.component';
import {MovieTopRateComponent} from './movie-top-rate/movie-top-rate.component';
import {MovieUpcomingComponent} from './movie-upcoming/movie-upcoming.component';
import {MovieNowPlayingComponent} from './movie-now-playing/movie-now-playing.component';

const routes: Routes = [
  {path: 'popular', component: MoviePopularComponent},
  {path: 'top-rate', component: MovieTopRateComponent},
  {path: 'upcoming', component: MovieUpcomingComponent},
  {path: 'now-playing', component: MovieNowPlayingComponent},
  {path: 'detail/:id', component: MovieDetailComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
