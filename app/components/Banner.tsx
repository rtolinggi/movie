import { InformationCircleIcon, PlayIcon } from "@heroicons/react/outline";
import { useEffect, useState } from "react";
import type { Movie } from "~/utils/getData.server";
import Button from "./Button";

const Banner: React.FC<{ netflixOriginals: Movie[] }> = (props) => {
  const { netflixOriginals } = props;
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    setMovie(
      netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]
    );
  }, [netflixOriginals]);

  return (
    <div className='h-[75vh] flex justify-start items-end pb-20'>
      <img
        src={`https://image.tmdb.org/t/p/original/${
          movie?.backdrop_path || movie?.poster_path
        }`}
        alt={movie?.title}
        className='w-full h-screen object-cover bg-cover object-center absolute top-0 left-0 -z-50'
      />
      <div className='flex flex-col gap-2 max-w-sm lg:pl-32 lg:max-w-2xl'>
        <h1 className='text-2xl font-bold  tracking-wide lg:text-5xl'>
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <p className='text-xs text-shadow-md font-semibold lg:text-lg tracking-tighter '>
          {movie?.overview}
        </p>
        <div className='flex gap-2 mt-6'>
          <Button className='' leftIcon={<PlayIcon className='w-6' />}>
            Mulai
          </Button>
          <Button
            className=''
            leftIcon={<InformationCircleIcon className='w-6' />}>
            Selengkapnya
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
