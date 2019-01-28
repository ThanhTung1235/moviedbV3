import { Component, OnInit } from '@angular/core';
import {MediaResponse} from '../../model/media-response';
import {TvService} from '../tv.service';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-tv-on-tv',
  templateUrl: './tv-on-tv.component.html',
  styleUrls: ['./tv-on-tv.component.css']
})
export class TvOnTvComponent implements OnInit {

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
    this.GetOntv(this.page);
  }

  pageChanged(event) {
    this.tvService.getOnTv(event).subscribe(x => this._media = x);
  }

  GetOntv(page: number): void {
    this.tvService.getOnTv(page).subscribe(x => this._media = x);
  }

}
