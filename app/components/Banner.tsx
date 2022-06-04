import { InformationCircleIcon, PlayIcon } from "@heroicons/react/outline";
import { useEffect, useState } from "react";
import { Movie } from "~/utils/getData.server";
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
    <div className="flex flex-col justify-end h-[100vh] space-y-2 py-16 md:space-y-4 lg:h-[75vh] lg:justify-end lg:pb-12">
      <div className="absolute top-0 left-0 w-screen min-h-screen -z-10">
        <img
          src={`https://image.tmdb.org/t/p/original/${
            movie?.backdrop_path || movie?.poster_path
          }`}
          alt={movie?.title}
          className="bg-cover w-full h-[100vh] object-cover"
        />
      </div>
      <h1 className="text-2xl lg:text-7 md:text-4xl font-boldxl">
        {movie?.title || movie?.name || movie?.original_name}
      </h1>
      <p className="max-w-xs text-xs text-shadow-md md:max-w-lg md:text-md lg:max-w-2xl lg:text-lg ">
        {movie?.overview}
      </p>
      <div className="flex items-center space-x-6">
        <Button
          className=""
          leftIcon={
            <PlayIcon className="w-4 h-4 text-gray-200 md:w-7 md:h-7" />
          }
        >
          Mulai
        </Button>
        <Button
          className="bg-black/80 hover:bg-black/50 opacity-70"
          leftIcon={
            <InformationCircleIcon className="w-4 h-4 text-gray-100 md:w-7 md:h-7" />
          }
        >
          Selengkapnya
        </Button>
      </div>
    </div>
  );
};

export default Banner;
