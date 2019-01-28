import {Media} from './media';

export class MediaResponse {
  page: number;
  total_results: number;
  total_pages: number;
  results: Media[];
}
