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
  UP = 38;
  DOWN = 40;
  currentIndex = -1;
  actived = 'background: #D7D7D7';

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
    const a = document.getElementsByClassName('search-result')[this.currentIndex];
  }

  update(values: string) {
    console.log(values);
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
    this.bool = false;
    this.currentIndex = -1;
    console.log(this.currentIndex);
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
    if (this.currentIndex !== -1) {
      this.route.navigateByUrl('movie/detail/' + this.searchs.results[this.currentIndex].id);
    } else {
      this.route.navigate([`/search`], {queryParams: {query: this.keyword}});
    }

  }

  down() {
    if (this.currentIndex < this.searchs.results.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }
    const a = document.getElementsByClassName('search-result')[this.currentIndex];
    console.log(this.currentIndex);
    a.classList.add('ac');

  }

  up() {
    if (this.currentIndex >= 0) {
      this.currentIndex -= 1;
    } else {
      this.currentIndex = this.searchs.results.length - 1;
    }
    const a = document.getElementsByClassName('search-result')[this.currentIndex];
    console.log(this.currentIndex);
    a.classList.add('ac');
    if (this.currentIndex - 1 < this.currentIndex) {
      a.classList.remove('ac');
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
