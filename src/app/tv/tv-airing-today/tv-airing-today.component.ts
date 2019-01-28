import { Component, OnInit } from '@angular/core';
import {MediaResponse} from '../../model/media-response';
import {TvService} from '../tv.service';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-tv-airing-today',
  templateUrl: './tv-airing-today.component.html',
  styleUrls: ['./tv-airing-today.component.css']
})
export class TvAiringTodayComponent implements OnInit {

  _media: MediaResponse;
  page = 1;
  master = 'tv';

  constructor(private tvService: TvService,
              private route: Router) {
  }

  ngOnInit() {
    this.route.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
    this.getAiring(this.page);
  }

  pageChanged(event) {
    this.tvService.getAiringToday(event).subscribe(x => this._media = x);
  }

  getAiring(page: number): void {
    this.tvService.getAiringToday(page).subscribe(x => this._media = x);
  }

}
