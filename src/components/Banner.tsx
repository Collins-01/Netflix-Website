import React, { useEffect, useState } from 'react'
import './styles/Banner.css'
import Movie from '../models/movie_model';
import MoviesService  from '../services/movies_service';
function Banner() {
  const [loading,setLoading]= useState<boolean>(false);
  const [error, setError]= useState<string>('');
  const [movie, setMovie] = useState<Movie | null>(null); 
    function getRandomNumber(max:number) {
      return Math.floor(Math.random() * max);
    }
    const  moviesService = new MoviesService();
  async function fecthMovie(){
   try {
    setLoading(true);
    const movies = await moviesService.getMovies();
    setLoading(false)
    if(movies.length > 0){
      setMovie(movies[getRandomNumber(movies.length-1)]);
    }
   } catch (e) {
    setError(`${e}`);
   }
  }
  useEffect(()=>{
    fecthMovie();
  }, []);

  function truncate(value: string, n:number) {
    return value?.length > n ? value.substring(0, n-1) + "..." : value
  }



  // if(loading){
  //   return <div> <h1>Loading.... </h1></div>
  // }
  // if(error.length > 0){
  //   return <div> <h1>An error ocurreed  {error}</h1></div>
  // }

  // if(movie!==null && !loading){
   
  // }
  return (
    <header className='banner' style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
    }}>
        <div className='banner__contents'>
            <h1 className='banner__title'>{movie?.title || movie?.original_title}</h1>
            <div className='banner__buttons'>
                <button className='banner__button'>Play</button>
                <button className='banner__button'>My List</button>
            </div>
            <div className='banner__descriptionBox'>
            <h3 className='banner__description'>{movie && truncate(movie?.overview!, 150)} </h3>
            </div>
            
        </div>
        <div className='banner--fadeBottom'/>
    </header>
  )
  // return <div>State Not Detected</div>
}

export default Banner