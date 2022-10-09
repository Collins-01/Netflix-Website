export const requests = { 
    // https://api.themoviedb.org/3/trending/all/day?api_key=d6f621b8e92cc8aaef41a37dab2861e9
    fectNetflixOriginals : `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.TMDB_KEY}`,
    fetchDiscoverMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.TMDB_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`,
    fetchTrending: `/trending/all/day?api_key=${process.env.TMDB_KEY}`,
    fetctDiscoverTV : `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.TMDB_KEY}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`

};