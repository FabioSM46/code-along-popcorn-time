import "./Header.css";
export const Header = (props) => {
  let title = "";

  if (props.numberOfMovies === 0) {
    title = `No movies to display`;
  } else {
    title = `Number of Movies: ${props.numberOfMovies}`;
  }

  return (
    <div className="Header">
      <h1>Popcorn Time 🍿</h1>
      <h2>{title}</h2>
    </div>
  );
};
