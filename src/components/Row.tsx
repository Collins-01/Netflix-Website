import React, { useEffect, useState } from 'react';
import "./styles/Row.css";
import axios from 'axios';

interface RowProps{
    title: string;
    url: string;
    isLargeRow: boolean;
}

function Row(props: RowProps) {
    const baseImageURL = 'https://image.tmdb.org/t/p/w500/';
    const [movies, setMovies] = useState([]);

    useEffect(()=>{
        async function fetchData() {
            const request = await axios.get(props.url);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
        
    },[props.url]);
    // console.log(movies)

  return (
    <div className='row'> 
        <h2>{props.title}</h2>

        <div className='row__posters'>
        {
            
            // movies.map(movie=> 
            //     (
            //         ((isLargeRow && movie.poster_path) || (!isLargeRow && movie.backdrop_path)) && (<img
            //             src={`${baseImageURL}${
            //                 isLargeRow ? movie.poster_path :  movie.backdrop_path
            //             }`} 
            //             alt={movie.name} 
            //             key= {movie.id}
            //             className = {`row__poster ${isLargeRow  && 'row__posterLarge'}`}
            //              />)
            //     )
            // )
        }
        </div>
      
    </div>
  )
}

export default Row
