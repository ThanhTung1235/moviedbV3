import {Component, Input, OnInit} from '@angular/core';
import {Person} from '../../model/person';

@Component({
  selector: 'app-person-info',
  templateUrl: './person-info.component.html',
  styleUrls: ['./person-info.component.css']
})
export class PersonInfoComponent implements OnInit {
  @Input() person: Person;
  gender = {
    1: 'Female',
    2: 'Male',
    0: '-'
  };
  constructor() {
  }

  ngOnInit() {
  }

}
