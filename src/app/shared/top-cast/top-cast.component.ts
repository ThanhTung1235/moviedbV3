import {Component, Input, OnInit} from '@angular/core';
import {Credits} from '../../model/credits';

@Component({
  selector: 'app-top-cast',
  templateUrl: './top-cast.component.html',
  styleUrls: ['./top-cast.component.css']
})
export class TopCastComponent implements OnInit {
  @Input() credits: Credits;

  constructor() {
  }

  ngOnInit() {
  }

}
