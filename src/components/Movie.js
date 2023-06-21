export const Movie = (props) => {
  return (
    <div className="card">
      <p>{props.movieDetails.title}</p>
      <p>Rating: {props.movieDetails.rating}</p>
      <p>Year: {props.movieDetails.year}</p>
      <p>
        Genres:{" "}
        {props.movieDetails.genres
          ? props.movieDetails.genres.join(", ")
          : props.movieDetails.genres}
      </p>
      {props.movieDetails.imgURL ? (
        <img src={props.movieDetails.imgURL} alt="img missing" />
      ) : (
        <img src="https://via.placeholder.com/182x268" alt="img missing" />
      )}

      {props.movieDetails.rating > 8 && <p>THIS MOVIE IS AMAZING</p>}
      <p>
        <button
          onClick={() => {
            props.callback(props.movieDetails.id);
          }}
        >
          Delete Movie
        </button>
      </p>
    </div>
  );
};
