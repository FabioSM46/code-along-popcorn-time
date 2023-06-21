import "./App.css";
import movies from "./data/movies.json";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";
import { useState } from "react";

function App() {
  const [moviesToDisplay, setMoviesToDisplay] = useState(movies);
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [rating, setRating] = useState("");
  const deleteMovie = (id) => {
    const newList = moviesToDisplay.filter((movie) => {
      return movie.id !== id;
    });
    setMoviesToDisplay(newList);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newMovie = {
      id: moviesToDisplay.length + 1,
      title: title,
      year: year,
      rating: rating,
    };
    setMoviesToDisplay([...new Set([newMovie, ...moviesToDisplay])]);
  };

  return (
    <div className="App">
      <Header numberOfMovies={moviesToDisplay.length} />

      <section>
        <form onSubmit={handleSubmit}>
          <label>
            Title:
            <input
              type="text"
              name="title"
              placeholder="enter the title"
              value={title}
              required= {true}
              onChange={(event) => {
                setTitle(event.target.value);
              }}
            />
          </label>

          <label>
            Year:
            <input
              type="number"
              name="year"
              placeholder="enter the year"
              value={year}
              required= {true}
              min={1900}
              max={2300}
              onChange={(event) => {
                setYear(event.target.value);
              }}
            />
          </label>

          <label>
            Rating:
            <input
              type="number"
              name="rating"
              placeholder="enter the rating"
              value={rating}
              required= {true}
              min={1}
              max={10}
              onChange={(event) => {
                setRating(event.target.value);
              }}
            />
          </label>

          <button>Create</button>
        </form>
      </section>

      <Main moviesList={moviesToDisplay} callback={deleteMovie} />
      <Footer />
    </div>
  );
}

export default App;
