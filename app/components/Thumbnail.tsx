import type { Movie } from "~/utils/getData.server";

const Thumbnail: React.FC<{ movie: Movie }> = (props) => {
  console.log(props.movie);
  return (
    <div>
      <div className='rounded-md w-52 overflow-hidden aspect-video xl:aspect-[4/5]'>
        <img
          src={`https://image.tmdb.org/t/p/w500/${
            props.movie?.backdrop_path || props.movie?.poster_path
          }`}
          alt={props.movie?.title}
          className='cursor-pointer w-full h-full hover:scale-125 transition duration-500'
        />
      </div>
      <h4 className='text-xs font-semibold'>
        {props.movie?.title || props.movie?.name}
      </h4>
    </div>
  );
};

export default Thumbnail;
