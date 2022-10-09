import React from "react";
import Banner from "../components/Banner";
import Nav from "../components/Nav";
import Row from "../components/Row";
import { requests } from "../services/apis";
import "./styles/HomeScreen.css";

function HomeScreen() {
  return (
    <div>
      <Nav />
      <Banner />

      <Row
        title="Netflix Originals"
        url={requests.fectNetflixOriginals}
        isLargeRow={true}
        key="01"
      />
      <Row
        title="Trending Now"
        url={requests.fetchDiscoverMovies}
        isLargeRow={false}
        key="02"
      />
      <Row
        title="Top Rated"
        url={requests.fetctDiscoverTV}
        isLargeRow={false}
        key="03"
      />
      <Row
        title="Action Movies"
        url={requests.fectNetflixOriginals}
        isLargeRow={false}
        key="04"
      />
    </div>
  );
}

export default HomeScreen;
