import {Component, Input, OnInit} from '@angular/core';
import {Person} from '../../model/person';

@Component({
  selector: 'app-person-overview',
  templateUrl: './person-overview.component.html',
  styleUrls: ['./person-overview.component.css']
})
export class PersonOverviewComponent implements OnInit {
  @Input() person: Person;
  constructor() { }

  ngOnInit() {
  }

}
