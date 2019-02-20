import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Search, SearhPerson} from '../model/search';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private httpClient: HttpClient) {
  }

  apiKey = localStorage.getItem('apiKey');

  searchMulti(keyword: string): Observable<Search> {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&language=en-US&query=${keyword}`;
    return this.httpClient.get<Search>(url).pipe(map(search_response => {
      return search_response as Search;
    }));
  }

  searchMovie(keywrod: string): Observable<Search> {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&language=en-US&query=${keywrod}&page=1&include_adult=false`;
    return this.httpClient.get<Search>(url).pipe(map(response_content => {
      return response_content as Search;
    }));
  }

  searchTv(keyword: string): Observable<Search> {
    const url = `https://api.themoviedb.org/3/search/tv?api_key=${this.apiKey}&language=en-US&query=${keyword}&page=1`;
    return this.httpClient.get<Search>(url).pipe(map(response => {
      return response as Search;
    }));
  }

  searchPerson(keyword: string): Observable<SearhPerson> {
    const url = `https://api.themoviedb.org/3/search/person?api_key=${this.apiKey}&language=en-US&query=${keyword}`;
    return this.httpClient.get<SearhPerson>(url).pipe(map(response => {
      return response as SearhPerson;
    }));
  }
}
