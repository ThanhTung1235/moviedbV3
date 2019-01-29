import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MovieSearchComponent} from './movie-search/movie-search.component';
import {TvSearchComponent} from './tv-search/tv-search.component';
import {SearchDetailsComponent} from './search-details/search-details.component';
import {PersonSearchComponent} from './person-search/person-search.component';

const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchRoutingModule {
}
