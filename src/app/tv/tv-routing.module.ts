import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TvPopularComponent} from './tv-popular/tv-popular.component';
import {TvDetailsComponent} from './tv-details/tv-details.component';
import {TvTopRateComponent} from './tv-top-rate/tv-top-rate.component';
import {TvOnTvComponent} from './tv-on-tv/tv-on-tv.component';
import {TvAiringTodayComponent} from './tv-airing-today/tv-airing-today.component';

const routes: Routes = [
  {path: 'popular', component: TvPopularComponent},
  {path: 'top-rate', component: TvTopRateComponent},
  {path: 'on-tv', component: TvOnTvComponent},
  {path: 'airing-today', component: TvAiringTodayComponent},
  {path: 'detail/:id', component: TvDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TvRoutingModule { }
