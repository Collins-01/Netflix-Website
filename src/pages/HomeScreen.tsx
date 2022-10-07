import React from 'react';
import Banner from '../components/Banner';
import Nav from '../components/Nav';
import Row from '../components/Row';
import './styles/HomeScreen.css'

function HomeScreen() {
  return (
    <div>
    <Nav/>
    <Banner/>
    {/* Rows */}
    {/* <Row title="Netflix Originals" url={requests.fectNetflixOriginals} isLargeRow={true}/>
    <Row title="Trending Now" url={requests.fetchDiscoverMovies}/>
    <Row title="Top Rated" url={requests.fetctDiscoverTV}/>
    <Row title="Action Movies" url={requests.fectNetflixOriginals}/> */}
   
</div>
  )
}

export default HomeScreen;