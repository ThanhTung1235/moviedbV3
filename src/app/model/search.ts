import {Media} from './media';
import {Person} from './person';

export class Search {
  page: number;
  total_results: number;
  total_pages: number;
  results: Media[];
}

export class SearhPerson {
  page: number;
  total_results: number;
  total_pages: number;
  results: Person[];
}
