import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import { Movie } from "~/utils/getData.server";
import Thumbnail from "./Thumbnail";

const Row: React.FC<{ title: string; movies: Movie[] }> = (props) => {
  return (
    <div>
      <h4 className="cursor-pointer text-lg font-bold text-gray-200 mb-4 transition duration-200 hover:text-white md:text-2xl">
        {props.title}
      </h4>
      <div className="group relative">
        <ChevronLeftIcon className="absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100" />

        <div className="w-full flex justify-start items-center space-x-4 overflow-hidden">
          {props.movies.map((movie) => (
            <Thumbnail key={movie.id} movie={movie} />
          ))}
        </div>

        <ChevronRightIcon className="absolute top-0 bottom-0 right-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100" />
      </div>
    </div>
  );
};

export default Row;
