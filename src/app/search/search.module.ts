import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { MovieSearchComponent } from './movie-search/movie-search.component';
import { PersonSearchComponent } from './person-search/person-search.component';
import { TvSearchComponent } from './tv-search/tv-search.component';
import { SearchDetailsComponent } from './search-details/search-details.component';
import {SharedModule} from '../shared/shared.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [MovieSearchComponent, PersonSearchComponent, TvSearchComponent, SearchDetailsComponent],
  imports: [
    CommonModule,
    SearchRoutingModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  exports: [SearchDetailsComponent]
})
export class SearchModule { }
