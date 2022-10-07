import axios from "axios";
import Movie, { Convert } from "../models/movie_model";

export  default class MoviesService {
    
    public async getMovies(): Promise<Movie[]> {
       try {
        let url =  `https://api.themoviedb.org/3/trending/all/day?api_key=d6f621b8e92cc8aaef41a37dab2861e9`;
        const request = await axios.get(url);
        const moviesList = request.data.results as [];

        if(moviesList.length > 0) {
          
          
          // const convertedMovies = moviesList.map((m) =>Convert.toMovie(m));
          return [];
        
        //   return convertedMovies;
        }
        else{
            return  [];
        }
        
        
       } catch (error) {
        throw new Error(`${error}`)
       }
    }
}