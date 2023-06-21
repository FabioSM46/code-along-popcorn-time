import "./Main.css";
import { Movie } from "./Movie";
export const Main = (props) => {
  return (
    <div className="Main">
      {props.moviesList.map((movie) => {
        return (
          <Movie key={movie.id} movieDetails={movie} callback={props.callback} />
        );
      })}
    </div>
  );
};
