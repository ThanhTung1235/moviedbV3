import {Component, Input, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {Recommendations} from '../../model/recommendations';

@Component({
  selector: 'app-recommendations-details',
  templateUrl: './recommendations-details.component.html',
  styleUrls: ['./recommendations-details.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecommendationsDetailsComponent implements OnInit {
  @Input('master') _master: string;
  @Input() recommend: Recommendations;

  constructor() {
  }

  ngOnInit() {
  }

}
