// To parse this data:
//
//   import { Convert, Movie } from "./file";
//
//   const movie = Convert.toMovie(json);

export default class Movie {
    adult?:             boolean;
    backdrop_path?:     string;
    id?:                number;
    title?:             string;
    original_language?: string;
    original_title?:    string;
    overview?:          string;
    poster_path?:       string;
    media_type?:        string;
    genre_ids?:         number[];
    popularity?:        number;
    release_date?:      Date;
    video?:             boolean;
    vote_average?:      number;
    vote_count?:        number;
    
    constructor(json: any){
        this.adult = json.adult;
        this.backdrop_path = json.backdrop_path;
        this.id = json.id;
        this.title = json.title;
        this.original_language = json.original_language;
        this.original_title = json.original_title;
        this.overview = json.overview;
        this.poster_path = json.poster_path;
        this.media_type = json.media_type;
        this.genre_ids = json.genre_ids;
        this.popularity = json.popularity;
        this.release_date = json.release_date;
        this.video = json.video;
        this.vote_average = json.video_id;
        this.vote_count = json.vote_average;

        
    }
}

// Converts JSON strings to/from your types

