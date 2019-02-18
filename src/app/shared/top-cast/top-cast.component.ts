import {Component, Input, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {Credits} from '../../model/credits';

@Component({
  selector: 'app-top-cast',
  templateUrl: './top-cast.component.html',
  styleUrls: ['./top-cast.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopCastComponent implements OnInit {
  @Input() credits: Credits;

  constructor() {
  }

  ngOnInit() {
  }

}
