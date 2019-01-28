import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PopularComponent} from './popular/popular.component';
import {PersonDetailsComponent} from './person-details/person-details.component';

const routes: Routes = [
  {path: '', component: PopularComponent},
  {path: 'details/:id', component: PersonDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonRoutingModule {
}
