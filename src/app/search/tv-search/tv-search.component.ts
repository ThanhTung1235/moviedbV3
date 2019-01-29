import { Component, OnInit } from '@angular/core';
import {Search} from '../../model/search';
import {SearchService} from '../search.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-tv-search',
  templateUrl: './tv-search.component.html',
  styleUrls: ['./tv-search.component.css']
})
export class TvSearchComponent implements OnInit {

  search: Search;
  master = 'tv';
  constructor(private searchService: SearchService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      const keyword = params['query'];
      this.getTvSearch(keyword);
    });
  }

  getTvSearch(keyword: string): void {
    this.searchService.searchTv(keyword).subscribe(t => this.search = t);
  }

}
