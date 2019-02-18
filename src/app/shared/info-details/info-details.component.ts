import {Component, Input, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {Media} from '../../model/media';
import {Keyword} from '../../model/keyword';
import {Key} from '../../model/key';

@Component({
  selector: 'app-info-details',
  templateUrl: './info-details.component.html',
  styleUrls: ['./info-details.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InfoDetailsComponent implements OnInit {
  @Input() movie: Media;
  @Input() key: Key;

  constructor() {
  }

  ngOnInit() {
  }

}
