import {Component, Input, OnInit} from '@angular/core';
import {MediaResponse} from '../../model/media-response';

@Component({
  selector: 'app-media-card',
  templateUrl: './media-card.component.html',
  styleUrls: ['./media-card.component.css']
})
export class MediaCardComponent implements OnInit {
  @Input('master') masterName: string;
  @Input() media: MediaResponse;
  constructor() {
  }

  ngOnInit() {
  }

}
