import "./Main.css";
import movies from "../data/movies.json";
import { useState } from "react";
export const Main = () => {
  const [moviesToDisplay, setMoviesToDisplay] = useState(movies);
  const [moviesNumber, setMoviesNumber] = useState(moviesToDisplay.length);

  const deleteMovie = (id) => {
    const newList = moviesToDisplay.filter((movie) => {
      return movie.id !== id;
    });
    setMoviesNumber(newList.length);
    setMoviesToDisplay(newList);
  };

  let title = "";
  /* condtional rendering */
  if (moviesNumber === 0) {
    title = `No movies to display`;
  } else {
    title = `Movies to display: ${moviesNumber}`;
  }

  return (
    <div className="Main">
      <h1>{title}</h1>

      {moviesToDisplay.map((movie) => {
        return (
          <div className="card" key={movie.id}>
            <p>{movie.title}</p>
            <p>Rating: {movie.rating}</p>
            
            {/* condtional rendering */}
            {movie.imgURL ? (
              <img src={movie.imgURL} alt="img missing" />
            ) : (
              <img
                src="https://via.placeholder.com/182x268"
                alt="img missing"
              />
            )}

            {movie.rating > 8 && <p>THIS MOVIE IS AMAZING</p>}
            {/* condtional rendering */}
            <p>
              <button
                onClick={() => {
                  deleteMovie(movie.id);
                }}
              >
                Delete
              </button>
            </p>
          </div>
        );
      })}
    </div>
  );
};
