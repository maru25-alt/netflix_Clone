import React, { useState, useEffect } from "react";
import axios from "../store/axios";
import "../css/row.css";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";
const imageUrl = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      //console.log(request)
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.title || "")
        .then((url) => {
          const newUrl = new URL(url);
          console.log(newUrl.href);
          const urlParams = newUrl.searchParams.get("v");
          console.log(urlParams);
          setTrailerUrl(urlParams);
        })
        .catch((error) => {
          console.log(error, "error found");
        });
    }
  };

  return (
    <div className="row">
      {/* title  */}
      <h2>{title}</h2>

      {/* container */}
      <div className="row__posters">
        {movies.map((movie) => {
          return (
            <img
              key={movie.id}
              onClick={() => {
                handleClick(movie);
              }}
              className={`row__poster ${isLargeRow && "row__posterLarger"} `}
              src={`${imageUrl}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
            ></img>
          );
        })}
      </div>
      {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;
