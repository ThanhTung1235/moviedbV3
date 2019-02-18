import {Component, Input, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {PersonResponse} from '../../model/person-response';

@Component({
  selector: 'app-person-card',
  templateUrl: './person-card.component.html',
  styleUrls: ['./person-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonCardComponent implements OnInit {
  @Input() personResponse: PersonResponse;
  urlImage = 'https://image.tmdb.org/t/p/w235_and_h235_face';

  constructor() {
  }

  ngOnInit() {
  }

}
