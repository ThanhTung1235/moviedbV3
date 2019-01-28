import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonRoutingModule } from './person-routing.module';
import { PopularComponent } from './popular/popular.component';
import { PersonDetailsComponent } from './person-details/person-details.component';
import {SharedModule} from '../shared/shared.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [PopularComponent, PersonDetailsComponent],
  imports: [
    CommonModule,
    PersonRoutingModule,
    SharedModule,
    NgbModule
  ]
})
export class PersonModule { }
