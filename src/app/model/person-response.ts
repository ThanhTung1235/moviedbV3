import {Person} from './person';

export class PersonResponse {
  page: number;
  total_results: number;
  total_pages: number;
  results: Person;
}
