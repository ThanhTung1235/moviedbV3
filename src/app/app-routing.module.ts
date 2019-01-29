import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomePageComponent} from './container/home-page/home-page.component';
import {SearchDetailsComponent} from './search/search-details/search-details.component';
import {MovieSearchComponent} from './search/movie-search/movie-search.component';
import {TvSearchComponent} from './search/tv-search/tv-search.component';
import {PersonSearchComponent} from './search/person-search/person-search.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'movie', loadChildren: './movies/movies.module#MoviesModule'},
  {path: 'tv', loadChildren: './tv/tv.module#TvModule'},
  {path: 'person', loadChildren: './person/person.module#PersonModule'},
  {
    path: 'search', component: SearchDetailsComponent, children: [
      {path: '', redirectTo: 'movie', pathMatch: 'full'},
      {path: 'movie', component: MovieSearchComponent},
      {path: 'tv', component: TvSearchComponent},
      {path: 'people', component: PersonSearchComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
