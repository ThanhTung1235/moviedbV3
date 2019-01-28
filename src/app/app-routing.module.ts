import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'movie', loadChildren: './movies/movies.module#MoviesModule'},
  {path: 'tv', loadChildren: './tv/tv.module#TvModule'},
  {path: 'person', loadChildren: './person/person.module#PersonModule'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
