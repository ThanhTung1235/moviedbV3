import { Component, OnInit } from '@angular/core';
import {MediaResponse} from '../../model/media-response';
import {TvService} from '../tv.service';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-tv-top-rate',
  templateUrl: './tv-top-rate.component.html',
  styleUrls: ['./tv-top-rate.component.css']
})
export class TvTopRateComponent implements OnInit {

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
    this.getTopRate(this.page);
  }

  pageChanged(event) {
    this.tvService.getTopRate(event).subscribe(x => this._media = x);
  }

  getTopRate(page: number): void {
    this.tvService.getTopRate(page).subscribe(x => this._media = x);
  }

}
