import { Component, OnInit } from '@angular/core';
import {Search} from '../../model/search';
import {SearchService} from '../search.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent implements OnInit {
  search: Search;
  master = 'movie';
  constructor(
    private searchService: SearchService,
    private activated: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.activated.queryParams.subscribe(params => {
      const keyword = params['query'];
      this.getMovieSearch(keyword);
    });
  }

  getMovieSearch(keyword: string): void {
    this.searchService.searchMovie(keyword).subscribe(s => this.search = s);
  }

}
