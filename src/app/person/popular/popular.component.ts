import { Component, OnInit } from '@angular/core';
import {PersonResponse} from '../../model/person-response';
import {PersonService} from '../person.service';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent implements OnInit {

  _personResponse: PersonResponse;
  page = 1;

  constructor(private personService: PersonService,
              private route: Router) {
  }

  ngOnInit() {
    this.route.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
    this.getPersonPopular();
  }

  getPersonPopular(): void {
    this.personService.getPersonPopular(this.page).subscribe(p => this._personResponse = p);
  }

  pageChanged(event) {
    this.personService.getPersonPopular(event).subscribe(e => this._personResponse = e);
  }

}
