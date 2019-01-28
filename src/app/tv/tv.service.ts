import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Media} from '../model/media';
import {MediaResponse} from '../model/media-response';
import {map} from 'rxjs/operators';
import {Cast} from '../model/cast';
import {Videos} from '../model/videos';
import {Key} from '../model/key';
import {RecommendationsResponse} from '../model/recommendations-response';
import {Credits} from '../model/credits';
import {Recommendations} from '../model/recommendations';

@Injectable({
  providedIn: 'root'
})
export class TvService {

  constructor(private httpClient: HttpClient) {
  }

  apiKey = localStorage.getItem('apiKey');

  getPopular(page: number): Observable<MediaResponse> {
    const url = `https://api.themoviedb.org/3/tv/popular?api_key=${this.apiKey}&language=en-US&page=${page}`;
    return this.httpClient.get<MediaResponse>(url).pipe(map(tv_response => {
      return tv_response as MediaResponse;
    }));
  }

  getTopRate(page: number): Observable<MediaResponse> {
    const url = `https://api.themoviedb.org/3/tv/top_rated?api_key=${this.apiKey}&language=en-US&${page}`;
    return this.httpClient.get<MediaResponse>(url).pipe(map(tv_response => {
      return tv_response as MediaResponse;
    }));
  }

  getOnTv(page: number): Observable<MediaResponse> {
    const url = `https://api.themoviedb.org/3/tv/popular?api_key=${this.apiKey}&language=en-US&${page}`;
    return this.httpClient.get<MediaResponse>(url).pipe(map(tv_response => {
      return tv_response as MediaResponse;
    }));
  }

  getAiringToday(page: number): Observable<MediaResponse> {
    const url = `https://api.themoviedb.org/3/tv/airing_today?api_key=${this.apiKey}&language=en-US&${page}`;
    return this.httpClient.get<MediaResponse>(url).pipe(map(tv_response => {
      return tv_response as MediaResponse;
    }));
  }

  getTvDetails(id: number): Observable<Media> {
    const url = `https://api.themoviedb.org/3/tv/${id}?api_key=${this.apiKey}&language=en-US`;
    return this.httpClient.get<Media>(url).pipe(map(tv_response => {
      return tv_response as Media;
    }));
  }

  getCast(id: number): Observable<Credits> {
    const url = `https://api.themoviedb.org/3/tv/${id}/credits?api_key=${this.apiKey}&language=en-US`;
    return this.httpClient.get<Credits>(url).pipe(map(cast_response => {
      return cast_response as Credits;
    }));
  }

  getVideo(id: number): Observable<Videos> {
    const url = `https://api.themoviedb.org/3/tv/${id}/videos?api_key=${this.apiKey}&language=en-US`;
    return this.httpClient.get<Videos>(url).pipe(map(response_content => {
      return response_content as Videos;
    }));
  }

  getRecommend(id: number): Observable<Recommendations> {
    const url = `https://api.themoviedb.org/3/tv/${id}/recommendations?api_key=${this.apiKey}&language=en-US&page=1`;
    return this.httpClient.get(url).pipe(map(response => {
      return response as Recommendations;
    }));
  }

  getKeyword(id: number): Observable<Key> {
    const url = `https://api.themoviedb.org/3/tv/${id}/keywords?api_key=${this.apiKey}&language=en-US&page=1`;
    return this.httpClient.get(url).pipe(map(response => {
      return response as Key;
    }));
  }
}
