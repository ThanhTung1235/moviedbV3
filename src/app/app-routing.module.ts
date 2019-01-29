import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './container/home-page/home-page.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'movie', loadChildren: './movies/movies.module#MoviesModule'},
  {path: 'tv', loadChildren: './tv/tv.module#TvModule'},
  {path: 'person', loadChildren: './person/person.module#PersonModule'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
