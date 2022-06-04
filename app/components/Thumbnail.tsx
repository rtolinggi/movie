import { Movie } from "~/utils/getData.server";

const Thumbnail: React.FC<{ movie: Movie }> = (props) => {
  console.log(props.movie);
  return (
    <div className="w-44 h-64 overflow-hidden rounded-md">
      <img
        src={`https://image.tmdb.org/t/p/w500/${
          props.movie?.backdrop_path || props.movie?.poster_path
        }`}
        alt={props.movie?.title}
        className="w-44 h-64 bg-cover  transition duration-300 transform md:hover:scale-105 rounded-md"
      />
    </div>
  );
};

export default Thumbnail;
