import { Component, OnInit } from '@angular/core';
import {Person} from '../../model/person';
import {MovieCredit} from '../../model/movie-credit';
import {PersonService} from '../person.service';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.css']
})
export class PersonDetailsComponent implements OnInit {
  _person: Person;
  credit: MovieCredit;
  gender = {
    1: 'Female',
    2: 'Male',
    0: '-'
  };

  constructor(
    private personService: PersonService,
    private activatedRoute: ActivatedRoute,
    private route: Router
  ) {
  }


  ngOnInit() {
    this.route.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
    this.activatedRoute.params.subscribe(routeParams => {
      this.getPersonDetail(routeParams.id);
      this.getCredit(routeParams.id);
    });
  }

  getPersonDetail(id: number): void {
    this.personService.getPersonDetail(id).subscribe(p => this._person = p);
  }

  getCredit(id: number): void {
    this.personService.getMovieCredit(id).subscribe(c => this.credit = c);
  }

}
