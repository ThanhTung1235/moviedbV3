import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TvRoutingModule } from './tv-routing.module';
import { TvPopularComponent } from './tv-popular/tv-popular.component';
import {SharedModule} from '../shared/shared.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { TvDetailsComponent } from './tv-details/tv-details.component';
import { TvTopRateComponent } from './tv-top-rate/tv-top-rate.component';
import { TvOnTvComponent } from './tv-on-tv/tv-on-tv.component';
import { TvAiringTodayComponent } from './tv-airing-today/tv-airing-today.component';

@NgModule({
  declarations: [TvPopularComponent, TvDetailsComponent, TvTopRateComponent, TvOnTvComponent, TvAiringTodayComponent],
  imports: [
    CommonModule,
    TvRoutingModule,
    SharedModule,
    NgbModule
  ]
})
export class TvModule { }
