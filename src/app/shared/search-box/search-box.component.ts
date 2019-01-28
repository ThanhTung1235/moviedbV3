import {Component, OnInit} from '@angular/core';
import {Search} from '../../model/search';
import {Router} from '@angular/router';
import {SearchService} from '../../search/search.service';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {

  value = '';
  searchs: Search;
  keyword = '';


  constructor(
    private searchService: SearchService,
    private route: Router
  ) {
  }

  ngOnInit() {
  }

  update(value: string): void {
    const auto = document.getElementById('test');
    this.value = value;
    console.log(value);
    if (value.length === 0) {
      auto.classList.add('d-none');
      return;
    } else {
      auto.classList.remove('d-none');
      this.searchService.searchMulti(value).subscribe(s => this.searchs = s);
    }
    window.onscroll = function () {
      auto.classList.add('d-none');
      return;
    };
  }

  hide() {
    const test = document.getElementById('test');
    test.classList.add('d-none');
  }

  test(query) {
    this.hide();
    this.route.navigate([`/search`], {queryParams: {query: this.keyword}});
  }

}