import {Component, Input, OnInit} from '@angular/core';
import {Recommendations} from '../../model/recommendations';

@Component({
  selector: 'app-recommendations-details',
  templateUrl: './recommendations-details.component.html',
  styleUrls: ['./recommendations-details.component.css']
})
export class RecommendationsDetailsComponent implements OnInit {
  @Input('master') _master: string;
  @Input() recommend: Recommendations;

  constructor() {
  }

  ngOnInit() {
  }

}
