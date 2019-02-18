import {Component, Input, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {Person} from '../../model/person';

@Component({
  selector: 'app-person-overview',
  templateUrl: './person-overview.component.html',
  styleUrls: ['./person-overview.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PersonOverviewComponent implements OnInit {
  @Input() person: Person;
  constructor() { }

  ngOnInit() {
  }

}
