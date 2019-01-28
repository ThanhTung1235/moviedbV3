import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PersonResponse} from '../model/person-response';
import {Person} from '../model/person';
import {map} from 'rxjs/operators';
import {MovieCredit} from '../model/movie-credit';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private httpClient: HttpClient) {
  }

  apiKey = localStorage.getItem('apiKey');

  getPersonPopular(page: number): Observable<PersonResponse> {
    const urlPopular = `https://api.themoviedb.org/3/person/popular?api_key=${this.apiKey}&language=en-US&page=${page}`;
    return this.httpClient.get<PersonResponse>(urlPopular).pipe(
      map(person_response => {
        console.log(person_response);
        return person_response as PersonResponse;
      })
    );
  }

  getPersonDetail(id: number): Observable<Person> {
    const urlDetails = `https://api.themoviedb.org/3/person/${id}?api_key=${this.apiKey}`;
    return this.httpClient.get<Person>(urlDetails).pipe(
      map(person_details_rsp => {
        return person_details_rsp as Person;
      }));
  }

  getMovieCredit(id: number): Observable<MovieCredit> {
    const urlCredit = `https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${this.apiKey}`;
    return this.httpClient.get<MovieCredit>(urlCredit).pipe(
      map(credit_response => {
        return credit_response as MovieCredit;
      })
    );
  }

}
