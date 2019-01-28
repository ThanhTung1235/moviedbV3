import {BelongsToCollection} from './belongs-to-collection';
import {Genres} from './genres';

export class Media {
  backdrop_path: string;
  budget: number;
  homepage: string;
  id: number;
  name: string;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: string;
  poster_path: string;
  release_date: string;
  first_air_date: string;
  revenue: string;
  runtime: number;
  title: string;
  belongs_to_collection: BelongsToCollection;
  status: string;
  genres: Genres[];
}
