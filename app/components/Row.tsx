import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import type { Movie } from "~/utils/getData.server";
import Thumbnail from "./Thumbnail";

const Row: React.FC<{ title: string; movies: Movie[] }> = (props) => {
  return (
    <div className='container flex flex-col gap-4 mt-4 mx-auto'>
      <h4 className='cursor-pointer text-lg font-semibold text-gray-400 w-fit tracking-wider transition-all duration-150 hover:text-white'>
        {props.title}
      </h4>
      <div className='relative flex justify-start overflow-x-hidden group'>
        <ChevronLeftIcon className='absolute cursor-pointer left-4 top-[30%] m-auto w-20 z-10 opacity-0 transition-all duration-300 group-hover:scale-110 group-hover:opacity-100' />

        <div className='flex justify-start gap-4'>
          {props.movies.map((movie) => (
            <Thumbnail key={movie.id} movie={movie} />
          ))}
        </div>

        <ChevronRightIcon className='absolute cursor-pointer right-4 top-[30%] m-auto w-20 z-10 opacity-0 transition-all duration-300 group-hover:scale-110 group-hover:opacity-100' />
      </div>
    </div>
  );
};

export default Row;
