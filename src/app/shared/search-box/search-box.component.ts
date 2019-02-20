import {Component, OnInit, ElementRef, HostListener} from '@angular/core';
import {Search} from '../../model/search';
import {NavigationEnd, Router, NavigationStart} from '@angular/router';
import {SearchService} from '../../search/search.service';
import {visitProjectedRenderNodes} from '@angular/core/src/view/util';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {
  value = '';
  searchs: Search;
  keyword = '';
  bool = true;
  currentIndex = 0;

  constructor(
    private searchService: SearchService,
    private route: Router,
  ) {
    this.route.events.subscribe(ev => {
      if (ev instanceof NavigationEnd) {
        this.bool = true;
      }
    });
  }

  ngOnInit() {
  }

  update(values: string) {
    console.log(values);
    this.currentIndex = -1;
    this.bool = false;
    const auto = document.getElementById('test');
    const overlay = document.getElementById('overlay');
    this.value = values;
    if (values.length === 0) {
      auto.classList.add('d-none');
      return;
    } else {
      auto.classList.remove('d-none');
      overlay.style.display = 'block';
      this.searchService.searchMulti(values).subscribe(s => this.searchs = s);
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

  hideSuggest() {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'none';
    this.hide();
  }

  navigate(query) {
    if (this.currentIndex === -1) {
      this.route.navigate([`/search`], {queryParams: {query: this.keyword}});
    } else {
      this.route.navigateByUrl('movie/detail/' + this.searchs.results[this.currentIndex].id);
    }

  }

  down() {
    if (this.currentIndex < this.searchs.results.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }

  }

  up() {
    if (this.currentIndex >= 0) {
      this.currentIndex -= 1;
    } else {
      this.currentIndex = this.searchs.results.length - 1;
    }

  }

  UpToDown(event) {
    if (this.searchs != null) {
      switch (event.key) {
        case 'ArrowDown':
          this.down();
          break;
        case 'ArrowUp':
          this.up();
          break;
        default:
          break;
      }
    }
  }
}
