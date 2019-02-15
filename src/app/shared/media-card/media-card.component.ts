import {Component, Input, OnInit, ChangeDetectionStrategy, ChangeDetectorRef} from '@angular/core';
import {MediaResponse} from '../../model/media-response';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-media-card',
  templateUrl: './media-card.component.html',
  styleUrls: ['./media-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MediaCardComponent{
  @Input('master') masterName: string;
  @Input() media: MediaResponse;
  constructor() {
  }
}
