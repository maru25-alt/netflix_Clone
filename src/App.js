import React from "react";
import "./css/app.css";
import Row from "./component/Row";
import requests from "./store/request";
import Banner from "./component/Banner";
import Navbar from "./component/Navbar";

function App() {
  return (
    <div className="app">
      {/* navbar */}
      <Navbar />
      {/* banner */}
      <Banner />
      <Row
        title="NetFlix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row
        title="Romance Movies"
        fetchUrl={requests.fetchRomanceMoviesMovies}
      />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
