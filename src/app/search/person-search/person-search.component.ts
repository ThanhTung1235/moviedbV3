import {Component, OnInit} from '@angular/core';
import {SearhPerson} from '../../model/search';
import {SearchService} from '../search.service';
import {ActivatedRoute} from '@angular/router';
import {fadeAnimation} from '../../router.animations';

@Component({
  selector: 'app-person-search',
  templateUrl: './person-search.component.html',
  styleUrls: ['./person-search.component.css'],
  animations: [fadeAnimation],
})
export class PersonSearchComponent implements OnInit {

  searchPerson: SearhPerson;

  constructor(
    private searchService: SearchService,
    private activated: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.activated.queryParams.subscribe(params => {
      const keyword = params['query'];
      this.getPersonSearch(keyword);
    });
  }

  getPersonSearch(keyword: string): void {
    this.searchService.searchPerson(keyword).subscribe(p => this.searchPerson = p);
  }

}
