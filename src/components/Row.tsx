import React, { useEffect, useState } from "react";
import "./styles/Row.css";
import axios from "axios";
import MoviesService from "../services/movies_service";
import Movie from "../models/movie_model";
import {RemoveScrollBar} from 'react-remove-scroll-bar';

interface RowProps {
  title: string;
  url: string;
  isLargeRow: boolean;
}

function Row(props: RowProps) {
  const moviesService = new MoviesService();
  const baseImageURL = "https://image.tmdb.org/t/p/w500/";
  const [movies, setMovies] = useState<Movie[]>([]);
  async function fetchData() {
    const response = await moviesService.getMovies();
    setMovies(response);
  }

  useEffect(() => {
    fetchData();
  }, [props.url]);

  return (
    <div className="row">
      <h2>{props.title}</h2>

      <div className="row__posters">
        {movies.map(
          (movie) =>
            ((props.isLargeRow && movie.poster_path) ||
              (!props.isLargeRow && movie.backdrop_path)) && (
              <img
                src={`${baseImageURL}${
                  props.isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.title}
                key={movie.id}
                className={`row__poster ${
                  props.isLargeRow && "row__posterLarge"
                }`}
              />
            )
        )}
      </div>
    </div>
  );
}

export default Row;
