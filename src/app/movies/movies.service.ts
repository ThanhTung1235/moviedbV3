import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {MediaResponse} from '../model/media-response';
import {Media} from '../model/media';
import {Credits} from '../model/credits';
import {Videos} from '../model/videos';
import {Recommendations} from '../model/recommendations';
import {Key} from '../model/key';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) {
  }

  private apiKey = localStorage.getItem('apiKey');

  getMovie(page: number): Observable<MediaResponse> {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${this.apiKey}&language=en-US&page=${page}`;
    return this.http.get(url).pipe(
      map(response => {
        console.log(response);
        return response as MediaResponse;
      })
    );
  }

  getToprate(page: number): Observable<MediaResponse> {
    const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${this.apiKey}&language=en-US&page=${page}`;
    return this.http.get(url).pipe(
      map(response => {
        console.log(response);
        return response as MediaResponse;
      })
    );
  }

  getUpComing(page: number): Observable<MediaResponse> {
    const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${this.apiKey}&language=en-US&page=${page}`;
    return this.http.get(url).pipe(
      map(response => {
        console.log(response);
        return response as MediaResponse;
      })
    );
  }

  getNow_playing(page: number): Observable<MediaResponse> {
    const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${this.apiKey}&language=en-US&page=${page}`;
    return this.http.get(url).pipe(
      map(response => {
        console.log(response);
        return response as MediaResponse;
      })
    );
  }

  getMovieDetail(id: number): Observable<Media> {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${this.apiKey}&language=en-US`;
    return this.http.get<Media>(url).pipe(
      map(response => {
          return response as Media;
        }
      ));
  }

  getCastMovie(id: number): Observable<Credits> {
    const urlCast = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${this.apiKey}`;
    return this.http.get<Credits>(urlCast).pipe(
      map(response_content => {
        return response_content as Credits;
      })
    );
  }

  getVideos(id: number): Observable<Videos> {
    const url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${this.apiKey}`;
    return this.http.get<Videos>(url).pipe(
      map(response_videos => {
        return response_videos as Videos;
      })
    );
  }

  getRecommend(id: number): Observable<Recommendations> {
    const url = `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${this.apiKey}`;
    return this.http.get<Recommendations>(url).pipe(
      map(response => {
        return response as Recommendations;
      })
    );
  }

  getKeyWord(id: number): Observable<Key> {
    const url = `https://api.themoviedb.org/3/movie/${id}/keywords?api_key=${this.apiKey}`;
    return this.http.get<Key>(url).pipe(
      map(keyword_rsp => {
        return keyword_rsp as Key;
      })
    );
  }
}
